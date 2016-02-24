package cat.pseudocodi

import java.lang
import java.util.Map.Entry
import java.util.concurrent.Future

import cat.pseudocodi.domain.RDRCase
import com.hazelcast.config.Config
import com.hazelcast.core.{Hazelcast, HazelcastInstance}
import com.hazelcast.mapreduce._

import scala.collection.JavaConversions._
import scala.concurrent.duration.Duration

/**
  * @author Fede Lopez
  */
object MapReduce {

  def main(args: Array[String]) {
    val instance: HazelcastInstance = Hazelcast.newHazelcastInstance(new Config)
    val job: Job[Int, RDRCase] = createJob(instance)
    val mapper: MappingJob[Int, String, Integer] = job.mapper(new DiabeticMapper)
    val reducer: ReducingSubmittableJob[Int, String, Integer] = mapper.reducer(new DiabeticReducerFactory)

    val time: Long = System.nanoTime
    val future: Future[Integer] = reducer.submit(new DiabeticCollator)
    println(s">> Number of diabetics: ${future.get}, time: ${Duration.fromNanos(System.nanoTime - time).toSeconds} secs")

    instance.shutdown()
  }

  def createJob(instance: HazelcastInstance): Job[Int, RDRCase] = {
    val mapCases = instance.getMap[Int, RDRCase]("cases")
    val jobTracker: JobTracker = instance.getJobTracker("diabeticTracker")
    val source: KeyValueSource[Int, RDRCase] = KeyValueSource.fromMap(mapCases)
    jobTracker.newJob(source)
  }

  class DiabeticMapper extends Mapper[Int, RDRCase, String, Integer] {
    override def map(keyIn: Int, valueIn: RDRCase, context: Context[String, Integer]): Unit = {
      val result: Int = if (valueIn.conclusion.equalsIgnoreCase("diabetic")) 1 else 0
      context.emit("diabetics_count", result)
    }
  }

  class DiabeticReducerFactory extends ReducerFactory[String, Integer, Integer] {
    override def newReducer(keyIn: String): Reducer[Integer, Integer] = new DiabeticReducer
  }

  class DiabeticReducer extends Reducer[Integer, Integer] {
    @volatile
    var value: Int = 0

    override def reduce(valueIn: Integer): Unit = {
      value += valueIn
    }

    override def finalizeReduce(): Integer = value
  }

  class DiabeticCollator extends Collator[java.util.Map.Entry[String, Integer], Integer] {
    override def collate(iterable: lang.Iterable[Entry[String, Integer]]): Integer = {
      var value: Int = 0
      for (entry <- iterable) {
        value += entry.getValue
      }
      value
    }
  }

}
