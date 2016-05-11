
var inicio = function()
{
	var resultado;
	var pagina=0;
	var clicBoton = function()
	{
		$.ajax({beforedSend:function(){
			console.log("Espere...");
		},
	url:'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=917a152f0e410214e0bec334a3bf6128&hash=64c0db5c2d22a1c31bf436e4ecc37edd&nameStartsWith='+$('#heroe').val(),
	datatype: 'json',
	success: function(datax){
		console.log(datax);
		resultado=datax.data.results;
	$("#imagenH").attr("src",datax.data.results[0].thumbnail.path+"."+datax.data.results[0].thumbnail.extension);
	$("#nombre").text(datax.data.results[0].name);
	$("#descripcion").text(datax.data.results[0].description);
	for (i = 0; i < datax.data.results[0].comics.items.length; i++) {
		$("#comics").append("-"+datax.data.results[0].comics.items[i].name+"<br>");
	}
	},
	error:function(xhr,error,throws){

	}
	});
}
	var siguiente = function(){
		if (typeof resultado[pagina+1]!='undefined') {
			pagina++;
			$("#comics").empty();
			$("#imagenH").attr("src",resultado[pagina].thumbnail.path+"."+resultado[pagina].thumbnail.extension);
			$("#nombre").text(resultado[pagina].name);
			$("#descripcion").text(resultado[pagina].description);
			for (i = 0; i < resultado[pagina].comics.items.length; i++) {
				$("#comics").append("-"+resultado[pagina].comics.items[i].name+"<br>");
			}
		}
	}
		var anterior = function(){
		if (typeof resultado[pagina-1]!='undefined') {
			pagina--;
			$("#comics").empty();
			$("#imagenH").attr("src",resultado[pagina].thumbnail.path+"."+resultado[pagina].thumbnail.extension);
			$("#nombre").text(resultado[pagina].name);
			$("#descripcion").text(resultado[pagina].description);
			for (i = 0; i < resultado[pagina].comics.items.length; i++) {
				$("#comics").append("-"+resultado[pagina].comics.items[i].name+"<br>");
			}
		}
	}
	$("#buttoncomics").on("click",function(){
		$("#comics").toggle();
	})
	$("#buscar").on("click",clicBoton);
	$("#sig").on("click",siguiente);
	$("#ant").on("click",anterior);
}	
$(document).on("ready",inicio);