<meta charset="utf-8">
<h2><?php echo $view->label ?></h2>
<form name ="oferta" id="oferta" method="POST" action="inicio.php"  onsubmit="return Valida(this);" >
    <input type="hidden" name="id" id="id" value="<?php print $view->oferta->getId() ?>">
    <div>
        <label>Puesto</label>
        <input type="text" name="puesto" id="puesto" value = "<?php print $view->oferta->getPuesto() ?>">
    </div>
    <div>
        <label>Escolaridad</label>
        <input type="text" name="escolaridad" id="escolaridad"value = "<?php print $view->oferta->getEscolaridad() ?>">
    </div>
    <div>
        <label>Edad</label>
        <input type="text" name="edad" id="edad" value = "<?php print $view->oferta->getEdad() ?>">
    </div>
    <div>
        <label>Estado Civil</label>
        <input type="text" name="estado" id="estado" value = "<?php print $view->oferta->getEstado() ?>">
    </div>
    <div>
        <label>Experiencia</label>
        <input type="text" name="experiencia" id="experiencia" value = "<?php print $view->oferta->getExperiencia() ?>">
    </div>
    <div>
        <label>Sexo</label>
        <input type="text" name="sexo" id="sexo" value = "<?php print $view->oferta->getSexo() ?>">
    </div>
    <h3>Dirección</h3>
    <div>
        <label>Calle</label>
        <input type="text" name="calle" id="calle" value = "<?php print $view->oferta->getCalle() ?>">
    </div>
    <div>
        <label>Colonia</label>
        <input type="text" name="colonia" id="colonia" value = "<?php print $view->oferta->getColonia() ?>">
    </div>
    <div>
        <label>C.P.</label>
        <input type="text" name="cp" id="cp" value = "<?php print $view->oferta->getCp() ?>">
    </div>
    <div>
        <label>Email</label>
        <input type="text" name="email" id="email" value = "<?php print $view->oferta->getEmail() ?>">
    </div>
    <div class="buttonsBar">
        <input id="cancel" type="button" value ="Cancelar" />
        <input id="submit" type="submit" name="submit" value ="Guardar"/>
    </div>
</form>
