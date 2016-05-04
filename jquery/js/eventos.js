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
		$.ajax({
			beforeSend:function(){
				console.log("Espere...");
			},
		  url: 'https://randomuser.me/api/',
		  dataType: 'json',
		  success: function(data){
		  	console.log(data);
		  	//alert(data.results[0].name.first+ " "+data.results[0].name.last);
		  	//mostrar la informacion en el html
		  	$("#fotoPersona").attr("src",data.results[0].picture.medium);
		  	$("#txtNombreUser").html(data.results[0].name.first);
		  	$("#txtApellidoUser").html(data.results[0].name.last);

		  },
		  error:function(xhr,error,throws){

		  }
		});
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
	$("#miBoton").on("click",clicBoton2);
	//se lleva el elemento que teclea
	$("#unInput").on("keypress",teclaUnInput)
}
//main
$(document).on("ready",inicio);