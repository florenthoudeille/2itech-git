import { CardComponent } from "./homeComponents/cards.js";

/* divMain */
let divMain = newElem('div',{
  'data-main': 'product',
  id: 'divMain',
});

/* divProducts */
let divProducts = newElem('div',{
  class: 'flex flex-wrap justify-evenly mx-40'
},);
divMain.insertBefore(divProducts, null);

for (let i = 0; i < 8; i++) {
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
    divProducts.insertBefore(cards, null);
  });
}


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

export const ProductsComponent = divMain;