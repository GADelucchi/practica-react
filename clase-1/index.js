// Declaración de variables
let inputNombre
let inputApellido
let inputEdad
let inputPais
let inputSubmit
let formulario

// Declaración de funciones
function inicializarElementos() {
    inputNombre = document.getElementById("inputNombre")
    inputApellido = document.getElementById("inputApellido")
    inputEdad = document.getElementById("inputEdad")
    inputPais = document.getElementById("inputPais")
    inputSubmit = document.getElementById("inputSubmit")
    formulario = document.getElementById("formulario")
}

function inicializarEventos() {
    formulario.onsubmit = (event) => validarFormulario(event);
}

function validarFormulario(event) {
    event.preventDefault();
    mostrarSwal()
}

function mostrarSwal() {
    // console.log(inputNombre.value);
    Swal.fire({
        icon: "info",
        title: `Hola ${inputNombre.value} ${inputApellido.value}, veo que tienes ${inputEdad.value} años y eres de ${inputPais.value}`,
    })
}

function main() {
    inicializarElementos();
    inicializarEventos();
}

main()