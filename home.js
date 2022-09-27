/* Header */
let header = newElem('header','');
document.body.insertBefore(header, null);

/* Nav */
let nav = newElem('nav',{
  class: 'flex justify-between items-center pl-10 h-20 bg-yellow-400 mb-10 font-["Reem Kufi Fun"] font-bold'
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
let liHome = newElem('li',{
  id: 'btnHome',
  class: 'cursor-pointer'
},'Home');
ul.insertBefore(liHome, null);

/* li Products */
let liProducts = newElem('li',{
  id: 'btnProducts',
  class: 'cursor-pointer'
},'Products');
ul.insertBefore(liProducts, null);

/* input search */
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




/* main */
let main = newElem('main',{
  class: 'font-["Reem Kufi Fun"]',
  id: 'mainHome'
});
document.body.insertBefore(main, null);



/* sectionCarousel */
let sectionCarousel = newElem('section',{
  class: 'flex justify-center'
});
main.insertBefore(sectionCarousel, null);

/* divCarousel */
let divCarousel = newElem('div',{
  class: 'w-2/3 h-80 relative',
  id: 'default-carousel',
  'data-carousel': 'slide'
});
sectionCarousel.insertBefore(divCarousel, null);

/* carouselWrapper */
let carouselWrapper = newElem('div',{
  class: 'relative h-56 overflow-hidden md:h-96',
});
divCarousel.insertBefore(carouselWrapper, null);

/* item1 */
let item1 = newElem('div',{
  class: 'duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20',
  'data-carousel-item': ''
});
carouselWrapper.insertBefore(item1, null);

/* spanItem1 */
let spanItem1 = newElem('span',{
  class: 'absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800',
},'First Slide');
item1.insertBefore(spanItem1, null);

/* imgItem1 */
let imgItem1 = newElem('img',{
  class: 'absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2',
  src: './img/legoMulti.jpg',
  alt: 'lego multicolore'
});
item1.insertBefore(imgItem1, null);


/* item2 */
let item2 = newElem('div',{
  class: 'duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20',
  'data-carousel-item': ''
});
carouselWrapper.insertBefore(item2, null);

/* spanItem2 */
let spanItem2 = newElem('span',{
  class: 'absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800',
},'First Slide');
item2.insertBefore(spanItem2, null);

/* imgItem2 */
let imgItem2 = newElem('img',{
  class: 'absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2',
  src: './img/legoYellow.jpg',
  alt: 'lego jaune'
});
item2.insertBefore(imgItem2, null);


/* item3 */
let item3 = newElem('div',{
  class: 'duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20',
  'data-carousel-item': ''
});
carouselWrapper.insertBefore(item3, null);

/* spanItem3 */
let spanItem3 = newElem('span',{
  class: 'absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800',
},'First Slide');
item3.insertBefore(spanItem3, null);

/* imgItem3 */
let imgItem3 = newElem('img',{
  class: 'absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2',
  src: './img/lego.jpg',
  alt: 'lego'
});
item3.insertBefore(imgItem3, null);





/* sectionCards */
let sectionCards = newElem('section','');
main.insertBefore(sectionCards, null);

/* h2 */
let h2 = newElem('h2',{
  class: 'text-5xl ml-10 my-10'
},'Cards');
sectionCards.insertBefore(h2, null);

/* divCards */
let divCards = newElem('div',{
  class: 'flex justify-evenly'
});
sectionCards.insertBefore(divCards, null);

/* card1 */
let card1 = newElem('div',{
  class: 'bg-sky-100 h-80 w-60 drop-shadow-lg'
});
divCards.insertBefore(card1, null);

/* imgCard1 */
let imgCard1 = newElem('img',{
  class: 'bg-slate-400 h-1/2 w-60',
  src: './img/legoBatman.jpg'
});
card1.insertBefore(imgCard1, null);

/* divTextCard1 */
let divTextCard1 = newElem('div',{
  class: 'flex flex-col justify-between h-1/2'
});
card1.insertBefore(divTextCard1, null);

/* divNomDesc1 */
let divNomDesc1 = newElem('div','');
divTextCard1.insertBefore(divNomDesc1, null);

/* nomProd1 */
let nomProd1 = newElem('h3',{
  class: 'text-lg pl-2 pt-2'
},'Nom du Produit');
divNomDesc1.insertBefore(nomProd1, null);

/* descProd1 */
let descProd1 = newElem('p',{
  class: 'pl-2'
},'Description...');
divNomDesc1.insertBefore(descProd1, null);

/* divOwner1 */
let divOwner1 = newElem('div',{
  class: 'flex items-center  pl-2'
});
divTextCard1.insertBefore(divOwner1, null);

/* nomOwner1 */
let nomOwner1 = newElem('p',{
  class: 'pr-2'
},'John Doe');
divOwner1.insertBefore(nomOwner1, null);

/* rateOwner1 */
let rateOwner1 = newElem('p',{
  class: 'pr-2'
},'4,5');
divOwner1.insertBefore(rateOwner1, null);

/* starOwner1 */
let starOwner1 = newElem('i',{
  class: 'fa-solid fa-star text-yellow-500 drop-shadow'
});
divOwner1.insertBefore(starOwner1, null);


/* card2 */
let card2 = newElem('div',{
  class: 'bg-sky-100 h-80 w-60 drop-shadow-lg'
});
divCards.insertBefore(card2, null);

/* imgCard2 */
let imgCard2 = newElem('img',{
  class: 'bg-slate-400 h-1/2 w-60',
  src: './img/legoPoulet.jpg'
});
card2.insertBefore(imgCard2, null);

/* divTextCard2 */
let divTextCard2 = newElem('div',{
  class: 'flex flex-col justify-between h-1/2'
});
card2.insertBefore(divTextCard2, null);

/* divNomDesc2 */
let divNomDesc2 = newElem('div','');
divTextCard2.insertBefore(divNomDesc2, null);

/* nomProd2 */
let nomProd2 = newElem('h3',{
  class: 'text-lg pl-2 pt-2'
},'Nom du Produit');
divNomDesc2.insertBefore(nomProd2, null);

/* descProd2 */
let descProd2 = newElem('p',{
  class: 'pl-2'
},'Description...');
divNomDesc2.insertBefore(descProd2, null);

/* divOwner2 */
let divOwner2 = newElem('div',{
  class: 'flex items-center  pl-2'
});
divTextCard2.insertBefore(divOwner2, null);

/* nomOwner2 */
let nomOwner2 = newElem('p',{
  class: 'pr-2'
},'John Doe');
divOwner2.insertBefore(nomOwner2, null);

/* rateOwner2 */
let rateOwner2 = newElem('p',{
  class: 'pr-2'
},'4,5');
divOwner2.insertBefore(rateOwner2, null);

/* starOwner2 */
let starOwner2 = newElem('i',{
  class: 'fa-solid fa-star text-yellow-500 drop-shadow'
});
divOwner2.insertBefore(starOwner2, null);


/* card3 */
let card3 = newElem('div',{
  class: 'bg-sky-100 h-80 w-60 drop-shadow-lg'
});
divCards.insertBefore(card3, null);

/* imgCard3 */
let imgCard3 = newElem('img',{
  class: 'bg-slate-400 h-1/2 w-60 object-cover',
  src: './img/legoBike.jpg'
});
card3.insertBefore(imgCard3, null);

/* divTextCard3 */
let divTextCard3 = newElem('div',{
  class: 'flex flex-col justify-between h-1/2'
});
card3.insertBefore(divTextCard3, null);

/* divNomDesc3 */
let divNomDesc3 = newElem('div','');
divTextCard3.insertBefore(divNomDesc3, null);

/* nomProd3 */
let nomProd3 = newElem('h3',{
  class: 'text-lg pl-2 pt-2'
},'Nom du Produit');
divNomDesc3.insertBefore(nomProd3, null);

/* descProd3 */
let descProd3 = newElem('p',{
  class: 'pl-2'
},'Description...');
divNomDesc3.insertBefore(descProd3, null);

/* divOwner3 */
let divOwner3 = newElem('div',{
  class: 'flex items-center  pl-2'
});
divTextCard3.insertBefore(divOwner3, null);

/* nomOwner3 */
let nomOwner3 = newElem('p',{
  class: 'pr-2'
},'John Doe');
divOwner3.insertBefore(nomOwner3, null);

/* rateOwner3 */
let rateOwner3 = newElem('p',{
  class: 'pr-2'
},'4,5');
divOwner3.insertBefore(rateOwner3, null);

/* starOwner3 */
let starOwner3 = newElem('i',{
  class: 'fa-solid fa-star text-yellow-500 drop-shadow'
});
divOwner3.insertBefore(starOwner3, null);




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


export const HomeComponent = main;