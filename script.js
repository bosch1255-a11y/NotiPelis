/* ==================================
   FUNCIÓN: MENSAJE DE BIENVENIDA
================================== */

function mostrarMensaje() {

    alert("¡Bienvenido a la página de CineVibe!");

}


/* ==================================
   FUNCIÓN: SERVICIOS
================================== */

function mostrarServicio(servicio) {

    alert(
        "Seleccionaste: " + servicio
    );

}


/* =========================================
   FORMULARIO CON VALIDACIONES
========================================= */

const formularioRegistro = document.getElementById("formularioRegistro");

if (formularioRegistro) {
    formularioRegistro.addEventListener("submit", function (evento) {
        evento.preventDefault();

        document.getElementById("registroMensaje").textContent =
            "¡Registro exitoso! Gracias por registrarte.";

        formularioRegistro.reset();
    });
}

/* CAPITALIZAR */
function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}
const botonTema = document.getElementById("temaBtn");

if (botonTema) {
    botonTema.addEventListener("click", function() {
    const modoOscuro = document.body.classList.toggle("modo-oscuro");

    botonTema.setAttribute("aria-pressed", modoOscuro);
    botonTema.setAttribute(
        "aria-label",
        modoOscuro ? "Cambiar a tema claro" : "Cambiar a tema oscuro"
    );

    botonTema.querySelector(".tema-toggle__texto").textContent =
        modoOscuro ? "Modo claro" : "Modo oscuro";

    botonTema.querySelector(".tema-toggle__icono").textContent =
        modoOscuro ? "☾" : "☀";
});
}