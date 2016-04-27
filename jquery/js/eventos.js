/*jquery(etiquetas,clases,id)
$ alias (un sobrenombre)
$ == jquery*/
var inicio = function()
{
	var clicBoton = function()
	{
		console.log("Clic de boton");
		$(".anuncioweb").html("Clic boton");
		$(".anuncioweb").append("Clic boton");
	}
	//prepara los eventos de todos mis objetos
	$("#miBoton").on("click",clicBoton);
}
//main
$(document).on("ready",inicio);