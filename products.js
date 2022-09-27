export const ProductsComponent = document.createElement("div");
import { cardProduct } from "./functions.js";

console.log(cardProduct());

cardProduct();

const divCard = document.createElement("div");
divCard.setAttribute("style", "height:200px;width:150px;background-color:gold");

ProductsComponent.appendChild(divCard);
