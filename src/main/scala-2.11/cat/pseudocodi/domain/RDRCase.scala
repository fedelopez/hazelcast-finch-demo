package cat.pseudocodi.domain

import java.util.Date

/**
  * @author FedericoL
  */
case class RDRCase(id: String, name: String, episodes: Set[Episode], conclusion: String)

case class Attribute(name: String, value: String)

case class Episode(date: Date, attributes: Set[Attribute])