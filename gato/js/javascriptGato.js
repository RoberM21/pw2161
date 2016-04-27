//variables globales
var turno         = false;
var letraCasilla  = "";
var cuentaJuego   = 0;
var CuentaJugadas = 0;

function iniciaGato()
{	
	//Elimina lavariable de localstorage
	//localStorage.removeItem("webCuentaJuego");
	//Preguntar si el navegador es compatible con localstorage
	if(typeof(Storage) != "undefined")
	{
		if(localStorage.webCuentaJuego)
		{
			cuentaJuego = parseInt(localStorage.webCuentaJuego);
			cuentaJuego = cuentaJuego+1;
		}
		else
		{
			cuentaJuego = 1;
		}
		document.getElementById("titulojuego").innerHTML = "Juego del Gato(#"+cuentaJuego+")";
	}
	else
	{
		alert("¡Utiliza un navegador actualizado!");
	}
		
}
function validaJugada(letra)
{
	var ganador = false;
	var b11 = document.getElementById("unouno").innerHTML;
	var b12 = document.getElementById("unodos").innerHTML;
	var b13 = document.getElementById("unotres").innerHTML;
	var b21 = document.getElementById("dosuno").innerHTML;
	var b22 = document.getElementById("dosdos").innerHTML;
	var b23 = document.getElementById("dostres").innerHTML;
	var b31 = document.getElementById("tresuno").innerHTML;
	var b32 = document.getElementById("tresdos").innerHTML;
	var b33 = document.getElementById("trestres").innerHTML;
	//jugadas
	//renglones
	if(b11==b12 && b12==b13 && b11!="&nbsp;")
		ganador=true;
	if(b21==b22 && b22==b23 && b21!="&nbsp;")
		ganador=true;
	if(b31==b32 && b32==b33 && b31!="&nbsp;")
		ganador=true;
	//columnas
	if(b11==b21 && b21==b31 && b11!="&nbsp;")
		ganador=true;
	if(b12==b22 && b22==b32 && b12!="&nbsp;")
		ganador=true;
	if(b13==b23 && b23==b33 && b13!="&nbsp;")
		ganador=true;
	//diagonales
	if(b11==b22 && b22==b33 && b11!="&nbsp;")
		ganador=true;
	if(b13==b22 && b22==b31 && b13!="&nbsp;")
		ganador=true;
	//¿Alguien gano?
	if (ganador == true) 
	{
		alert("¡Ganador "+letra);
		localStorage.webCuentaJuego = cuentaJuego;
	}
	else
		if (ganador == false && CuentaJugadas == 9)
			{
				alert("Empate");
				localStorage.webCuentaJuego = cuentaJuego;
			}
}

function escribe(casilla)
{
	var letra ="";
	letraCasilla = document.getElementById(casilla).innerHTML;
	//if (letraCasilla=="&nbsp";) {};
	if(letraCasilla !="X" && letraCasilla!="O")
	{
		if (turno == false)
		{
			letra = "X";
		}
		else
			letra = "O";
		document.getElementById(casilla).innerHTML = letra;
		turno = !turno; //turno  = false;
	}
	CuentaJugadas = CuentaJugadas+1;
	//para saber quien gano, validamos la jugada
	validaJugada(letra);
}
function Borrar()
{
	localStorage.removeItem("webCuentaJuego");
	iniciaGato();
}