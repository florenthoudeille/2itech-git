import { CardComponent } from "../components/cardComponent.js";
import { getAllCards } from "../models/cardModel.js";


export const cardsProducts = () => {
  let arrayHTML = [];
  getAllCards().forEach((element) => {
    arrayHTML.push(CardComponent(element));
  });
  return arrayHTML;
};
