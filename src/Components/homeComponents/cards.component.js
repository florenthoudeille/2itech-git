export function cardBuilder(img, name, desc, nameU, rate) {
  const cardsComp = {
    card: {
      name: "div",
      attribut: {
        class: "bg-sky-100 h-80 w-60 drop-shadow-lg mb-5",
      },
      imgCard: {
        name: "img",
        attribut: {
          class: "bg-slate-400 h-1/2 w-60",
          src: img,
        },
      },
      divTextCard: {
        name: "div",
        attribut: {
          class: "flex flex-col justify-between h-1/2",
        },
      },
      divNomDesc: {
        name: "div",
      },
      nomProduit: {
        name: "h3",
        attribut: {
          class: "text-lg pl-2 pt-2",
        },
        text: name,
      },
      descProduit: {
        name: "p",
        attribut: {
          class: "pl-2",
        },
        text: desc,
      },
      divOwner: {
        name: "p",
        attribut: {
          class: "flex cardsComp.cards-center pl-2",
        },
      },
      nomOwner: {
        name: "p",
        attribut: {
          class: "pr-2",
        },
        text: nameU,
      },
      rateOwner: {
        name: "p",
        attribut: {
          class: "pr-2",
        },
        text: rate,
      },
      starOwner: {
        name: "i",
        attribut: {
          class: "fa-solid fa-star text-yellow-500 drop-shadow",
        },
      },
    },
  };

  let cards = document.createElement(cardsComp.card.name);
  cards.setAttribute("class", cardsComp.card.attribut.class);

  let imgCards = document.createElement(cardsComp.card.imgCard.name);
  imgCards.setAttribute("class", cardsComp.card.imgCard.attribut.class);
  imgCards.setAttribute("src", cardsComp.card.imgCard.attribut.src);

  let divTextCards = document.createElement(cardsComp.card.divTextCard.name);
  divTextCards.setAttribute("class", cardsComp.card.divTextCard.attribut.class);

  let divNomDesc = document.createElement(cardsComp.card.divNomDesc.name);

  let nomProduits = document.createElement(cardsComp.card.nomProduit.name);
  nomProduits.setAttribute("class", cardsComp.card.nomProduit.attribut.class);
  let txtNomProduit = document.createTextNode(cardsComp.card.nomProduit.text);
  nomProduits.appendChild(txtNomProduit);

  let descProduits = document.createElement(cardsComp.card.descProduit.name);
  descProduits.setAttribute("class", cardsComp.card.descProduit.attribut.class);
  let txtDescProduits = document.createTextNode(
    cardsComp.card.descProduit.text
  );
  descProduits.appendChild(txtDescProduits);

  let divOwners = document.createElement(cardsComp.card.divOwner.name);
  divOwners.setAttribute("class", cardsComp.card.divOwner.attribut.class);

  let nomOwners = document.createElement(cardsComp.card.nomOwner.name);
  nomOwners.setAttribute("class", cardsComp.card.nomOwner.attribut.class);
  let txtNomOwners = document.createTextNode(cardsComp.card.nomOwner.text);
  nomOwners.appendChild(txtNomOwners);

  let rateOwners = document.createElement(cardsComp.card.rateOwner.name);
  rateOwners.setAttribute("class", cardsComp.card.rateOwner.attribut.class);
  let txtRateOwners = document.createTextNode(cardsComp.card.rateOwner.text);
  rateOwners.appendChild(txtRateOwners);

  let starOwners = document.createElement(cardsComp.card.starOwner.name);
  starOwners.setAttribute("class", cardsComp.card.starOwner.attribut.class);

  cards.insertBefore(imgCards, null);
  cards.insertBefore(divTextCards, null);
  divTextCards.insertBefore(divNomDesc, null);
  divNomDesc.insertBefore(nomProduits, null);
  divNomDesc.insertBefore(descProduits, null);
  divTextCards.insertBefore(divOwners, null);
  divOwners.insertBefore(nomOwners, null);
  divOwners.insertBefore(rateOwners, null);
  divOwners.insertBefore(starOwners, null);

  return cards;
}
