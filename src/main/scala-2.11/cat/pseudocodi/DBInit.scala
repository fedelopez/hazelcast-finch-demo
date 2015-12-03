package cat.pseudocodi

import java.util.Date

import cat.pseudocodi.domain.{Attribute, Conclusion, Episode, RDRCase}
import com.hazelcast.config._
import com.hazelcast.core._
import rx.lang.scala.Observable

import scala.concurrent.duration.DurationInt
import scala.language.{implicitConversions, postfixOps}

/**
  * @author FedericoL
  */
object DBInit {

  val maxNumberOfCases = 100000

  def main(args: Array[String]) {
    val instance = Hazelcast.newHazelcastInstance(newConfig())
    val mapCases = instance.getMap[Int, RDRCase]("cases")

    val o = Observable.interval(1 second).takeWhile(p => mapCases.size() < maxNumberOfCases)
    o.subscribe(n => println(s"Size: ${mapCases.size()}, last: ${mapCases.get(mapCases.size() - 1)}"))

    Range(0, maxNumberOfCases - 1).foreach((n: Int) =>  mapCases.put(n, simpleCase(n)))
  }

  def simpleCase(n: Int) =
    new RDRCase(n.toString, s"case-$n", Set(new Episode(new Date(), Set(new Attribute("glucose", "5.8")))), Set(new Conclusion("diabetic")))

  def newConfig(): Config = {
    val maxSizeConfig = new MaxSizeConfig()
    maxSizeConfig.setMaxSizePolicy(MaxSizeConfig.MaxSizePolicy.PER_NODE)
    val mapConfig = new MapConfig()
    mapConfig.setName("default")
    mapConfig.setMaxSizeConfig(maxSizeConfig)
    val config = new Config()
    config.addMapConfig(mapConfig)
    config
  }

}
