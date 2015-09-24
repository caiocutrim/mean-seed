"use strict";

var express = require("express");
var app = express();
var http = require("http");
var server;
var port = app.set("port", 3000);

app.get("/", function(req, res){
	res.send("<h1> Hello, this is the our initial configuration of the mean seed, feel free to change the structure </h1>");
});
server = http.createServer(app);

server.listen(app.get("port"), function(){
	console.log("express server runs on address http://localhost:"+app.get("port"));
})
