let listaAmigos = []



// Agregar amigos a la lista
function agregarAmigo () {
let nombreAmigo = document.getElementById("amigo").value;
if ( nombreAmigo !== "") {
    listaAmigos.push(nombreAmigo);
    console.log (listaAmigos)
    mostrarListaAmigos ()
    limpiarCaja ()
} else {
    alert("Por favor, ingrese un nombre válido.");
}

function mostrarListaAmigos() {
  // Obtener el elemento <ul> o <ol> en el HTML donde mostrarás la lista de amigos
  const listaHTML = document.getElementById("listaAmigos"); // o document.querySelector("#listaAmigos")

  // Limpiar la lista existente para evitar duplicados
  listaHTML.innerHTML = "";

  // Recorrer el arreglo listaAmigos
  for (let i = 0; i < listaAmigos.length; i++) {
    // Crear un nuevo elemento <li>
    let li = document.createElement("li");

    // Asignar el texto del amigo al <li>
    li.textContent = listaAmigos[i];

    // Agregar el <li> a la lista HTML
    listaHTML.appendChild(li);
  }
}
function sortearAmigo(){}

}

function limpiarCaja(){
  
  document.querySelector("#amigo").value = "";
}


