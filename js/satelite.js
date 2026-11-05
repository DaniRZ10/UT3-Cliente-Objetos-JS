/**
 * Ventana satélite: detecta el sistema operativo del usuario
 * y controla la navegación de la ventana principal (la que la abrió).
 */

/** @type {string} Web a la que se redirige la ventana principal. */
const URL_ILERNA = "https://www.ilerna.es/";

/** @type {number} Tiempo hasta el cierre automático, en milisegundos (5 s). */
const TIEMPO_AUTODESTRUCCION = 5000;

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

// === 3. AUTODESTRUCCIÓN ===

/**
 * Inicia la cuenta atrás de autodestrucción:
 * - setInterval() actualiza el mensaje en pantalla cada segundo.
 * - setTimeout() cierra la ventana al cumplirse los 5 segundos.
 */
function iniciarAutodestruccion() {
    const mensaje = document.getElementById("mensaje-autodestruccion");
    let segundosRestantes = TIEMPO_AUTODESTRUCCION / 1000;

    // Se desactiva el botón para que no se lancen varias cuentas atrás a la vez.
    document.getElementById("btn-autodestruccion").disabled = true;
    mensaje.textContent = `Autodestrucción en ${segundosRestantes}...`;

    // Cada segundo, resta uno y actualiza el texto. Se guarda su ID para poder pararlo.
    const idIntervalo = setInterval(() => {
        segundosRestantes--;
        mensaje.textContent = `Autodestrucción en ${segundosRestantes}...`;
    }, 1000);

    // Al cumplirse el tiempo, se para el intervalo y se cierra la ventana.
    setTimeout(() => {
        clearInterval(idIntervalo);
        window.close();
    }, TIEMPO_AUTODESTRUCCION);
}

// === 4. EVENTOS ===

// Nada más cargarse la ventana, se muestra la bienvenida.
window.addEventListener("load", mostrarBienvenida);

document.getElementById("btn-con-historial").addEventListener("click", redirigirConHistorial);
document.getElementById("btn-sin-historial").addEventListener("click", redirigirSinHistorial);
document.getElementById("btn-autodestruccion").addEventListener("click", iniciarAutodestruccion);