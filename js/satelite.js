/**
 * Ventana satélite: detecta el sistema operativo del usuario
 * y controla la navegación de la ventana principal (la que la abrió).
 */

/** @type {string} Web a la que se redirige la ventana principal. */
const URL_ILERNA = "https://www.ilerna.es/";

// === 1. DETECCIÓN DEL SISTEMA  ===

/**
 * Extrae el sistema operativo buscando palabras clave dentro de la cadena
 * navigator.userAgent. Ejemplo en Windows:
 * "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36..."
 * @returns {string} "Windows", "Mac", "Linux" o un texto si no se reconoce.
 */
function detectarSistema() {
    const agente = window.navigator.userAgent;

    if (agente.includes("Windows")) {
        return "Windows";
    } else if (agente.includes("Mac")) {
        return "Mac";
    } else if (agente.includes("Linux")) {
        return "Linux";
    } else {
        return "un sistema operativo no identificado";
    }
}

/**
 * Crea un párrafo con el mensaje de bienvenida personalizado
 * y lo inserta en el HTML (crear → configurar → insertar).
 */
function mostrarBienvenida() {
    const parrafo = document.createElement("p");
    parrafo.textContent = `¡Bienvenido! Estás navegando desde ${detectarSistema()}.`;
    document.getElementById("bienvenida").appendChild(parrafo);
}

// === 2. CONTROL DEL HISTORIAL DE LA VENTANA PRINCIPAL ===

/**
 * Cambia la URL de la ventana principal con assign():
 * guarda la página actual en el historial, así que se puede volver con "Atrás".
 */
function redirigirConHistorial() {
    window.opener.location.assign(URL_ILERNA);
}

/**
 * Sustituye la URL de la ventana principal con replace():
 * borra la página actual del historial, así que NO se puede volver con "Atrás".
 */
function redirigirSinHistorial() {
    window.opener.location.replace(URL_ILERNA);
}

// === 3. EVENTOS ===

// Nada más cargarse la ventana, se muestra la bienvenida.
window.addEventListener("load", mostrarBienvenida);

document.getElementById("btn-con-historial").addEventListener("click", redirigirConHistorial);
document.getElementById("btn-sin-historial").addEventListener("click", redirigirSinHistorial);