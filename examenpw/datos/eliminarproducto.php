<?php

function eliminarproducto()
{
	$respuesta = false;
	$id = "'".$_POST["id"]."'";
	$conexion  = mysql_connect("localhost","root","");
	mysql_select_db("productos");
	$consulta = sprintf("delete from productos where id=%d",$id);
	$resultado = mysql_query($consulta);
	if (mysql_affected_rows()>0) 
	{
		$respuesta = true;
	}
	$salidaJSON = array('respuesta' => $respuesta );
	print json_encode($salidaJSON);
}



$opcion = $_POST["opcion"];
	switch ($opcion) {
		case 'eliminarproducto':
			eliminarproducto();
			break;
		
		default:
			# code...
			break;
	}
?>