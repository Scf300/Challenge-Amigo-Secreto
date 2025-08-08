// Array para almacenar los nombres de los amigos
let listaAmigos = [];

// Referencia al elemento HTML donde se mostrará la lista de amigos
const listaHTML = document.getElementById("listaAmigos");


// Función para agregar un amigo a la lista
function agregarAmigo() {
  const nombreAmigo = document.getElementById("amigo").value.trim(); // Obtener y limpiar espacios en blanco
  
  if (nombreAmigo !== "") {
    listaAmigos.push(nombreAmigo);    // Añadir el nombre al array
    console.log(listaAmigos);          // Mostrar lista en consola (puedes eliminarlo en producción)
    mostrarListaAmigos();              // Actualizar la lista visual en la página
    limpiarCaja();                     // Limpiar campo de entrada
  } else {
    alert("Por favor, ingrese un nombre válido."); // Validar entrada vacía
  }
}


// Función que muestra la lista completa de amigos en el elemento HTML
function mostrarListaAmigos() {
  listaHTML.innerHTML = ""; // Limpiar contenido previo para evitar duplicados

  // Crear y agregar un <li> con cada nombre en el array
  for (let i = 0; i < listaAmigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = listaAmigos[i];
    listaHTML.appendChild(li);
  }
}


// Función para seleccionar y mostrar aleatoriamente un amigo de la lista
function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("No hay amigos para sortear. Por favor, agrega algunos nombres.");
    return; // Salir si la lista está vacía
  }

  // Índice aleatorio entre 0 y listaAmigos.length - 1
  const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

  // Amigo seleccionado según el índice aleatorio
  const amigoSorteado = listaAmigos[indiceAleatorio];

  // Mostrar amigo sorteado en la lista (reemplaza la lista completa)
  listaHTML.innerHTML = `<li><strong>Amigo sorteado:</strong> ${amigoSorteado}</li>`;
}


// Función para reiniciar el juego: limpiar array, limpiar lista y limpiar input
function reiniciarLista() {
  listaAmigos = [];        // Vaciar el array de amigos
  listaHTML.innerHTML = ""; // Limpiar visualmente la lista
  limpiarCaja();           // Limpiar campo de texto
}


// Función para limpiar el campo de texto del input
function limpiarCaja() {
  document.getElementById("amigo").value = "";
}
