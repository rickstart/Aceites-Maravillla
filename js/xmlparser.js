// En la variable div_links obtenemos el contenedor div con el id 'links'
var div_links = document.getElementById('links');

var xmlDoc = cargarXMLDoc('xml/test.xml');
if (xmlDoc != null)
{

 // Obtenemos la lista de links
 var links_tag = xmlDoc.getElementsByTagName("lista")[0].getElementsByTagName("link");

 for (var i = 0; i < links_tag.length; i++)
 {
  // Obtenemos el título del link
  var titulo = links_tag[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue;

  // Obtenemos el hipervínculo del link
  var href = links_tag[i].getElementsByTagName("href")[0].childNodes[0].nodeValue;

  var div= document.getElementById("test");

  // Modificamos el contenido html del contenedor div
  div.innerHTML += "<p><a href=" + href + ">" + titulo + "</a></p>";
  alert("<p><a href=" + href + ">" + titulo + "</a></p>")
 }
}

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