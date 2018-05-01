var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect("mongodb://localhost/mdijb");

//Define el schema de los servicios
var serviceSchema = {
	title:String,
	description:String,
	imageUrl:String,
	pricing:Number
};

var Service = mongoose.model("Service", serviceSchema);

app.set("view engine", "pug");

app.use(express.static("public"));

app.get("/",function(solicitud,respuesta){
	respuesta.render("index");
});

app.get("/servicios/new", function(solicitud,respuesta){
	respuesta.render("servicios/new");
});

app.listen(8080);