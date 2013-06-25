<?php

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$state = $_POST['state'];
$telefono = $_POST['telefono'];

$header = 'From: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . ", de la empresa " . $empresa . " \r\n";
$mensaje .= "Su e-mail es: " . $email . " \r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = $_POST['par'];


$asunto = 'Pedido desde Web Aceitera';

if(mail($para, $asunto, utf8_decode($mensaje), $header))
{
  echo $para;

}
else
{
  echo "Error Mensaje No Enviado ";
  echo $para;
 
}

?> 