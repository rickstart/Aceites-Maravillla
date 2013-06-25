   
var para="ayuda@aceitera.com";



   function max(id,width,height)
   {
      
      document.getElementById(id).style.width= width;
      document.getElementById(id).style.height= height;

   }

  function min(id)
   {
      
      document.getElementById(id).style.width= "234px";
      document.getElementById(id).style.height= "481px";

   }

var desplaza=0;
//animacion timeline
  function goto(id,des)
  {
    switch(des)
    {
      case 'izq':
     
      if (desplaza != 0 ) 
        {
        desplaza=desplaza+600;
        
        $(id).animate({ left: desplaza}, 2000);
        document.getElementById('flecha_izq').src="images/nosotros/flecha_izq_on.png";
        break;
        };
        break;
      
      case 'der':
      if (desplaza >= -1000) 
      {
        
        desplaza=desplaza-600;
        $(id).animate({ left: desplaza }, 2000);
        document.getElementById('flecha_der').src='images/nosotros/flecha_der_on.png';
        break;

      };
      break;
       

    }

  }
//end timeline


function swap(id,path,top,left)
{
  path="images/"+path
  document.getElementById(id).src= path;
  document.getElementById(id).style.top=top;
  document.getElementById(id).style.left=left;


}

/********* Menus *******/

   function Item(ide,path,active,out,over,flag,group)
   {
      this.ide=ide;
      this.path=path;
      this.active=active;
      this.out=out;
      this.over=over;
      this.flag=flag;
      this.group=group;

   }


   var men1 = new Item("btn_jabones","images/productos/","btn_jabones_activo.png","btn_jabones.png","btn_jabones_roll.png",0,"prod");
   var men2 = new Item("btn_aceites","images/productos/","btn_aceites_activo.png","btn_aceites.png","btn_aceites_roll.png",0,"prod");
   var men3 = new Item("btn_mantecas","images/productos/","btn_mantecas_activo.png","btn_mantecas.png","btn_mantecas_roll.png",0,"prod");

   var main1 = new Item("home","images/menu/","btn_home_roll.png","btn_home.png","btn_home_over.png",0,"main");
   var main2 = new Item("nosotros","images/menu/","btn_nosotros_roll.png","btn_nosotros.png","btn_nosotros_over.png",0,"main");
   var main3 = new Item("productos","images/menu/","btn_productos_roll.png","btn_productos.png","btn_productos_over.png",0,"main");
   var main4 = new Item("industriales","images/menu/","btn_industriales_roll.png","btn_industriales.png","btn_industriales_over.png",0,"main");
   var main5 = new Item("bolsa","images/menu/","btn_bolsa_roll.png","btn_bolsa.png","btn_bolsa_over.png",0,"main");
   var main6 = new Item("pedido","images/menu/","btn_pedido_roll.png","btn_pedido.png","btn_pedido_over.png",0,"main");
   var main7 = new Item("contacto","images/menu/","btn_contacto_roll.png","btn_contacto.png","btn_contacto_over.png",0,"main");


  itemsProd = new Array()
  itemsProd[0]=men1;
  itemsProd[1]=men2;
  itemsProd[2]=men3;
  itemsProd[3]=main1;
  itemsProd[4]=main2;
  itemsProd[5]=main3;
  itemsProd[6]=main4;
  itemsProd[7]=main5;
  itemsProd[8]=main6;
  itemsProd[9]=main7;
  

  function over(id,top,left)
  {
    var k;
    for( i =0; i<10 ;i++)
    {
     
      k=itemsProd[i].path+itemsProd[i].over;

      
      if(id==itemsProd[i].ide && itemsProd[i].flag==0)
      {
        document.getElementById(id).src= k;
        document.getElementById(id).style.top=top;
        document.getElementById(id).style.left=left;
        
      }
    }


  }




  function out(id,top,left)
  {
    var k;
    for( i =0; i<10 ;i++)
    {
     
      k=itemsProd[i].path+itemsProd[i].out;
      
      if(id==itemsProd[i].ide && itemsProd[i].flag==0)
      {
        document.getElementById(id).src= k;
        document.getElementById(id).style.top=top;
        document.getElementById(id).style.left=left;
        
      }
    }

  }

  function active(id,top,left)
  {
    var k;
    for( i =0; i<=10 ;i++)
    {
     
      k=itemsProd[i].path+itemsProd[i].active;
      
      if(id==itemsProd[i].ide)
      {
       
        document.getElementById(id).src= k;
        document.getElementById(id).style.top=top;
        document.getElementById(id).style.left=left;
        itemsProd[i].flag=1;
        off_prod(id);
        

        
      }
    }

  }

  function off_prod(id)
  {
    var k;
    var group;

    for (var i = 0; i <= 9; i++) {
      
      if(id==itemsProd[i].ide)
      {
        group=itemsProd[i].group;
      
      }
    }

    switch(group)
    {
      case 'prod':
        for(i=0; i<=2; i++)
        {
          k=itemsProd[i].path+itemsProd[i].out;
          if (id!=itemsProd[i].ide) 
          {
            document.getElementById(itemsProd[i].ide).src= k;
            itemsProd[i].flag=0;
          }
        }
        break;
      case 'main':
        for(i=3; i<=10; i++)
        {
          k=itemsProd[i].path+itemsProd[i].out;
          
          if (id!=itemsProd[i].ide) 
          {
            document.getElementById(itemsProd[i].ide).src= k;
            document.getElementById(itemsProd[i].ide).style.top= "4px";
            itemsProd[i].flag=0;
            
           
          }
        }
        break;

    }
    
    
  }

