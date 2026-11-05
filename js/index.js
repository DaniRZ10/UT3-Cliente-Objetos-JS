/**
 * Ventana principal: lanza la ventana satélite centrada en el monitor del usuario.
 */

/** @type {number} Ancho fijo de la ventana satélite, en píxeles. */
const ANCHO_SATELITE = 400;

/** @type {number} Alto fijo de la ventana satélite, en píxeles. */
const ALTO_SATELITE = 300;

/**
 * Calcula la posición centrada a partir del área disponible del monitor
 * (window.screen.availWidth y availHeight, que excluyen la barra de tareas)
 * y abre satelite.html con un tamaño fijo de 400x300 píxeles.
 */
function lanzarSatelite() {
    // Espacio libre que sobra a cada lado: (pantalla - ventana) / 2
    const izquierda = Math.floor((window.screen.availWidth - ANCHO_SATELITE) / 2);
    const arriba = Math.floor((window.screen.availHeight - ALTO_SATELITE) / 2);

    window.open(
        "satelite.html", // URL
        "satelite",      // nombre de la ventana
        `width=${ANCHO_SATELITE},height=${ALTO_SATELITE},left=${izquierda},top=${arriba}`
    );
}

// window.open() se llama desde un clic del usuario para que el navegador no bloquee la ventana emergente.
document.getElementById("btn-lanzar").addEventListener("click", lanzarSatelite);