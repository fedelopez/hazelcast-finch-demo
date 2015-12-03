package cat.pseudocodi.domain

import java.util.Date

/**
  * @author FedericoL
  */
case class RDRCase(id: String, name: String, episodes: Set[Episode], conclusions: Set[Conclusion]) {

  def allAttributes: Set[Attribute] = {
    val result = {
      for {
        episode <- episodes
        attribute <- episode.attributes
      } yield attribute
    }
    result
  }
}

case class Attribute(name: String, value: String)

case class Episode(date: Date, attributes: Set[Attribute])

case class Conclusion(name: String)
