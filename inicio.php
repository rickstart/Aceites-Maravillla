<?php
include ('funciones.php');


//uso de la funcion verificar_usuario()
if (verificar_usuario()){
include_once ("oferta.php");// incluyo las clases a ser usadas


$action='inicio';
if(isset($_POST['action']))
{$action=$_POST['action'];}


$view= new stdClass(); // creo una clase standard para contener la vista
$view->disableLayout=false;// marca si usa o no el layout , si no lo usa imprime directamente el template




// para no utilizar un framework y simplificar las cosas uso este switch, la idea
// es que puedan apreciar facilmente cuales son las operaciones que se realizan
switch ($action)
{
    case 'inicio':
        $view->ofertas=Oferta::getOfertas(); // tree todas las vacantes
        $view->contentTemplate="templates/bolsaGrid.php"; // seteo el template que se va a mostrar
        break;
    case 'refreshGrid':
        $view->disableLayout=true; // no usa el layout
        $view->ofertas=Oferta::getOfertas();
        $view->contentTemplate="templates/bolsaGrid.php"; // seteo el template que se va a mostrar
        break;
    case 'saveOffer':
        // limpio todos los valores antes de guardarlos
        // por ls dudas venga algo raro
        $id=intval($_POST['id']);
        $puesto=cleanString($_POST['puesto']);
        $escolaridad=cleanString($_POST['escolaridad']);
        $edad=cleanString($_POST['edad']);
        $estado=cleanString($_POST['estado']);
        $experiencia=cleanString($_POST['experiencia']);
        $sexo=cleanString($_POST['sexo']);
        $calle=cleanString($_POST['calle']);
        $colonia=cleanString($_POST['colonia']);
        $cp=cleanString($_POST['cp']);
        $email=cleanString($_POST['email']);



        $oferta=new Oferta($id);
        $oferta->setPuesto($puesto);
        $oferta->setEscolaridad($escolaridad);
        $oferta->setEdad($edad);
        $oferta->setEstado($estado);
        $oferta->setExperiencia($experiencia);
        $oferta->setSexo($sexo);
        $oferta->setCalle($calle);
        $oferta->setColonia($colonia);
        $oferta->setCp($cp);
        $oferta->setEmail($email);

        $oferta->save();
        break;
    case 'newOffer':
        $view->oferta=new Oferta();
        $view->label='Nueva Oferta';
        $view->disableLayout=true;
        $view->contentTemplate="templates/bolsaForm.php"; // seteo el template que se va a mostrar
        break;
    case 'editOffer':
        $editId=intval($_POST['id']);
        $view->label='Editar Oferta';
        $view->oferta=new Oferta($editId);
        $view->disableLayout=true;
        $view->contentTemplate="templates/bolsaForm.php"; // seteo el template que se va a mostrar
        break;
    case 'deleteOffer':
        $id=intval($_POST['id']);
        $oferta=new Oferta($id);
        $oferta->delete();
        die; // no quiero mostrar nada cuando borra , solo devuelve el control.
        break;
    case 'publisher':
        
        $oferta=new Oferta();
        $oferta->exportXml();
        echo "Se ha publicado con exito :)";
        $view->disableLayout=true;
        $view->contentTemplate="templates/confirma.php";
        break;
    default :
}

// si esta deshabilitado el layout solo imprime el template
if ($view->disableLayout==true)
{include_once ($view->contentTemplate);}
else
{include_once ('templates/layout.php');} // el layout incluye el template adentro

} 
else {
    //si el usuario no es verificado volvera al formulario de ingreso
    echo "Usuario no identificado";
    header('Location: ingresar.php');

}


