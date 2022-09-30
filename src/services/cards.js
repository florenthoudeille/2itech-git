import cards from "../component/cards.js";
import results from "../models/cards.json" assert { type: "json" };
import elemHtml from "../tools/outils.js";

const generationOfCharacters = () => {
  const content = elemHtml("div");
  const pjs = results.results;
  pjs.map((pj) => {
    const name = cards(pj);
    content.append(name);
  });
  return content;
};

export default generationOfCharacters;
