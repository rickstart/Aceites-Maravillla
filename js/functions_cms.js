
$(document).ready(function(){ //cuando el html fue cargado iniciar

    //añado la posibilidad de editar al presionar sobre edit
    $('.edit').live('click',function(){
        //this = es el elemento sobre el que se hizo click en este caso el link
        //obtengo el id que guardamos en data-id
        var id=$(this).attr('data-id');
        //preparo los parametros
        params={};
        params.id=id;
        params.action="editOffer";
        $('#popupbox').load('inicio.php', params,function(){
            $('#block').show();
            $('#popupbox').show();
        })

    })

    $('.delete').live('click',function(){
        //obtengo el id que guardamos en data-id
        var id=$(this).attr('data-id');
        //preparo los parametros
        params={};
        params.id=id;
        params.action="deleteOffer";
        $('#popupbox').load('inicio.php', params,function(){
            $('#content').load('inicio.php',{action:"refreshGrid"});
        })

    })

    $('#new').live('click',function(){
        params={};
        params.action="newOffer";
        $('#popupbox').load('inicio.php', params,function(){
            $('#block').show();
            $('#popupbox').show();
        })
    })

    $('#publish').live('click',function(){
        params={};
        params.action="publish";
        
        $('#popupbox').load('inicio.php', params,function(){
            $('#block').show();
            $('#popupbox').show();
        })
    })


    $('#oferta').live('submit',function(){
        var params={};
        params.action='saveOffer';
        params.id=$('#id').val();
        params.puesto=$('#puesto').val();
        params.escolaridad=$('#escolaridad').val();
        params.edad=$('#edad').val();
        params.estado=$('#estado').val();
        params.experiencia=$('#experiencia').val();
        params.sexo=$('#sexo').val();
        params.calle=$('#calle').val();
        params.colonia=$('#colonia').val();
        params.cp=$('#cp').val();
        params.email=$('#email').val();

        $.post('inicio.php',params,function(){
            $('#block').hide();
            $('#popupbox').hide();
            $('#content').load('inicio.php',{action:"refreshGrid"});
        })
        return false;
    })


    // boton cancelar, uso live en lugar de bind para que tome cualquier boton
    // nuevo que pueda aparecer
    $('#cancel').live('click',function(){
        $('#block').hide();
        $('#popupbox').hide();
    })


})

NS={};


function Valida( oferta ) {
    
  if (oferta.email.value.length==0) {
    alert("Tiene que escribir un email") ;
    oferta.email.focus() 
    return false;

  } else {
    alert("ok");
    oferta.submit();
    return true;
  }
}

