const cursos1= require ('./datos');
console.log("1. Tamaño del vector: "+cursos1.cursos.length);
cursos1.cursos.forEach(function(data) {
  	setTimeout(function() {
		let txt="Id del curso: "+data.id+"\n"+
			"Nombre del curso: "+data.nombre+"\n"+
			"Duraccion: "+data.duracion+"\n"+
			"Valor: "+data.valor+"\n"+
			"\n";
	  console.log(txt);
	},2000)
});


/*let mostrar=(a,b,callback)=>{
	setTimeout(function() {
		callback(a*b);
	},2000)
}
calcular(20,5,function(x){
	console.log(x);
});
*/