var inicioApp = function()
{	
	var Altas = function()
	{
		$("#artAltasBajas").hide("slow");
		$("#artAltasBajas").show("slow");
		$("#btnEliminarProducto").hide();
		$("#btnGuardarProducto").show();
		$("#txtNomProducto").focus();
	}

	var Bajas = function()
	{
		$("#artAltasBajas").hide("slow");
		$("#artAltasBajas").show("slow");
		$("#btnEliminarProducto").show();
		$("#btnGuardarProducto").hide();
		$("#txtNomProducto").focus();
	}

	var GuardarProducto = function()
	{
		var id = $("txtIdProducto").val();
		var nombre = $("txtNomProducto").val();
		var categoria = $("txtCategoria").val();
		var subcategoria = $("txtSubcategoria").val();
		var marca = $("txtMarca").val();
		var peso = $("txtPeso").val();
		var altura = $("txtAltura").val();
		var anchura = $("txtAnchura").val();
		var profundidad = $("txtProfundidad").val();

		if(id=="" || nombre=="" || categoria=="" || subcategoria=="" || marca=="" || peso=="" || altura=="" || anchura=="" || profundidad=="")
			alert("Debe llenar todos los campos");
		else
		{
			var parametros = "opcion=guardarproducto"+
							"&id="+id+
							"&nombre="+nombre+
							"&categoria="+categoria+
							"&subcategoria="+subcategoria+
							"&marca="+marca+
							"&peso="+peso+
							"&altura="+altura+
							"&anchura="+anchura+
							"&profundidad="+profundidad+
							"&random="+Math.random();

			$.ajax({
				cache:false,
				type: "POST",
				dataType: "json",
				url: "datos/guardarproducto.php",
				data: parametros,
				success: function(response){
					if(response.respuesta == true)
					{
						alert("Datos guardadines");

					}
					else
					alert("Datos no guardadines");
				},
				error: function(xhr,ajaxOptionx,throws){
					console.log("Ha ocurrido un error");
				}

			});
		}
		

	}

	var EliminarProducto = function()
	{
		var id = $("#txtIdProducto").val();
		if(usuario!="")
		{
			var parametros = "opcion=eliminarProducto"
							"&id="+id+
							"&random="+Math.random();

			$.ajax({
				cache: false,
				type: "POST",
				dataType: "json",
				data: parametros,
				url: "datos/eliminarproducto.php",
				success: function(response){
					if(response.respuesta == true)
					{
						alert("Se ha eliminado el usuario");
						$("#artAltasBajas > input").val("");
						
					}

				},
				error: function(xhr,ajaxOption,throws){
					console.log("Ha ocurrido un error");
				}

			});

		}
	}

	$("#btnAltas").on("click",Altas);
	$("#btnBajas").on("click",Bajas);
	$("#btnGuardarProducto").on("click",GuardarProducto);
	$("#btnEliminarProducto").on("click",EliminarProducto);
}
$(document).on("ready",inicioApp);