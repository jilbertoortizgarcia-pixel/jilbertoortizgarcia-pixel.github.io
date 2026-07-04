/* ======================================================
   PROYECTO GIRASOL 🌻
   El Jardín de Vale
   Versión 0.5
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("entrar");
    const bienvenida = document.getElementById("bienvenida");
    const jardin = document.getElementById("jardin");
    const luna = document.getElementById("luna");

    // El jardín permanece oculto al iniciar
    jardin.style.display = "none";

    // Al presionar el botón
    boton.addEventListener("click", () => {

        // Desaparece la bienvenida
        bienvenida.style.transition = "opacity 1.5s";
        bienvenida.style.opacity = "0";

        setTimeout(() => {

            bienvenida.style.display = "none";

            // Aparece el jardín
            jardin.style.display = "block";
            jardin.style.opacity = "0";
            jardin.style.transition = "opacity 2s";

            setTimeout(() => {
                jardin.style.opacity = "1";
            }, 100);

        }, 1500);

    });

    // La luna "respira" suavemente
    let brillo = 0;

    setInterval(() => {

        brillo += 0.05;

        const intensidad = 60 + Math.sin(brillo) * 20;

        luna.style.boxShadow =
            `0 0 ${intensidad}px rgba(255,255,210,.8)`;

    }, 40);

});