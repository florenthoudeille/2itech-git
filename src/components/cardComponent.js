import { textElementFunction } from "../services/functions";
import { imgElementFunction } from "../services/functions";

export const CardComponent = (card) => {
  // Création de la div principale

  const divCard = document.createElement("div");
  divCard.setAttribute(
    "style",
    "width: 300px; height:400px;border:1px solid black; margin:10px; padding:5px"
  );

  // Création de la div secondaire permettant de mettre les informations du produit
  const divDescription = document.createElement("div");
  divDescription.setAttribute(
    "style",
    "display:flex;flex-direction:column;justify-content:space-between"
  );

  // Création de la div du produit + prix
  const divProductsPrice = document.createElement("div");
  divProductsPrice.setAttribute(
    "style",
    "display:flex;justify-content:space-between;width:100%"
  );
  divProductsPrice.appendChild(textElementFunction("p", card.productName));
  divProductsPrice.appendChild(textElementFunction("p", card.price));

  // Création de la div text de description
  const divDescriptionText = document.createElement("div");
  divDescriptionText.appendChild(textElementFunction("p", card.description));

  // Création de la div Nom + note

  const divNameNote = document.createElement("div");
  divNameNote.setAttribute("style", "display:flex;align-items:center");
  const divNote = document.createElement("div");
  divNote.setAttribute(
    "style",
    "display:flex;align-items:center;margin-left:8px"
  );
  divNote.appendChild(textElementFunction("p", card.note));
  divNote.appendChild(
    imgElementFunction(
      "img/star.png",
      "star",
      "width:16px;height:16px;margin-left:8px"
    )
  );

  divNameNote.appendChild(textElementFunction("p", card.seller));
  divNameNote.appendChild(divNote);

  // Ajout des éléments de description du produit dans la divDescription
  divDescription.appendChild(divProductsPrice);
  divDescription.appendChild(divDescriptionText);
  divDescription.appendChild(divNameNote);

  // Ajout des éléments dans la div principale
  divCard.appendChild(
    imgElementFunction(card.srcImage, card.altImage, "width:100%;height:50%")
  );
  divCard.appendChild(divDescription);

  return divCard;
};
