name := "hazelcast"

version := "1.0"

scalaVersion := "2.11.7"

libraryDependencies ++= Seq(
  "com.twitter" % "twitter-server_2.11" % "1.15.0",
  "com.github.finagle" %% "finch-core" % "0.9.1",
  "com.github.finagle" %% "finch-jackson" % "0.9.1",
  "com.hazelcast" % "hazelcast" % "3.6.1",
  "com.hazelcast" % "hazelcast-client" % "3.6.1",
  "io.reactivex" %% "rxscala" % "0.25.+",
  "com.github.javafaker" % "javafaker" % "0.7"
)

