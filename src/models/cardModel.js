import { cards } from "../dbCards";

export const cardModel = {
  id: null,
  srcImage: "",
  altImage: "",
  productName: "",
  price: "",
  description: "",
  note: "",
  seller: "",
};

export const getAllCards = () => {
  return cards;
};

export const getOneCard = (id) => {
  cards.forEach((elm) => {
    if (elm.id === id) {
      return elm;
    }
  });
  return null;
};

export const createCard = (CardsBDD) => {
  cardModel.id = CardsBDD.id;
  cardModel.srcImage = CardsBDD.srcImage;
  cardModel.altImage = CardsBDD.altImage;
  cardModel.productName = CardsBDD.productName;
  cardModel.price = CardsBDD.price;
  cardModel.description = CardsBDD.description;
  cardModel.note = CardsBDD.note;
  cardModel.seller = CardsBDD.seller;

  return cardModel;
};

export const updateCard = (CardsBDD, cardModel) => {
  for (const key in CardsBDD) {
    for (const elm of cardModel) {
      if (cardModel.key === CardsBDD.key) {
        if (cardModel[key] !== CardsBDD[key]) {
          return (cardsBDD[key] = cardModel[key]);
        }
      }
    }
  }
};

export const deleteCard = (id) => {
  cards.forEach((elm) => {
    if (elm.id === id) {
      cards.splice(id, 1);
      return cards;
    }
  });
  return null;
};
