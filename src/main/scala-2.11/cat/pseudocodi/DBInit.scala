package cat.pseudocodi

import java.util.Date

import cat.pseudocodi.domain.{Attribute, Episode, RDRCase}
import com.github.javafaker.Faker
import com.hazelcast.config._
import com.hazelcast.core._
import rx.lang.scala.Observable

import scala.concurrent.duration.DurationInt
import scala.language.{implicitConversions, postfixOps}
import scala.util.Random._

/**
  * @author Fede Lopez
  */
object DBInit {

  val maxNumberOfCases = 100000
  val nameGenerator = new Faker()

  def main(args: Array[String]) {
    val instance = Hazelcast.newHazelcastInstance(newConfig())
    val mapCases = instance.getMap[Int, RDRCase]("cases")

    val o = Observable.interval(1 second).takeUntil(p => mapCases.size() >= maxNumberOfCases)
    o.subscribe(n => println(s"Size: ${mapCases.size()}, last: ${mapCases.get(mapCases.size() - 1)}"))

    Range(0, maxNumberOfCases).foreach((n: Int) => mapCases.put(n, simpleCase(n)))
  }

  def simpleCase(n: Int) = {
    val name = new Attribute("name", nameGenerator.name().fullName())
    val sex = new Attribute("sex", if (nextBoolean()) "F" else "M")
    val address = new Attribute("address", nameGenerator.address().streetAddress(true))
    val country = new Attribute("country", nameGenerator.country().name())
    val glucose = new Attribute("glucose", (nextFloat() * 10).toString)
    val insulin = new Attribute("insulin", (nextFloat() * 15).toString)
    val concepts = List("diabetic", "pregnant", "dehydration")
    val attributes: Set[Attribute] = Set(name, sex, address, country, glucose, insulin)
    new RDRCase(n.toString, s"case-$n", Set(new Episode(new Date(), attributes)), concepts(nextInt(concepts.size)))
  }

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
