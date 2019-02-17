const icon = document.querySelector('.nav-menu-hamburguer');
const menu = document.querySelector('.menu-hambuguer');

const aparecerMenuTop = function(){
    menu.classList.toggle('mostrar');
}

icon.onclick = aparecerMenuTop;