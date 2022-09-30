export const textElementFunction = (type, txt, style) => {
  const balise = document.createElement(type);
  const text = document.createTextNode(txt);
  balise.setAttribute("style", style);
  balise.appendChild(text);
  return balise;
};

export const imgElementFunction = (src, alt, style) => {
  const imageCard = document.createElement("img");
  imageCard.setAttribute("src", src);
  imageCard.setAttribute("alt", alt);
  imageCard.setAttribute("style", style);
  return imageCard;
};

export const linkElementFunction = (style, id, label) => {
  const homeLink = document.createElement("a");
  homeLink.setAttribute("style", style);
  homeLink.setAttribute("id", id);

  homeLink.appendChild(document.createTextNode(label));

  return homeLink;
};

export const cardProduct = () => {
  const divCard = document.createElement("div");
  divCard.setAttribute(
    "style",
    "height:200px;width:150px;background-color:gold"
  );
};

export const input = (type, placeholder) => {
  const input = document.createElement("input");
  input.setAttribute("type", type);
  placeholder && input.setAttribute("placeholder", placeholder);
  return input;
};

// export const divStyle = (style, div) => {
//   let div = document.createElement("div");
//   div.setAttribute("style", style);
//   return div;
// };

// Création du composant Card

