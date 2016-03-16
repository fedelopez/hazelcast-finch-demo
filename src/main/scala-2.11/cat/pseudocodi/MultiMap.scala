package cat.pseudocodi

import java.util

import com.hazelcast.core.{Hazelcast, HazelcastInstance, MultiMap}

/**
  * @author Fede
  */
object MultiMap {

  def main(args: Array[String]): Unit = {
    val h: HazelcastInstance = Hazelcast.newHazelcastInstance()
    val map: MultiMap[String, String] = h.getMultiMap[String, String]("movies")
    map.put("2015", "Mad Max")
    map.put("2015", "Jurassic World")
    map.put("2016", "Zootopia")
    val movies: util.Collection[String] = map.get("2015")
    println(movies)
    System.exit(0)
  }

}
