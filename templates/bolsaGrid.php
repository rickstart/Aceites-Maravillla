<meta charset="utf-8">
<div class="bar">
    <a id="new" class="button" href="javascript:void(0);">Nueva Oferta</a>
</div>
<div class="bar_right">
    <a id="salir" class="button" href="salir.php">Salir</a>
</div>

<table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Puesto</th>
            <th>Escolaridad</th>
            <th>Edad</th>
            <th>Estado</th>
            <th>Experiencia</th>
            <th>Sexo</th>
            <th>Localidad</th>
            <th>Email</th>
            <th>Editar</th>
            <th>Borrar</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($view->ofertas as $oferta):  // uso la otra sintaxis de php para templates ?>
            <tr>
                <td><?php echo $oferta['id'];?></td>
                <td><?php echo $oferta['puesto'];?></td>
                <td><?php echo $oferta['escolaridad'];?></td>
                <td><?php echo $oferta['edad'];?></td>
                <td><?php echo $oferta['estado'];?></td>
                <td><?php echo $oferta['experiencia'];?></td>
                <td><?php echo $oferta['sexo'];?></td>
                <td><?php echo $oferta['colonia'];?></td>
                <td><?php echo $oferta['email'];?></td>
                <td><a class="edit" href="javascript:void(0);" data-id="<?php echo $oferta['id'];?>">Editar</a></td>
                <td><a class="delete" href="javascript:void(0);" data-id="<?php echo $oferta['id'];?>">Borrar</a></td>
            </tr>
        <?php endforeach; ?>
    </tbody>
</table>

<div class="bar">
    <a id="publish" class="button" href="javascript:void(0);" >Publicar</a>
</div>



