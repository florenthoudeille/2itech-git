/* main */
let main = newElem('main',{
  class: 'font-["Reem Kufi Fun"]',
  id: 'mainProducts'
});
document.body.insertBefore(main, null);

/* divProducts */
let divProducts = newElem('div',{
  class: 'flex flex-wrap justify-evenly mx-40'
},);
main.insertBefore(divProducts, null);

for (let i = 0; i < 25; i++) {
  /* card1 */
  let card1 = newElem('div',{
    class: 'bg-sky-100 h-80 w-60 drop-shadow-lg mx-5 mb-10 border'
  });
  divProducts.insertBefore(card1, null);

  /* imgCard1 */
  let imgCard1 = newElem('img',{
    class: 'bg-slate-400 h-1/2 w-60',
    src: './img/legoMono.jpg'
  });
  card1.insertBefore(imgCard1, null);

  /* divTextCard1 */
  let divTextCard1 = newElem('div',{
    class: 'flex flex-col justify-between h-1/2'
  });
  card1.insertBefore(divTextCard1, null);

  /* divNomDesc1 */
  let divNomDesc1 = newElem('div','');
  divTextCard1.insertBefore(divNomDesc1, null);

  /* nomProd1 */
  let nomProd1 = newElem('h3',{
    class: 'text-lg pl-2 pt-2'
  },'Nom du Produit');
  divNomDesc1.insertBefore(nomProd1, null);

  /* descProd1 */
  let descProd1 = newElem('p',{
    class: 'pl-2'
  },'Description...');
  divNomDesc1.insertBefore(descProd1, null);

  /* divOwner1 */
  let divOwner1 = newElem('div',{
    class: 'flex items-center  pl-2'
  });
  divTextCard1.insertBefore(divOwner1, null);

  /* nomOwner1 */
  let nomOwner1 = newElem('p',{
    class: 'pr-2'
  },'John Doe');
  divOwner1.insertBefore(nomOwner1, null);

  /* rateOwner1 */
  let rateOwner1 = newElem('p',{
    class: 'pr-2'
  },'4,5');
  divOwner1.insertBefore(rateOwner1, null);

  /* starOwner1 */
  let starOwner1 = newElem('i',{
    class: 'fa-solid fa-star text-yellow-500 drop-shadow'
  });
  divOwner1.insertBefore(starOwner1, null);
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



/* for (let i = 0; i < 28; i++) {
  // products
  let products = newElem('div',{
    class: 'w-40 h-60 border bg-slate-100 mx-5 mb-5',
    id: `boxProducts${i}`
  },);
  divProducts.insertBefore(products, null);

  // nameProducts
  let nameProducts = newElem('h3',{
    class: 'ml-2 mt-2'
  },'Product Title');
  products.insertBefore(nameProducts, null);
} */