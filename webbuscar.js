/*
*/
const express = require('express')
const app = express()

const cursos1= require ('./datos');
const opciones  = {
	'idcurso':
	{
		alias : 'c',
	},
	'nombreestudiante': 
	{
		alias : 'e',
	},
	'cedula': {
		alias : 'i'

	},
	'proceso': {
		alias : 'p'

	}
}
const args = require('yargs')
				.command('buscar','buscar y registrarme',opciones)
				.demandOption('c','Eliga un curso')
				.demandOption('e','Eliga un estudiante')
				.demandOption('i','Ingrese una identificacion')
				.argv;
let buscar = cursos1.cursos.find( data => data.id == args.c);
//console.log(args);

if (!buscar) {
	console.log("NO SE ENCONTRO UN CURSO");
} else {
	// proceso de guardado o mostrar datos si se pasa el parametro p=inscribir
	if (args.p!="") {
		if (args.p=="inscribir") {
			txt="<h1>Proceso de inscripcion:</h1>"
			+ " Curso elegido : <strong>"+buscar.nombre+"</strong><br>"
			+" Nombre Estudiante : <strong>"+args.e+"</strong><br>"
			+" Identificacion Estudiante : <strong>"+args.i+"</strong><br>";
			app.get('/', function (req, res) {
			  res.send(txt)
			})
			app.listen(3000)
	
		} else {
			console.log("Busque su curso y coloque inscribir");
			cursos1.cursos.forEach(function(data) {
		  	setTimeout(function() {
				 txt="Id del curso: "+data.id+"\n"+
					"Nombre del curso: "+data.nombre+"\n"+
					"Duraccion: "+data.duracion+"\n"+
					"Valor: "+data.valor+"\n"+
					"\n";
					  console.log(txt);
					},2000);
			});
		}
	}	
}