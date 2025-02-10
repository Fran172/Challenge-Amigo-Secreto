let listaAmigos = [];
let listaAmigosSorteados = [];

function ActualizarListaAmigos() {
    // borra el contenido de la lista <ul>
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    // agrega cada nombre a la lista <ul>
    for (let i=0; i<listaAmigos.length; i++) {
        let item = document.createElement("li");
        item.innerHTML = listaAmigos[i];
        lista.appendChild(item);
    }
}

function reiniciarSorteo() {
    listaAmigos = [];
    listaAmigosSorteados = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}

function agregarAmigo() {
    // Obtiene nombre ingresado
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value;
    // si no hay nombre, alerta
    if (nombre === "") {
        alert("Por favor, ingrese un nombre.");
    } else {
        // si hay nombre, lo guarda
        listaAmigos.push(nombre);
        inputAmigo.value = "";
    }
    ActualizarListaAmigos();
    inputAmigo.focus();
}

function sortearAmigo() {
    let amigo = null;
    // si no hay nombres, alerta
    if (listaAmigos.length===0) {
        alert("Por favor, ingrese un nombre.")
        // si todos fueron sorteados, reinicia
    } else if (listaAmigosSorteados.length == listaAmigos.length) {
        alert("Todos tus amigos fueron sorteados!");
        reiniciarSorteo();
    } else {
        // si hay nombre/s sin sortear, busca hasta encontrar
        do {
            amigo = listaAmigos[Math.floor(Math.random()*listaAmigos.length)];
        } while (listaAmigosSorteados.includes(amigo));
        // guarda e imprime
        listaAmigosSorteados.push(amigo);
        document.getElementById("resultado").innerHTML = amigo;
    }
}
