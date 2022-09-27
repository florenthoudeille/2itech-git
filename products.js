/* main */
let main = newElem('main',{
  class: 'font-mono',
  id: 'mainProducts'
});
document.body.insertBefore(main, null);

/* divProducts */
let divProducts = newElem('div',{
  class: 'flex flex-wrap justify-evenly mx-40'
},);
main.insertBefore(divProducts, null);

for (let i = 0; i < 28; i++) {
  /* products */
  let products = newElem('div',{
    class: 'w-40 h-60 border bg-slate-100 mx-5 mb-5',
    id: `boxProducts${i}`
  },);
  divProducts.insertBefore(products, null);

  /* nameProducts */
  let nameProducts = newElem('h3',{
    class: 'ml-2 mt-2'
  },'Product Title');
  products.insertBefore(nameProducts, null);
}


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

export const ProductsComponent = main;