//end menus
  


//*****************  Mapa Cedis *****************/



 function Location(ide,estado,flag)
   {
      this.ide=ide;
      this.estado=estado;
      this.flag=flag;

   }


   var cedi1 = new Location("cedi_1","aguascalientes",0);
   var cedi2 = new Location("cedi_2","guanajuato",0);
   var cedi3 = new Location("cedi_3","guanajuato",0);
   var cedi4 = new Location("cedi_4","queretaro",0);
   var cedi5 = new Location("cedi_5","tamaulipas",0);
   var cedi6 = new Location("cedi_6","hidalgo",0);
   var cedi7 = new Location("cedi_7","tlaxcala",0);
   var cedi8 = new Location("cedi_8","edo_mexico",0);
   var cedi9 = new Location("cedi_9","morelos",0);
   var cedi10 = new Location("cedi_10","puebla",0);
   var cedi11 = new Location("cedi_11","puebla",0);
   var cedi12 = new Location("cedi_12","guerrero",0);
   var cedi13 = new Location("cedi_13","san_luis_potosi",0);
   var cedi14 = new Location("cedi_14","oaxaca",0);
   var cedi15 = new Location("cedi_15","oaxaca",0);
   var cedi16 = new Location("cedi_16","tabasco",0);
   var cedi17 = new Location("cedi_17","veracruz",0);
   var cedi18 = new Location("cedi_18","veracruz",0);
   var cedi19 = new Location("cedi_19","veracruz",0);
   var cedi20 = new Location("cedi_20","veracruz",0);
   var cedi21 = new Location("cedi_21","veracruz",0);


  cedis = new Array()
  cedis[0]=cedi1;
  cedis[1]=cedi2;
  cedis[2]=cedi3;
  cedis[3]=cedi4;
  cedis[4]=cedi5;
  cedis[5]=cedi6;
  cedis[6]=cedi7;
  cedis[7]=cedi8;
  cedis[8]=cedi9;
  cedis[9]=cedi10;
  cedis[10]=cedi11;
  cedis[11]=cedi12;
  cedis[12]=cedi13;
  cedis[13]=cedi14;
  cedis[14]=cedi15;
  cedis[15]=cedi16;
  cedis[16]=cedi17;
  cedis[17]=cedi18;
  cedis[18]=cedi19;
  cedis[19]=cedi20;
  cedis[20]=cedi21;

  var id_cedi;

  function asigna_cedi(id)
  {
    id_cedi=id;
  }

