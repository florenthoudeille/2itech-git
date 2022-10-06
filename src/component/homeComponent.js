import { creatComponent } from "../service/creatComponent";
import { router } from "../router/router";

export const homeComponent = {
    
  divCaroussel: {
    class: "containerCaroussel",
    idParent: "section",
    content: "",
    balise: "div",
    style: {
      width: "100%",
      height: "20vh",
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
    },
    attribut: {
      id: "containerCaroussel",
    },
  },
  caroussel: {
    class: "caroussel",
    idParent: "containerCaroussel",
    content: "",
    balise: "div",
    style: {
      "background-color": "red",
      width: "60%",
      height: "80%",
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
    },
    attribut: {
        id: "caroussel",
    },
  },
  textCaroussel: {
    class: "textCaroussel",
    idParent: "caroussel",
    content: "Caroussel",
    balise: "p",
    style: {},
    attribut: {
      id: "containerCaroussel",
    },
  },
  divCard: {
    class: "containerCard",
    idParent: "section",
    content: "",
    balise: "div",
    style: {
      width: "100%",
    },
    attribut: {
      id: "containerCard",
    },
  },
  h2Card: {
    class: "h2Card",
    idParent: "containerCard",
    content: "Products Lists",
    balise: "h2",
    style: {
        width: "100%",
      display: "block",
    },
    attribut: {
      id: "h2Card",
    },
  },
  // card: {
  //   class: "card",
  //   idParent: "containerCard",
  //   content: "card",
  //   balise: "div",
  //   attribut: {
  //     id: "card",
  //   },
  //   style: {
  //     width: "100%",
  //   },
  // },
};

creatComponent(router.card);