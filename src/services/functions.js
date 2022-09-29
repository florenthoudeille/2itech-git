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

export const card = (
  srcImage,
  altImage,
  styleImage,
  productName,
  price,
  description,
  note,
  seller
) => {
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
  divProductsPrice.appendChild(textElementFunction("p", productName));
  divProductsPrice.appendChild(textElementFunction("p", price));

  // Création de la div text de description
  const divDescriptionText = document.createElement("div");
  divDescriptionText.appendChild(textElementFunction("p", description));

  // Création de la div Nom + note

  const divNameNote = document.createElement("div");
  divNameNote.setAttribute("style", "display:flex;align-items:center");
  const divNote = document.createElement("div");
  divNote.setAttribute(
    "style",
    "display:flex;align-items:center;margin-left:8px"
  );
  divNote.appendChild(textElementFunction("p", note));
  divNote.appendChild(
    imgElementFunction(
      "./img/star.png",
      "star",
      "width:16px;height:16px;margin-left:8px"
    )
  );

  divNameNote.appendChild(textElementFunction("p", seller));
  divNameNote.appendChild(divNote);

  // Ajout des éléments de description du produit dans la divDescription
  divDescription.appendChild(divProductsPrice);
  divDescription.appendChild(divDescriptionText);
  divDescription.appendChild(divNameNote);

  // Ajout des éléments dans la div principale
  divCard.appendChild(imgElementFunction(srcImage, altImage, styleImage));
  divCard.appendChild(divDescription);

  return divCard;
};
