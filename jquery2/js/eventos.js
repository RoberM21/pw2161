var iniciaApp = function()
{
	var validarEntrada = function()
	{
		var usuario = $("#txtUsuario").val();
		var contraseña = $("#txtContraseña").val();
		//validaciones
		//1.- QUE NO SEAN VACIOS
		if(usuario == "")
		{
			alert("El usuario no debe ser vacio");
			$("#txtUsuario").focus();
		}
		if(contraseña == "")
		{
			alert("La clave no debe ser vacio");
			$("#txtContraseña").focus();
		}
		console.log("se disparo el submit");
	}
	$("#frmValidaEntrada").on("submit",validarEntrada);
}
$(document).on("ready",iniciaApp);