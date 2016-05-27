var iniciaApp = function()
{
	var Altas = function()
	{
		$("#altaEncuesta").show();
	}
	var AltaEncuesta = function()
	{
		event.preventDefault();
		var datos = $("#frmAltaEncuesta").serialize();
		var parametros="accion=guardaEncuesta&"+datos+
						"&id"+Math.random();
		$.ajax({
			beforeSend:function(){
				console.log("Guardar Encuesta");
			},
			cache:false,
			type: "POST",
			dataType:"json",
			url:"php/funciones.php",
			data:parametros,
			success: function(response){
				if(response.respuesta == true)
				{
					alert("Encuesta dada de alta correctamente");
				}
				else
				{
					alert("No se puede guardar la encuesta");
				}
			},
			error: function(xhr,ajaxOptions,thrownError){
			console.log("Algo salio mal");
			}
		});
	}

	$("#btnAltas").on("click",Altas);
	$("#frmAltaEncuesta").on("submit",AltaEncuesta);
}
$(document).on("ready",iniciaApp);