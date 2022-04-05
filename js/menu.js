// *MENU

const ham = document.querySelector(".ham");
const menu = document.querySelector(".header");
const barras = document.querySelectorAll(".ham span");
const enlacesMenu = document.querySelectorAll('.menu a');
const contact = document.querySelector("#contact");

contact.addEventListener("click", ()=> {
  menu.classList.remove("activado");
  barras.forEach(child => {
    child.classList.remove('animado');
  });
});

ham.addEventListener("click", () => {
  menu.classList.toggle("activado");
  barras.forEach((child) => {
    child.classList.toggle("animado");
  });
  ham.classList.toggle("girar");
});


enlacesMenu.forEach(linksMenu => {
  linksMenu.addEventListener('click', () => {
    menu.classList.remove('activado');
    barras.forEach(child => {
      child.classList.remove('animado');
    });
  });

});




