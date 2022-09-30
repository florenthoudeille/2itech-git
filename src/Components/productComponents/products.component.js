/* divMain */
let divMain = newElem("div", {
  "data-main": "product",
  id: "divMain",
});

/* divProducts */
let divProducts = newElem("div", {
  class: "flex flex-wrap justify-evenly mx-40",
  id: "divProducts",
});
divMain.insertBefore(divProducts, null);

/* Fonction pour créer des elements */
function newElem(el, attribut, content = "") {
  const newElem = document.createElement(el);
  const newContent = document.createTextNode(content);
  newElem.appendChild(newContent);
  for (let key in attribut) {
    newElem.setAttribute(key, attribut[key]);
  }
  return newElem;
}

export const ProductsComponent = divMain;
