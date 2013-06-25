<?php
include ('funciones.php');
//usuario y clave pasados por el formulario
$usuario = $_POST['usuario'];
$clave = $_POST['clave'];
//usa la funcion conexiones() que se ubica dentro de funciones.php
if (conexiones($usuario, $clave)){

	header('Location:inicio.php');
} else {
	//si no es valido volvemos al formulario inicial
	header('Location: ingresar.php');
}
?>
