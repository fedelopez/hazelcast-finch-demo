package cat.pseudocodi

import java.lang
import java.util.Map.Entry

import cat.pseudocodi.domain.RDRCase
import com.hazelcast.config.Config
import com.hazelcast.core.{Hazelcast, HazelcastInstance}
import com.hazelcast.mapreduce._

import scala.collection.JavaConversions._

/**
  * @author Fede Lopez
  */
object MapReduce {

  def main(args: Array[String]) {
    val instance: HazelcastInstance = Hazelcast.newHazelcastInstance(new Config)
    val mapCases = instance.getMap[Int, RDRCase]("cases")
    val jobTracker: JobTracker = instance.getJobTracker("diabeticTracker")
    val source: KeyValueSource[Int, RDRCase] = KeyValueSource.fromMap(mapCases)
    val job: Job[Int, RDRCase] = jobTracker.newJob(source)
    val mapper: MappingJob[Int, String, Integer] = job.mapper(new DiabeticMapper)
    val reducer: ReducingSubmittableJob[Int, String, Integer] = mapper.reducer(new DiabeticReducerFactory)
    val future: JobCompletableFuture[Integer] = reducer.submit(new DiabeticCollator)
    println(s">>>>>>> Aggregated sum: ${future.get}")
  }

  class DiabeticMapper extends Mapper[Int, RDRCase, String, Integer] {
    override def map(keyIn: Int, valueIn: RDRCase, context: Context[String, Integer]): Unit = {
      val result: Int = if (valueIn.conclusion.equalsIgnoreCase("diabetic")) 1 else 0
      context.emit("diabeticsum", result)
    }
  }

  class DiabeticReducerFactory extends ReducerFactory[String, Integer, Integer] {
    override def newReducer(keyIn: String): Reducer[Integer, Integer] = new SalaryReducer
  }

  class SalaryReducer extends Reducer[Integer, Integer] {
    @volatile
    var value: Int = 0

    override def reduce(valueIn: Integer): Unit = this.value += valueIn

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
