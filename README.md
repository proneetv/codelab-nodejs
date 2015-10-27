# codelab-nodejs

Node.js is a server side platform built on Google Chrome's JavaScript Engine(V8 Engine) & was developed by Ryan Dahl in 2009 

- develop I/O intensive web applications like video streaming sites, single-page applications
- Node.js also provides a rich library of various JavaScript modules
- open source, cross-platform Runtime Environment for server-side and networking applications

Features:
=========
- Asynchronous and Event Driven
- Very Fast
- Single Threaded but highly Scalable

# Used for:

* I/O bound Applications & JSON APIs based Applications
* Data Streaming/Intensive Applications
* Single Page Applications

Tutorial:
=========

`var http = require("http");`

`require` is a directive which we use to load a Node.js module.

- Created a server, which will listen to client's request similar to Apache HTTP Server.
- Server created in earlier step will read HTTP request made by client which can be a browser or console and return the response.

# REPL

```
$ node
> var x = 0
undefined
> do {
... x++;
... console.log("x: " + x);
... } while ( x < 5 );
```

# NPM

Node Package Manager which you use to install node modules.

```
npm install <module-name>
npm search <module-name>
```

# Callback?

- asynchronous equivalent for a function 
- a callback function is called at the completion of a given task
- all modules mostly support callbacks

> (in reference to readasync.js) program blocks until it reads the file and then only it proceeds to end the program where as in second example, program does not wait for file reading

# Event Driven Programming:

There is generally a main loop that listens for events, and then triggers a callback function when one of those events is detected

# STREAMS:

Read data from a source or write data to a destination in continous fashion

There are four types of streams.

* Readable - Stream which is used for read operation.
* Writable - Stream which is used for write operation.
* Duplex - Stream which can be used for both read and write operation.
* Transform - A type of duplex stream where the output is computed based on input.

PIPING OF INPUTS to OUTPUTS and so on

# WEB SERVER:

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

- http POST http://localhost:8081/
- http http://localhost:8081/
- http DELETE http://localhost:8081/user
- http http://localhost:8081/{pattern,patFOOtern,pat***tern} - You can pattern match on the endpoints

# REST Architecture:

- Revolves around resource where every component is a resource and a resource is accessed by a common interface using HTTP 
- REST Server simply provides access to resources and REST client accesses and modifies the resources using HTTP protocol

Methods:

* GET - This is used to provide a read only access to a resource.
* PUT - This is used to create a new resource.
* DELETE - This is used to remove a resource.
* POST - This is used to update a existing resource or create a new resource.

# Further helper links:

- nodeschool.io
- http://expressjs.com/ - Documentation
