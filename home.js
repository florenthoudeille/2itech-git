export const HomeComponent = document.createElement("div");

// imports functions :

import { textElementFunction, imgElementFunction } from "./functions.js";

// body :

document.body.setAttribute(
  "style",
  "margin:0;display:flex;flex-direction:column;justify-content:space-between"
);

// Accueil div

const divAccueil = document.createElement("div");

// Carousel div

const carouselDiv = document.createElement("div");
carouselDiv.setAttribute(
  "style",
  "height:30vh;background-color:salmon;width:50vw;margin: 30px auto"
);

// H2

const h2 = document.createElement("h2");

const PresentationText = document.createTextNode("Presentation");

h2.setAttribute("style", "margin:0");
h2.appendChild(PresentationText);

// composants card
// image
const imageCard = document.createElement("img");
imageCard.setAttribute("src", "./img/15038-13875-14202.jpg");
imageCard.setAttribute("alt", "Toutou");
imageCard.setAttribute("style", "width:10%;height:auto");
// Refacto
imgElementFunction(
  "./img/15038-13875-14202.jpg",
  "Toutou",
  "width:10%;height:auto"
);

// textName
const textName = document.createElement("p");
const JohnDoe = document.createTextNode("John Doe");
textName.appendChild(JohnDoe);
// Refacto
// textElementFunction("John Doe");

// productName
const productName = document.createElement("p");
const nameOfProduct = document.createTextNode("Nom du produit");
productName.appendChild(nameOfProduct);
// Refacto
// textElementFunction("Nom du produit");

// Price
const priceP = document.createElement("p");
const setPrice = document.createTextNode("400,00 €");
priceP.appendChild(setPrice);
// Refacto
// textElementFunction("400,00 €");

// textProduct
const description = document.createElement("p");
const descriptionText = document.createTextNode(
  "Cette collection date de 1989, très cher à mes yeux. J'ai pris grand soin de ce produit !"
);
description.appendChild(descriptionText);
// Refacto
// textElementFunction(
//   "Cette collection date de 1989, très chère à mes yeux. J'ai pris grand soin de ce produit !"
// );

// Note

const divNote = document.createElement("div");

const note = document.createElement("p");
const numberNote = document.createTextNode("4,5");
note.appendChild(numberNote);

const starImage = document.createElement("img");
starImage.setAttribute("src", "./img/star.png");
starImage.setAttribute("alt", "star");
starImage.setAttribute("style", "width:8px;height:8px;margin-bottom:8px");

divNote.appendChild(note);
divNote.appendChild(starImage);

// Placement des éléments dans la card

const card = document.createElement("div");
card.appendChild(imageCard);
const divDescription = document.createElement("div");

divDescription.appendChild(productName);
divDescription.appendChild(priceP);

divDescription.appendChild(description);

divDescription.appendChild(textName);
divDescription.appendChild(divNote);

card.appendChild(divDescription);

// Placement des éléments dans le body

divAccueil.appendChild(carouselDiv);
divAccueil.appendChild(h2);
divAccueil.appendChild(card);

HomeComponent.appendChild(divAccueil);
