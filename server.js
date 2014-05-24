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

	//Setup the Route, you are almost done
	app.use(app.router);
});

app.get('/', function(req, res){
	res.redirect("/");
});

app.get('*', function(req, res){
  res.redirect("/404.html");
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Listening on " + port);
});
