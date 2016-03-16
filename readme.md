#Hazelcast / Finch Demo 

This demo web app showcases: 

* [Hazelcast](http://hazelcast.org/) as memory data store 
* [Twitter's Finch](https://github.com/finagle/finch) as backend 
* [RXJs](https://github.com/Reactive-Extensions/RxJS) as front-end

##Instructions

###Intialise Hazelcast

- Run `DBInit.scala` to initialise the Hazelcast DB

###Start web server

- On the command prompt, run `npm install`
- Run `Main.scala` to start the Finch server
- Open the browser and go to http://localhost:8080/app

###Todo

- Put waiting indicator while cases are loading
- Script a console demo on `docs` folder based on [Hazelcast getting started](http://hazelcast.org/getting-started)