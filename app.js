let amigos = [];

function agregarAmigo() {
    const elemento = document.getElementById("amigo");
    let nombre = elemento.value;
    if (nombre === "") {
        alert("Por favor, ingrese un nombre.");
    } else {
        amigos.push(nombre);
        elemento.value = "";
    }
    elemento.focus();
    // console.log(amigos);
}
