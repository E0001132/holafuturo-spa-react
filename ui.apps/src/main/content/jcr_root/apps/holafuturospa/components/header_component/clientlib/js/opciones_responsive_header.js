document.addEventListener("DOMContentLoaded", function () {
  const botonHamburguesa = document.getElementById("desplegar_menu_hamburguesa");
  const menuOpciones = document.getElementById("desplegar_opciones_responsive");
  const header = document.querySelector("div.cmp_header");
  const dropdownNav = document.querySelector("div.cmp_header_dropdown_responsive_navegacion");

  menuOpciones.style.display = "none";

  botonHamburguesa.addEventListener("click", function () {
    menuOpciones.style.display = (menuOpciones.style.display === "none") ? "block" : "none";
  });

  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener("scroll", () => {
    if (window.innerWidth > 768) return; // solo móvil

    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDiff = currentScroll - lastScrollTop;

    if (scrollDiff > 0) {
      // Scroll hacia abajo → ocultar header, dropdown y menú desplegable
      header.style.transform = `translateY(-100%)`;
      if (dropdownNav) dropdownNav.style.transform = `translateY(-100%)`;
      menuOpciones.style.display = "none";  // oculta menú si estaba abierto
    } else if (scrollDiff < 0) {
      // Scroll hacia arriba → mostrar header y dropdown
      header.style.transform = 'translateY(0)';
      if (dropdownNav) dropdownNav.style.transform = 'translateY(0)';
      // No forzar mostrar menú, respetamos estado
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
});
