/*
Entrega 1
forma de uso 
node buscar -c=1 -e=juan -i=1 -p=inscribir
node buscar -c=1 -e=juan -i=1 -p=
node buscar -c=1 -e=juan -p=inscribir
//
Demand esta deprecate toco usar demandOption 
*/
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
			console.log("Proceso de inscripcion:");
			txt=" Curso elegido :"+buscar.nombre+"\n\r"
			+" Nombre Estudiante :"+args.e+"\n\r"
			+" Identificacion Estudiante :"+args.i+"\n\r";
			console.log(txt);
			// guardar archivo
			const fs = require('fs');
			fs.writeFile("./inscripciones/"+args.i+".txt", txt, function(err) {
	    		if(err) {
			        console.log("Se ha producido un error:"+err);
			    } else {
					console.log("Archivo generado en la carpeta inscripciones");
			    }
			}); 
			// fin guardar archivo
		} else {
			console.log("Busque su curso y coloque inscribir");
			cursos1.cursos.forEach(function(data) {
		  	setTimeout(function() {
				let txt="Id del curso: "+data.id+"\n"+
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