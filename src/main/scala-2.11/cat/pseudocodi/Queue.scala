package cat.pseudocodi

import java.util.concurrent.{BlockingQueue, TimeUnit}

import com.hazelcast.core.{Hazelcast, HazelcastInstance}
import rx.lang.scala.Observable

import scala.concurrent.duration.DurationInt

/**
  * Example from http://docs.hazelcast.org/docs/3.5/manual/html/queue.html
  *
  * @author Fede
  */
object Queue {

  def main(args: Array[String]): Unit = {
    val h: HazelcastInstance = Hazelcast.newHazelcastInstance()
    val queue: BlockingQueue[String] = h.getQueue("nba-draft-players")

    queue.offer("Cliff Alexander")
    val player1: String = queue.poll() //immediately returns
    println(s"Player got: $player1")

    queue.offer("Justin Anderson", 500, TimeUnit.MILLISECONDS)
    val player2: String = queue.poll(5, TimeUnit.SECONDS) //timed blocking Operations
    println(s"Player got: $player2")


    val o = Observable.interval(10 seconds).take(1)
    o.subscribe(n => {
      queue.put("Brandon Ashley")
      println("Brandon Ashley added")
    })

    val player3: String = queue.take() //indefinitely blocking Operation
    println(s"Player got: is $player3")

    System.exit(0)
  }

}
