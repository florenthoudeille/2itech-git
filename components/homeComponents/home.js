import { CarouselComponent } from "./carousel.js";
import { CardComponent } from "./cards.js";

/* divMain */
let divMain = newElem('div',{
  'data-main': 'home',
  id: 'divMain',
});

/* sectionCarousel */
let sectionCarousel = newElem('section',{
  class: 'flex justify-center'
});
divMain.insertBefore(sectionCarousel, null);

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


Object.values(CarouselComponent).forEach((item) => {
  let items = document.createElement(item.name);
  items.setAttribute('class', item.attribut.class);
  items.setAttribute('data-carousel-item', item.attribut.dataCarousel);

  let spanItems = document.createElement(item.spanItem.name);
  spanItems.setAttribute('class', item.spanItem.class);
  let txtSpanItems = document.createTextNode(item.spanItem.text);
  spanItems.appendChild(txtSpanItems);

  let imgItems = document.createElement(item.imgItem.name);
  imgItems.setAttribute('class', item.imgItem.attribut.class);
  imgItems.setAttribute('src', item.imgItem.attribut.src);
  imgItems.setAttribute('alt', item.imgItem.attribut.alt);


  items.insertBefore(spanItems, null);
  spanItems.insertBefore(imgItems, null);
  carouselWrapper.insertBefore(items, null);
});



/* sectionCards */
let sectionCards = newElem('section','');
divMain.insertBefore(sectionCards, null);

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

Object.values(CardComponent).forEach((item) => {
  let cards = document.createElement(item.name);
  cards.setAttribute('class', item.attribut.class);
  
  let imgCards = document.createElement(item.imgCard.name);
  imgCards.setAttribute('class', item.imgCard.attribut.class);
  imgCards.setAttribute('src', item.imgCard.attribut.src);
  
  let divTextCards = document.createElement(item.divTextCard.name);
  divTextCards.setAttribute('class', item.divTextCard.attribut.class);
  
  let divNomDesc = document.createElement(item.divNomDesc.name);
  
  let nomProduits = document.createElement(item.nomProduit.name);
  nomProduits.setAttribute('class', item.nomProduit.attribut.class);
  let txtNomProduit = document.createTextNode(item.nomProduit.text);
  nomProduits.appendChild(txtNomProduit);
  
  let descProduits = document.createElement(item.descProduit.name);
  descProduits.setAttribute('class', item.descProduit.attribut.class);
  let txtDescProduits = document.createTextNode(item.descProduit.text);
  descProduits.appendChild(txtDescProduits);
  
  let divOwners = document.createElement(item.divOwner.name);
  divOwners.setAttribute('class', item.divOwner.attribut.class);
  
  let nomOwners = document.createElement(item.nomOwner.name);
  nomOwners.setAttribute('class', item.nomOwner.attribut.class);
  let txtNomOwners = document.createTextNode(item.nomOwner.text);
  nomOwners.appendChild(txtNomOwners);
  
  let rateOwners = document.createElement(item.rateOwner.name);
  rateOwners.setAttribute('class', item.rateOwner.attribut.class);
  let txtRateOwners = document.createTextNode(item.rateOwner.text);
  rateOwners.appendChild(txtRateOwners);
  
  let starOwners = document.createElement(item.starOwner.name);
  starOwners.setAttribute('class', item.starOwner.attribut.class);
  
  cards.insertBefore(imgCards, null);
  cards.insertBefore(divTextCards, null);
  divTextCards.insertBefore(divNomDesc, null);
  divNomDesc.insertBefore(nomProduits, null);
  divNomDesc.insertBefore(descProduits, null);
  divTextCards.insertBefore(divOwners, null);
  divOwners.insertBefore(nomOwners, null);
  divOwners.insertBefore(rateOwners, null);
  divOwners.insertBefore(starOwners, null);
  divCards.insertBefore(cards, null);
});

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


export const HomeComponent = divMain;