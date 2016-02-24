package cat.pseudocodi

import java.lang
import java.util.Map.Entry

import cat.pseudocodi.domain.RDRCase
import com.hazelcast.config.Config
import com.hazelcast.core.{Hazelcast, HazelcastInstance, IMap}
import com.hazelcast.mapreduce._

import scala.collection.JavaConversions._

/**
  * @author FedericoL
  */
object MapReduce {

  def main(args: Array[String]) {
    val config: Config = new Config
    val h: HazelcastInstance = Hazelcast.newHazelcastInstance(config)
    val cases: IMap[String, RDRCase] = h.getMap("cases")
    val jobTracker: JobTracker = h.getJobTracker("diabeticTracker")
    val source: KeyValueSource[String, RDRCase] = KeyValueSource.fromMap(cases)
    val job: Job[String, RDRCase] = jobTracker.newJob(source)
    val mapper: MappingJob[String, String, Integer] = job.mapper(new DiabeticMapper)
    //    val future: ICompletableFuture[Integer] = mapper.reducer(new DiabeticReducerFactory).submit(new DiabeticCollator)
    //    println(s">>>>>>> Aggregated sum: ${future.get}")
  }

  class DiabeticMapper extends Mapper[String, RDRCase, String, Integer] {
    def map(key: String, value: RDRCase, context: Context[String, Integer]) {
      val result: Int = if (value.conclusion.equalsIgnoreCase("diabetic")) 1 else 0
      context.emit("diabeticsum", result)
    }
  }

  class DiabeticReducerFactory extends ReducerFactory[String, Integer, Integer] {
    override def newReducer(keyIn: String): Reducer[Integer, Integer] = new SalaryReducer
  }

  class SalaryReducer extends Reducer[Integer, Integer] {
    @volatile
    var value: Int = 0

    override def reduce(valueIn: Integer): Unit = this.value += value

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
