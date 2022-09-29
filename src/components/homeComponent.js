export const HomeComponent = document.createElement("div");

import { textElementFunction } from "../services/functions.js";
import { cards } from "./src/models/cardModel.js";

// Accueil div

const divAccueil = document.createElement("div");

// Carousel div

const carouselDiv = document.createElement("div");
carouselDiv.setAttribute(
  "style",
  "height:30vh;background-color:salmon;width:50vw;margin: 30px auto"
);

divAccueil.appendChild(carouselDiv);
divAccueil.appendChild(textElementFunction("h2", "Presentation"));
const divExample = document.createElement("div");
divExample.setAttribute(
  "style",
  "display:flex;width:50vw;justify-content:space-between;margin:auto"
);
// cards.forEach((el) => {
//   return divExample.appendChild(el);
// });
divAccueil.appendChild(divExample);

HomeComponent.appendChild(divAccueil);
