import menu from "./js/menu.json";
console.log(menu);

import menuItems from "./js/menu-items.hbs";
console.log(menuItems);

const menuRef = document.querySelector('.js-menu');
const markup = menuItems(this);

menuRef.insertAdjacentHTML("beforeend", markup);



console.log(menuRef);