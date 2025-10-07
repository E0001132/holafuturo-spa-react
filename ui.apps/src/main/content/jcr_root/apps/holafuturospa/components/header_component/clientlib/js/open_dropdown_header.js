document.addEventListener("DOMContentLoaded", function () {
    const enlace2 = document.getElementById("enlace2");
    const dropdownOpciones = document.getElementById("dropdownOpciones");
    const flechaBoton = document.getElementById("flechaBoton");

    enlace2.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        const isHidden = getComputedStyle(dropdownOpciones).display === "none";

        if (isHidden) {
            dropdownOpciones.style.display = "block";
            flechaBoton.style.transition = "transform 0.3s ease";
            flechaBoton.style.transform = "rotate(0deg)";
        } else {
            dropdownOpciones.style.display = "none";
            flechaBoton.style.transform = "rotate(180deg)";
        }
    });

    dropdownOpciones.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    document.addEventListener("click", function () {
        dropdownOpciones.style.display = "none";
        flechaBoton.style.transform = "rotate(180deg)";
    });
});
