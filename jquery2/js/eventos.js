var iniciaApp = function()
{
	var validarEntrada = function()
	{
		//invalida los eventos que no corresponden a la funcion
			event.preventDefault();
		var usuario = $("#txtUsuario").val();
		var clave = $("#txtClave").val();
		//*********** validaciones ************
		//1.- QUE NO SEAN VACIOS
		if(usuario == "")
		{
			alert("El usuario no debe ser vacio");
			$("#txtUsuario").focus();
		}
		if(clave == "")
		{
			alert("La clave no debe ser vacio");
			$("#txtClave").focus();
		}
		//2.-verificar usuario y contraseña
		var parametros="accion=validarEntrada"+
						"&usuario="+usuario+
						"&clave="+clave+
						"&id="+Math.random();
		$.ajax({
			beforeSend:function(){
				console.log("Validar usuario");
			},
			cache:false,
			type: "POST",
			dataType: "json",
			url: "php/funciones.php",
			data:parametros,
			success: function(response){
				if (response.respuesta == true) {
						$("#datosUsuarios").hide();
						$("nav").show("slow");
				}
				else{
					alert("Usuario/contraseña incorrecta(s)");
					document.getElementById('txtUsuario').value = "";
					document.getElementById('txtClave').value = "";
					$("#txtUsuario").focus();
				}
			},
			error: function(xhr,ajaxOptions,thrownError){
				console.log("Algo salio mal");
			}
		});
		//*** SIN PHP
		// if(usuario == "pw" && clave == "1234")
		// {
		// 	//alert("Bienvenido "+ usuario );
		// 	//Dar entrada al usuario
		// 	$("#datosUsuarios").hide();//escondemos
		// 	$("nav").show("slow"); //mostramos
		// }
		// else
		// 	alert("Usuario y/o contraseña incorrecta(s)");
			console.log("se disparo el submit");
			
	}

	var Altas = function()
	{
		//mostramos el formulario
		$("#altaUsuarios").show("slow");
		$("#altaUsuarios h2").html("Altas usuarios");
				//Apago la funcion de Alta Usuario
		$("#frmAltaUsuarios").on("submit",AltaUsuario);
		//Enciendo la funcion de BajaUsuario para el mismo boton
		$("#frmAltaUsuarios").off("submit",BajaUsuario);
	}
	var AltaUsuario = function()
	{
		event.preventDefault();
		//alert($("#frmAltaUsuarios").serialize());
		var datos = $("#frmAltaUsuarios").serialize();
		var parametros="accion=guardaUsuario&"+datos+
					   "&id"+Math.random();
		$.ajax({
			beforeSend:function(){
				console.log("Guardar Usuario");
			},
			cache:false,
			type: "POST",
			dataType: "json",
			url: "php/funciones.php",
			data:parametros,
			success: function(response){
				if(response.respuesta == true)
				{
					alert("Usuario registrado correctamente");
				}
				else
				{
					alert("No se puede guardar la informacion");
				}
			},
			error: function(xhr,ajaxOptions,thrownError){
			console.log("Algo salio mal");
			}
		});
	}

	var Bajas = function()
	{
		$("#altaUsuarios").show("slow");
		$("#altaUsuarios h2").html("Baja usuarios");
		//Apago la funcion de Alta Usuario
		$("#frmAltaUsuarios").off("submit",AltaUsuario);
		//Enciendo la funcion de BajaUsuario para el mismo boton
		$("#frmAltaUsuarios").on("submit",BajaUsuario);
	}
	var BajaUsuario = function()
	{
		event.preventDefault();
		var datos = "txtNombreUsuario="+$("#txtNombreUsuario").val();
		var parametros="accion=bajaUsuario&"+datos+
					   "&id"+Math.random();
		$.ajax({
			beforeSend:function(){
				console.log("Baja Usuario");
			},
			cache:false,
			type: "POST",
			dataType: "json",
			url: "php/funciones.php",
			data:parametros,
			success: function(response){
				if(response.respuesta == true)
				{
					alert("Usuario dado de baja correctamente");
				}
				else
				{
					alert("No se puede dar de baja la informacion");
				}
			},
			error: function(xhr,ajaxOptions,thrownError){
			console.log("Algo salio mal");
			}
		});
	}

	var Consultas = function()
	{
		$("#consultasUsuarios").show("slow");
		var parametros = "accion=Consultas&"+"&id="+Math.random();
		$.ajax({
			beforeSend:function(){
				console.log("Baja Usuario");
			},
			cache:false,
			type: "POST",
			dataType: "json",
			url: "php/funciones.php",
			data: parametros,
			success: function(response){
				if (response.respuesta){
					$("#tablaConsultas").html(response.tabla);
				}
			},
			error:function(xhr,ajax,thrownError){
				console.log("Ha ocurrido un error");
			}
		});
	}

	$("#btnAltas").on("click",Altas);
	$("#frmValidaEntrada").on("submit",validarEntrada);
	$("#frmAltaUsuarios").on("submit",AltaUsuario);
	$("#btnBajas").on("click",Bajas);
	$("#btnConsultas").on("click",Consultas);
}
$(document).on("ready",iniciaApp);