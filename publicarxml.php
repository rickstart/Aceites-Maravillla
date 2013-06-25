<?php

/**
 * @author [mofugeek]
 * @copyright [2012]
 */

$xml = new DomDocument('1.0', 'UTF-8');
$root = $xml->createElement('tienda');
$root = $xml->appendChild($root);


$calzado=$xml->createElement('calzado');
 $calzado =$root->appendChild($calzado);
$nom=$xml->createElement('nombre','Nike air');
$nom =$calzado->appendChild($nom);

$marca=$xml->createElement('marca','Nike');
$marca =$calzado->appendChild($marca);

$color = $xml->createElement('color','negro');
$color =$calzado->appendChild($color);

$calzado=$xml->createElement('calzado');
 $calzado =$root->appendChild($calzado);
$nom=$xml->createElement('nombre','F 50');
$nom =$calzado->appendChild($nom);
$marca=$xml->createElement('marca','Adidas');
$marca =$calzado->appendChild($marca);
$color= $xml->createElement('color','blanco y azul');
$color =$calzado->appendChild($color);

  $xml->formatOutput = true;

            //Guardar el xml como un archivo de String, es decir, poner los string en la variable $strings_xml:
	
            $strings_xml = $xml->saveXML();

            //Finalmente, guardarlo en un directorio:

            $xml->save('xml/miarchivo.xml');



echo 'Se creo el XML';


?>