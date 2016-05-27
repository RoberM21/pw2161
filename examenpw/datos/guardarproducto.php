<?php
	
function  guarduaroriductos()
{
	$respuesta = false;
	$id 			= "'".$_POST["id"]."'";
	$nombre 		= "'".$_POST["nombre"]."'";
	$categoria 		= "'".$_POST["categoria"]."'";
	$subcategoria 	= "'".$_POST["subcategoria"]."'";
	$marca 			= "'".$_POST["marca"]."'";
	$peso 			= "'".$_POST["peso"]."'";
	$altura 		= "'".$_POST["altura"]."'";
	$anchura 		= "'".$_POST["anchura"]."'";
	$profundidad 	= "'".$_POST["profundidad"]."'";
	$con=mysql_connect("localhost","root","");
	mysql_select_db("producto");
	$consulta = sprintf("insert into productos(id,nombre,categoria,subcategoria,marca,peso,altura,anchura,profundidad)values(%d,%s,%s,%s,%f,%d,%d,%d)")
	mysql_query($consulta);
	if(mysql_affected_rows()>0)
	{
		$respuesta = true;
	}
	$salidaJSON = array('respuesta' => $respuesta);
	print json_encode($salidaJSON);
}

	
$opcion = $_POST["opcion"];
switch ($opcion) {
	case 'guardarproductos':
		guardarproductos();
		break;
	
	default:
		# code...
		break;
}
?>