function next_cedi()
{
  var xmlDoc = cargarXMLDoc('xml/cedis.xml');
  if (xmlDoc != null && id_cedi!=null)
  {
     var cedis = xmlDoc.getElementsByTagName("cedis")[0].getElementsByTagName("cedi");

    for (var i = 0; i < cedis.length; i++) 
    {

      ide=cedis[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;

      if (id_cedi==ide) 
      {
        next=cedis[i+1].getElementsByTagName("id")[0].childNodes[0].nodeValue;
     
        id_cedi=next;
        return next;
      }
    }
  }


}

function prev_cedi()
{
  var xmlDoc = cargarXMLDoc('xml/cedis.xml');
  if (xmlDoc != null && id_cedi!=null)
  {
     var cedis = xmlDoc.getElementsByTagName("cedis")[0].getElementsByTagName("cedi");

    for (var i = 0; i < cedis.length; i++) 
    {

      ide=cedis[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;

      if (id_cedi==ide) 
      {
        prev=cedis[i-1].getElementsByTagName("id")[0].childNodes[0].nodeValue;
       
        id_cedi=prev;
        return prev;
      }
    }
  }


}

  function active_state(id)
  {
        for(i=0; i<=20; i++)
        {
          
          if (id==cedis[i].ide) 
          {
            document.getElementById(cedis[i].ide).src= "images/pedido/gota_gde.png";
            cedis[i].flag=1;
            document.getElementById(cedis[i].estado).style.display="block";
            off_state(cedis[i].ide);
         
            
            
           
          }
        }

    var xmlDoc = cargarXMLDoc('xml/cedis.xml');
    if (xmlDoc != null)
    {
 


     var locations = xmlDoc.getElementsByTagName("cedis")[0].getElementsByTagName("cedi");
     var ide;
     var direccion_p= document.getElementById("direccion_p");
     var email_p= document.getElementById("email_p");
     var telefono_p= document.getElementById("telefono_p");
     var nombre_p=document.getElementById("nombre_p");
     var telefono_p=document.getElementById("telefono_p")
     //alert(locations.length);
     for (var i = 0; i < locations.length; i++) 
     {

      ide=locations[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
      nombre=locations[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
      email=locations[i].getElementsByTagName("email")[0].childNodes[0].nodeValue;
      para=email;
      calle=locations[i].getElementsByTagName("direccion")[0].getElementsByTagName("calle")[0].childNodes[0].nodeValue;
      colonia=locations[i].getElementsByTagName("direccion")[0].getElementsByTagName("colonia")[0].childNodes[0].nodeValue;
      ciudad=locations[i].getElementsByTagName("direccion")[0].getElementsByTagName("ciudad")[0].childNodes[0].nodeValue;
      telefono=locations[i].getElementsByTagName("telefono");
    
      var tels="";
      for (var j = 0; j < telefono.length; j++) {
        num=telefono[j].getElementsByTagName("numero")[0].childNodes[0].nodeValue;
        ext=telefono[j].getElementsByTagName("ext")[0].childNodes[0].nodeValue;
        tels += "<p class='txt_gray txt_small'>"+num+"<span class='txt_blue'> "+ext+"</span></p>";
        

      }
   
      
      if (id==ide) 
      {
          
          document.getElementById('par').value = para;
          direccion_p.innerHTML =  "<p class='txt_gray txt_small'>"+calle+"<br>"+colonia+"<br>"+ciudad+"<br></p>";
          email_p.innerHTML = "<p class='txt_gray txt_small'>"+email+"</p>";
          nombre_p.innerHTML = nombre;
          telefono_p.innerHTML=tels
          id_cedi=id;
          
      }
      
     }

    }



  }

   function off_state(id)
   {
    var state;
        for(i=0; i<=20; i++)
        {
          
          if (id==cedis[i].ide) 
          {
            

            state=cedis[i].estado
           
           
          }
        }


        for(i=0; i<=20; i++)
        {
          
          if (id!=cedis[i].ide) 
          {
            document.getElementById(cedis[i].ide).src= "images/pedido/gota_ch.png";
            cedis[i].flag=0;
            if(state!=cedis[i].estado)
            {
               document.getElementById(cedis[i].estado).style.display="none"
            }

           
          }
        }


   }

   function swap_point(id,flag)
   {
    var sel;
      for(i=0; i<=20; i++)
      {
          
        if (id==cedis[i].ide) 
        {
            
          sel=cedis[i].flag;

        }
      }


    switch(flag)
    {
      case 0:
        if (sel==0) 
        {
          document.getElementById(id).src= "images/pedido/gota_ch.png";
        }
        break;

      case 1:
        document.getElementById(id).src= "images/pedido/gota_gde.png";
        break;

    }

   }

/******* Ficha Técnica *******/

var id_producto;

function asigna(id)
{
  id_producto=id;
 
}

function next_prod()
{
  var xmlDoc = cargarXMLDoc('xml/fichas.xml');
  if (xmlDoc != null && id_producto!=null)
  {
     var fichas = xmlDoc.getElementsByTagName("fichas")[0].getElementsByTagName("ficha");

    for (var i = 0; i < fichas.length; i++) 
    {

      ide=fichas[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;

      if (id_producto==ide) 
      {
        next=fichas[i+1].getElementsByTagName("id")[0].childNodes[0].nodeValue;
      
        id_producto=next;
        return next;
      }
    }
  }


}

function prev_prod()
{
  var xmlDoc = cargarXMLDoc('xml/fichas.xml');
  if (xmlDoc != null && id_producto!=null)
  {
     var fichas = xmlDoc.getElementsByTagName("fichas")[0].getElementsByTagName("ficha");

    for (var i = 0; i < fichas.length; i++) 
    {

      ide=fichas[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;

      if (id_producto==ide) 
      {
        prev=fichas[i-1].getElementsByTagName("id")[0].childNodes[0].nodeValue;
        id_producto=prev;
        return prev;
      }
    }
  }


}


function cargar_producto(id)
{
    var xmlDoc = cargarXMLDoc('xml/fichas.xml');
   
    if (xmlDoc != null)
    {
 

     var fichas = xmlDoc.getElementsByTagName("fichas")[0].getElementsByTagName("ficha");

     //divs contenedores
     var urlimg_f= document.getElementById("urlimg_f");
     var producto_f= document.getElementById("producto_f");
     var presentacion_f= document.getElementById("presentacion_f");
     var genero_f=document.getElementById("genero_f");
     var descripcion_f=document.getElementById("descripcion_f");
     var ingredientes_f=document.getElementById("ingredientes_f");
     var usos_f=document.getElementById("usos_f");
     var propiedades_f=document.getElementById("propiedades_f");

     //alert(locations.length);
     for (var i = 0; i < fichas.length; i++) 
     {

      ide=fichas[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
      urlimg=fichas[i].getElementsByTagName("urlimg")[0].childNodes[0].nodeValue;
      producto=fichas[i].getElementsByTagName("producto")[0].childNodes[0].nodeValue;
      presentacion=fichas[i].getElementsByTagName("presentacion")[0].childNodes[0].nodeValue;
      genero=fichas[i].getElementsByTagName("genero")[0].childNodes[0].nodeValue;
      descripcion=fichas[i].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue;
      usos=fichas[i].getElementsByTagName("usos")[0].childNodes[0].nodeValue;
      //propiedades=fichas[i].getElementsByTagName("propiedades")[0].childNodes[0].nodeValue;


      ingredientes=fichas[i].getElementsByTagName("ingredientes");
      parrafos=fichas[i].getElementsByTagName("propiedades")[0].getElementsByTagName("parrafo");
      
    
      var ings="";
      var parfos="";
      
      for (var j = 0; j < ingredientes.length; j++) 
      {
        ing=ingredientes[j].childNodes[0].nodeValue;
        ings += "<p class='txt_small txt_gray'>"+ing+"</p>";
      }
      
      for (var k = 0; k < parrafos.length; k++) 
      {

        par = parrafos[k].childNodes[0].nodeValue;
        parfos += "<p class='txt_small txt_gray txt_justify'>"+par+"</p><br>";
      }
     
      


      
      if (id==ide) 
      {
        urlimg_f.innerHTML = "<img src='"+urlimg+"''>";
        producto_f.innerHTML = "<p class='txt_small txt_gray'>"+producto+"</p>";
        presentacion_f.innerHTML = "<p class='txt_small txt_gray'>"+presentacion+"</p>";
        genero_f.innerHTML = "<p class='txt_small txt_gray'>"+genero+"</p>";
        descripcion_f.innerHTML = "<p class='txt_small txt_gray'>"+descripcion+"</p>";
        usos_f.innerHTML = "<p class='txt_small txt_gray'>"+usos+"</p>";
        propiedades_f.innerHTML =parfos;
        ingredientes_f.innerHTML = ings;         
      
         // telefono_p.innerHTML=tels
      }
      
     }

    }


}

/****** Bolsa de Trabajo ******/


function cargar_bolsa()
{
 

    var xmlDoc = cargarXMLDoc('xml/bolsa.xml');

     
    if (xmlDoc != null)
    {
        


 
     var vacantes = xmlDoc.getElementsByTagName("vacantes")[0].getElementsByTagName("vacante");
     var vacantes_b= document.getElementById("vacantes_b");
   
      
     for (var i = 0; i <vacantes.length; i++) 
     {
      



      puesto=vacantes[i].getElementsByTagName("puesto")[0].childNodes[0].nodeValue;
      escolaridad=vacantes[i].getElementsByTagName("escolaridad")[0].childNodes[0].nodeValue;
      
      edad=vacantes[i].getElementsByTagName("requisitos")[0].getElementsByTagName("edad")[0].childNodes[0].nodeValue;
      estado=vacantes[i].getElementsByTagName("requisitos")[0].getElementsByTagName("estado")[0].childNodes[0].nodeValue;
      experiencia=vacantes[i].getElementsByTagName("requisitos")[0].getElementsByTagName("experiencia")[0].childNodes[0].nodeValue;
      sexo=vacantes[i].getElementsByTagName("requisitos")[0].getElementsByTagName("sexo")[0].childNodes[0].nodeValue;

      calle=vacantes[i].getElementsByTagName("direccion")[0].getElementsByTagName("calle")[0].childNodes[0].nodeValue;
      colonia=vacantes[i].getElementsByTagName("direccion")[0].getElementsByTagName("colonia")[0].childNodes[0].nodeValue;
      cp=vacantes[i].getElementsByTagName("direccion")[0].getElementsByTagName("cp")[0].childNodes[0].nodeValue;
      
      email=vacantes[i].getElementsByTagName("email")[0].childNodes[0].nodeValue;
     
    
    
      
      vacantes_b.innerHTML += 
      "<div class='vacante border'>"+
        "<div class='casco'>"+
            "<div class='colBolsa'>"+puesto+"</div>"+
            "<div class='colBolsa1'>"+escolaridad+"<br/><br/></div>"+
            "<div class='colBolsa2'>Edad: "+edad+"<br/>Sexo: "+sexo+"<br/><br/></div>"+
            "<div class='colBolsa3'>Estado Civil: "+estado+"<br/>Experiencia: "+experiencia+"<br/><br/></div>"+
            "<div class='colBolsa4'>"+calle+"<br/>"+colonia+" "+cp+"</div>"+
        "</div>"+ 
      "</div>"+
      "<div class='f_right'>"+
        "<span class='txt_gray txt_small'>enviar el email a: </span><div class='pleca_mail'><span class='txt_mailbolsa'>"+email+"</span></div>"+
      "</div>";
     
     }

    }



  }




   /****** xml parser *****/

function cargarXMLDoc(archivoXML) 
{
 var xmlDoc;

 if (window.XMLHttpRequest)
   {
    xmlDoc = new window.XMLHttpRequest();
    xmlDoc.open("GET", archivoXML, false);
    xmlDoc.send("");
    return xmlDoc.responseXML;
   }
 // para IE 5 y IE 6
 else if (ActiveXObject("Microsoft.XMLDOM"))
   {
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async = false;
    xmlDoc.load(archivoXML);
    return xmlDoc;
   }
 alert("Error cargando el documento.");
 return null;
}





 
