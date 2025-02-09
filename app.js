let amigos = [];

function ActualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i=0; i<amigos.length; i++) {
        let item = document.createElement("li");
        item.innerHTML = amigos[i];
        lista.appendChild(item);
    }
}

function agregarAmigo() {
    let cuadroDeTexto = document.getElementById("amigo");
    let nombre = cuadroDeTexto.value;
    if (nombre === "") {
        alert("Por favor, ingrese un nombre.");
    } else {
        amigos.push(nombre);
        cuadroDeTexto.value = "";
    }
    ActualizarListaAmigos();
    cuadroDeTexto.focus();
    // console.log(amigos);
}
