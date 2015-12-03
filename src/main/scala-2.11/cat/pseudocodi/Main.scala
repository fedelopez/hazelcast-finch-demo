package cat.pseudocodi

import cat.pseudocodi.domain.RDRCase
import com.hazelcast.config._
import com.hazelcast.core._
import com.twitter.app.Flag
import com.twitter.finagle.{Service, Http}
import com.twitter.finagle.http.{Request, Response}
import com.twitter.finagle.param.Stats
import com.twitter.server.TwitterServer
import com.twitter.util.Await
import io.finch.Endpoint
import io.finch._
import io.finch.circe._

import scala.language.{implicitConversions, postfixOps}

/**
  * @author FedericoL
  */
object Main extends TwitterServer {

  val maxNumberOfCases = 100000
  val instance = Hazelcast.newHazelcastInstance(new Config())
  val mapCases = instance.getMap[Int, RDRCase]("cases")

  val cases: Endpoint[List[String]] = get("cases" / int) { fromId: Int =>
    val result: List[String] = findCases(fromId, fromId + 25)
    Ok(result)
  }

  val api: Service[Request, Response] = cases.toService

  def main(): Unit = {
    log.info("Serving the web application")
    val port: Flag[Int] = flag("port", 8080, "TCP port for HTTP server")
    val server = Http.server.configured(Stats(statsReceiver)).serve(s":${port()}", api)
    onExit {
      server.close()
    }
    Await.ready(adminHttpServer)
  }

  def findCases(from: Int, to: Int): List[String] = {
    val cases: List[RDRCase] = for (i <- List.range(from, to)) yield mapCases.get(i)
    cases.map(rdrCase => rdrCase.name)
  }

}
