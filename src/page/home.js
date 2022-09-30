import generationOfCharacters from "../services/cards.js";

export const homeComponent = document.createElement("div");
const contents = generationOfCharacters();
console.log(contents);
homeComponent.appendChild(contents);
