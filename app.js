var express = require('express')

var app = express();

app.get("/",function(solicitud,respuesta){
	respuesta.send("Hola mundo");
});

app.listen(8080);