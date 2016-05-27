<?php
//funciones

function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "")
{
    $theValue = (!get_magic_quotes_gpc()) ? addslashes($theValue) : $theValue;

    switch ($theType) {
        case "text":
          $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
          break;
        case "long":
        case "int":
          $theValue = ($theValue != "") ? intval($theValue) : "NULL";
          break;
        case "double":
          $theValue = ($theValue != "") ? "'" . doubleval($theValue) . "'" : "NULL";
          break;
        case "date":
          $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
          break;
        case "defined":
          $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
          break;
    }
    return $theValue;
}

function guardaEncuesta()
{
	$clave = GetSQLValueString($_POST["txtClave"],"long");
	$nombre = GetSQLValueString($_POST["txtNombre"],"text");
	$pre1 = GetSQLValueString($_POST["txtPregunta1"],"text");
	$res1 = GetSQLValueString($_POST["txtRespuesta1"],"text");
	$pre2 = GetSQLValueString($_POST["txtPregunta2"],"text");
	$res2 = GetSQLValueString($_POST["txtRespuesta2"],"text");
	$pre3 = GetSQLValueString($_POST["txtPregunta3"],"text");
	$res3 = GetSQLValueString($_POST["txtRespuesta3"],"text");
	$fecha = GetSQLValueString($_POST["txtFecha"],"text");
	$sem = GetSQLValueString($_POST["txtsemestre"],"long");
	$respuesta = false;
	$conexion = mysql_connect("localhost","root","");
	mysql_select_db("progweb");
	$guarda = sprintf("insert into encuestas values(%d,%s,%s,%s,%s,%s,%s,%s,%s,%d)",$clave,$nombre,$pre1,$res1,$pre2,$res2,$pre3,$res3,$fecha,$sem);
	$resultado = mysql_query($guarda);
	if(mysql_affected_rows()>0)
		$respuesta=true;
	$salidaJSON = array('respuesta' => $respuesta);
	print json_encode($salidaJSON);
}
$accion = $_POST["accion"];
//menu principal
switch ($accion) {
	case 'guardaEncuesta':
		guardaEncuesta();
		break;
	default:
		# code...
		break;
}
?>