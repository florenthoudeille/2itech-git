export const textElementFunction = (txt) => {
  // document.createElement("p").appendChild(document.createTextNode(txt));
  const balise = document.createElement("p");
  const text = document.createTextNode(txt);
  balise.appendChild(text);
};

export const imgElementFunction = (src, alt, style) => {
  const imageCard = document.createElement("img");
  imageCard.setAttribute("src", src);
  imageCard.setAttribute("alt", alt);
  imageCard.setAttribute("style", style);
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
