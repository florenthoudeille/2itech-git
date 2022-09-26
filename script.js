/* Header */
let header = newElem('header','');
document.querySelector('body').insertBefore(header, null);

/* Nav */
let nav = newElem('nav',{
  class: 'flex justify-between items-center pl-10 h-20 bg-slate-500 mb-20'
});
header.insertBefore(nav, null);

/* h1 */
let h1 = newElem('h1',{
  class: 'text-xl'
},'LEGO SHARE');
nav.insertBefore(h1, null);

/* ul */
let ul = newElem('ul',{
  class: 'flex justify-evenly w-1/3'
});
nav.insertBefore(ul, null);

/* li home */
let liHome = newElem('li','','Home');
ul.insertBefore(liHome, null);

/* li Products */
let liProducts = newElem('li','','Products');
ul.insertBefore(liProducts, null);

/* input search */
let inputSearch = newElem('input',{
  type: 'search',
  placeholder: 'Search ...',
  class: 'border'
});
nav.insertBefore(inputSearch, null);

/* divLogin */
let divLogin = newElem('div',{
  class: 'bg-slate-600 h-full w-40 flex justify-center items-center'
});
nav.insertBefore(divLogin, null);

/* btnLogin */
let btnLogin = newElem('p','','Login');
divLogin.insertBefore(btnLogin, null);



/* main */
let main = newElem('main','');
document.querySelector('body').insertBefore(main, null);

/* sectionCarousel */
let sectionCarousel = newElem('section',{
  class: 'flex justify-center'
});
main.insertBefore(sectionCarousel, null);

/* divCarousel */
let divCarousel = newElem('div',{
  class: 'bg-slate-400 w-1/2 h-52',
});
sectionCarousel.insertBefore(divCarousel, null);



/* sectionCards */
let sectionCards = newElem('section','');
main.insertBefore(sectionCards, null);

/* h2 */
let h2 = newElem('h2',{
  class: 'text-5xl ml-10 my-20'
},'Lorem Ipsum');
sectionCards.insertBefore(h2, null);

/* divCards */
let divCards = newElem('div',{
  class: 'flex justify-evenly'
});
sectionCards.insertBefore(divCards, null);

/* card1 */
let card1 = newElem('div',{
  class: 'bg-slate-400 h-80 w-60'
});
divCards.insertBefore(card1, null);

/* card2 */
let card2 = newElem('div',{
  class: 'bg-slate-400 h-80 w-60'
});
divCards.insertBefore(card2, null);

/* card3 */
let card3 = newElem('div',{
  class: 'bg-slate-400 h-80 w-60'
});
divCards.insertBefore(card3, null);





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