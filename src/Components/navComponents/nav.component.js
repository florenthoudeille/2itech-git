import { MenuComponent } from "./menu.component.js";

/* Header */
let header = newElem('header','');

/* Nav */
let nav = newElem('nav',{
  class: 'flex justify-between items-center pl-10 h-20 bg-yellow-300 mb-10 font-Reem font-bold'
});
header.insertBefore(nav, null);

/* h1 */
let h1 = newElem('h1',{
  class: ''
},'LEGO SHARE');
nav.insertBefore(h1, null);

/* ul */
let ul = newElem('ul',{
  class: 'flex justify-evenly w-1/3'
});
nav.insertBefore(ul, null);

Object.values(MenuComponent).forEach((item) => {
  let li = document.createElement(item.name);
  let txt = document.createTextNode(item.text);
  li.appendChild(txt);
  li.setAttribute('class', item.attribut.class);
  li.setAttribute('id', item.attribut.id);
  ul.insertBefore(li, null);
});

let inputSearch = newElem('input',{
  type: 'search',
  placeholder: 'Search ...',
  class: 'border rounded-lg py-1 px-2'
});
nav.insertBefore(inputSearch, null);

/* divLogin */
let divLogin = newElem('div',{
  class: 'bg-sky-500 h-full w-40 flex justify-center items-center'
});
nav.insertBefore(divLogin, null);

/* btnLogin */
let btnLogin = newElem('p','','Login');
divLogin.insertBefore(btnLogin, null);


/* Fonction pour créer des elements */
function newElem(el, attribut, content = "") {
    const newElem = document.createElement(el);
    const newContent = document.createTextNode(content);
    newElem.appendChild(newContent);
    for (let key in attribut) {
      newElem.setAttribute(key, attribut[key]);
    }
    return newElem;
}


export const NavComponent = header;