<?php
include_once("oferta.php");
//funcion para conectar a la base de datos y verificar la existencia del usuario
function conexiones($usuario, $clave) {

	$conexion= new sQuery();
	$sql = "SELECT * FROM `tbl_user` WHERE `nombre`='$usuario' AND `password`='$clave'";
	
	
	if ($conexion->executeQuery($sql)!=0){
		//inicio de sesion
		session_start();
		//configurar un elemento usuario dentro del arreglo global $_SESSION
		$_SESSION['usuario']=$usuario;
		//retornar verdadero
		return true;
	} else {
		//retornar falso
		return false;
	}
	
			
}
//funcion para verificar que dentro del arreglo global $_SESSION existe el nombre del usuario
function verificar_usuario(){
	//continuar una sesion iniciada
	@session_start();
	//comprobar la existencia del usuario
	if ($_SESSION[usuario]){
		return true;
	}
}
?>
