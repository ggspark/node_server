/*
Author: Gaurav Gupta
Date Created: 24 May 2014
File: server.js
*/

var express = require('express'),
	app = express.createServer()


// Configuration
app.configure(function(){
	app.use(express.static(__dirname + '/public-pages'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());

	//Error Handling
	app.use(express.logger());
	app.use(express.errorHandler({
		dumpExceptions: true, 
		showStack: true
	}));
	
	//Setup the Route, you are almost done
	app.use(app.router);
});

app.get('/', function(req, res){
	//Apache-like static index.html (public/index.html)
	res.redirect("/");
	//Or render from view
	//res.render("index.html")
});

app.use(express.bodyParser());

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Listening on " + port);
});
