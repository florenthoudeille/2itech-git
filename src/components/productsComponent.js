export const ProductsComponent = document.createElement("div");
import { cardsProducts } from "../services/cardService.js";

ProductsComponent.setAttribute(
  "style",
  "display:flex;justify-content:space-evenly;flex-wrap:wrap;width:80vw;height:1000px;margin:0 auto"
);


cardsProducts().forEach((el) => {
  ProductsComponent.appendChild(el);
});
