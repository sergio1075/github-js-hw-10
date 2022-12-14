import menu from './js/menu.json';



const menuRef = document.querySelector("./js-menu");
const markup = itemsTemplete(menu);
menuRef.insertAdjacentElement("beforeend", markup);


console.log(menu);


