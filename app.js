let listaAmigos = [];
let listaAmigosSorteados = [];

function ActualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
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
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value;
    if (nombre === "") {
        alert("Por favor, ingrese un nombre.");
    } else {
        listaAmigos.push(nombre);
        inputAmigo.value = "";
    }
    ActualizarListaAmigos();
    inputAmigo.focus();
}

function sortearAmigo() {
    let amigo = null;
    if (listaAmigos.length===0) {
        alert("Por favor, ingrese un nombre.")
    } else if (listaAmigosSorteados.length == listaAmigos.length) {
        alert("Todos tus amigos fueron sorteados!");
        reiniciarSorteo();
    } else {
        do {
            amigo = listaAmigos[Math.floor(Math.random()*listaAmigos.length)];
        } while (listaAmigosSorteados.includes(amigo));

        listaAmigosSorteados.push(amigo);
        document.getElementById("resultado").innerHTML = amigo;
    }
}
