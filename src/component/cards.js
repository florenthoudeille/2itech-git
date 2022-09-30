import elemHtml from "../tools/outils.js";

const cards = (data) => {
  const cardComponent = elemHtml("div");
  const name = elemHtml("h3", data.name);
  const height = elemHtml("span", `height: ${data.height}`);
  cardComponent.append(name, height);
  return cardComponent;
};

export default cards;
