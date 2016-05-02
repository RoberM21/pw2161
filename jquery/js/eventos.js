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
	var clicBoton2 = function()
	{
		alert("Boton 2");
	}
	var teclaUnInput = function(tecla)
	{
		if(tecla.which == 13)
		{
			//que se pocisione en el otroInput
			$("#otroInput").focus();	
		}
	}
	//prepara los eventos de todos mis objetos
	$("#miBoton").off("click",clicBoton);
	$("#miBoton").on("click",clicBoton);
	//se lleva el elemento que teclea
	$("#unInput").on("keypress",teclaUnInput)
}
//main
$(document).on("ready",inicio);