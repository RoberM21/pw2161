//variable global
var operador="";

function igual()
{
	var valor1 = document.calculadora.operando1.value;
	var valor2 = document.calculadora.operando2.value;
	document.calculadora.resultado.value = eval(valor1+operador+valor2);
}

function numeros(num) 
{
	
	if(operador=="") //Escribir en el operador
	{
		var valor = document.calculadora.operando1.value;
		if(valor=="0")//vaciamos la caja;
		{
			document.calculadora.operando1.value="";
		}
			//concatenar los valores de num con los de operador1
			document.calculadora.operando1.value = document.calculadora.operador1.value+num;
		else
		{
			var valor = document.calculadora.operando2.value;
			if(valor=="0")//vaciamos la caja;
			{
			document.calculadora.operando2.value="";
			}
			//concatenar los valores de num con los de operador1
			document.calculadora.operando2.value = document.calculadora.operador2.value+num;
		}
	}
}
function operadores(ope)
{
	operador=ope;
}