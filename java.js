console.log("alala");

function enviar() 
    {
    var nombre = document.getElementById("nombre").value;
     alert("Bienvenido al mundo LEGO, " + nombre + " :)");
    }	

function cambiarContenido1() 
	{
	var elemento = document.getElementById("btn1");
	elemento.innerHTML = "¡PRODUCTO AGREGADO!";
    elemento.style.background = "red";
	}
function cambiarContenido2() 
	{
	var elemento = document.getElementById("btn2");
	elemento.innerHTML = "¡PRODUCTO AGREGADO!";
    elemento.style.background = "red";
	}
function cambiarContenido3() 
	{
	var elemento = document.getElementById("btn3");
	elemento.innerHTML = "¡PRODUCTO AGREGADO!";
    elemento.style.background = "red";
	}
function cambiarContenido4() 
	{
	var elemento = document.getElementById("btn4");
	elemento.innerHTML = "¡PRODUCTO AGREGADO!";
    elemento.style.background = "red";
	}


function agregarComentario() {
    var comentarioInput = document.getElementById("comentario").value;
    if (comentarioInput === "") {
      return;
    }
  
    var contenedorComentarios = document.getElementById("contenedor-comentarios");
    var nuevoComentario = document.createElement("div");
    nuevoComentario.innerHTML = comentarioInput;
    nuevoComentario.classList.add("comentario");
    contenedorComentarios.appendChild(nuevoComentario);
    document.getElementById("comentario").value = "";
  }