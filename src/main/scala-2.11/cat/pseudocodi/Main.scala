package cat.pseudocodi

import cat.pseudocodi.domain.RDRCase
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.scala.DefaultScalaModule
import com.hazelcast.config._
import com.hazelcast.core._
import com.hazelcast.query.{EntryObject, PredicateBuilder}
import com.twitter.app.Flag
import com.twitter.finagle.Http
import com.twitter.server.TwitterServer
import com.twitter.util.Await
import io.finch.jackson._
import io.finch.{Endpoint, _}

import scala.collection.JavaConversions._
import scala.language.{implicitConversions, postfixOps}

/**
  * @author Fede Lopez
  */
object Main extends TwitterServer {

  val instance = Hazelcast.newHazelcastInstance(new Config())
  val mapCases = instance.getMap[Int, RDRCase]("cases")

  implicit val objectMapper: ObjectMapper = new ObjectMapper().registerModule(DefaultScalaModule)

  val caseNames: Endpoint[List[String]] = get("cases" / int) { fromId: Int =>
    val result: List[String] = findCases(fromId, fromId + 25)
    Ok(result)
  }

  val caseNamesByConcept: Endpoint[List[String]] = get("cases" / "concept" / string) { tag: String =>
    val e: EntryObject = new PredicateBuilder().getEntryObject
    val predicate = e.get("conclusion").equal(tag)
    val result: List[String] = mapCases.values(predicate).toList.take(25).map(rdrCase => rdrCase.name)
    Ok(result)
  }

  val caseById: Endpoint[RDRCase] = get("case" / int) { caseId: Int =>
    val result: RDRCase = mapCases.get(caseId)
    Ok(result)
  }

  def main(): Unit = {
    val port: Flag[Int] = flag("port", 8080, "TCP port for HTTP server")
    val server = Http.server.serve(s":${port()}", (caseNames :+: caseNamesByConcept :+: caseById).toService)
    onExit {
      server.close()
    }
    Await.ready(server)
    log.info(s"Serving the web application at port $port")
  }

  def findCases(from: Int, to: Int): List[String] = {
    val cases: List[RDRCase] = for (i <- List.range(from, to)) yield mapCases.get(i)
    cases.map(rdrCase => rdrCase.name)
  }

}
