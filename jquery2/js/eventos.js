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
		//verificar usuario y contraseña
		if(usuario == "pw" && clave == "1234")
		{
			//alert("Bienvenido "+ usuario );
			//Dar entrada al usuario
			$("#datosUsuarios").hide();//escondemos
			$("nav").show("slow"); //mostramos
		}
		else
			alert("Usuario y/o contraseña incorrecta(s)");
			console.log("se disparo el submit");
			
	}
	$("#frmValidaEntrada").on("submit",validarEntrada);
}
$(document).on("ready",iniciaApp);