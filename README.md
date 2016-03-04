# jsnlog.ES6Demo

This very simple demo shows how to import JSNLog in an ES6 NodeJs application and then log something to the console.

##How to install and run this demo##

1. Download the zip file and expand on your computer;
2. Open directory *es6Demo*. All relevant files are here;
3. Have a look at *es6Demo/es6/main.js*. This is an ES6 file that imports and uses jsnlog;
4. *npm install* to install gulp, jsnlog and babel (the ES6 transpiler);
5. *gulp* to build the project. This transpiles *es6Demo/es6/main.js* into *es6Demo/main.js*;
6. *node main.js* to run the transpiled file. jsnlog will write a log message to the command line.

##About JSNLog##

[JSNLog](http://jsnlog.com) is a client side JavaScript logging package that automatically logs to your server side log.

[JSNLog for .Net](http://jsnlog.com) logs to Log4Net, NLog, Elmah, Serilog and Common.Logging. Supports ASP.NET 4 and ASP.NET Core.

[JSNLog for NodeJs](http://nodejs.jsnlog.com) runs on both the client and the server. It optionally uses Winston transports to log to MongoDb, etc.






