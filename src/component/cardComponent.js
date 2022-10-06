export const cardComponent = {
    card: {
      idParent: "",
      parent: "section",
      class:"card",
      content: "",
      balise: "div",
      style: {
        // display: "flex",
        // flexdirection: "row",
        // margin: "0.5em 1em 0.5em 1em ",
        // width: "100vw",
        // height: "10vh",
      },
      attribut: {
        id: "card",
      },
    },
    cardTitle: {
      idParent: "card",
      content: "",
      balise: "h3",
      style: {
        // display: "inline",
        // margin: "0.5em 1em 0.5em 1em ",
      },
      attribut: {
        id: "cardTitle",
      },
    },
    description: {
      idParent: "card",
      balise: "p",
      content: "",
      style: {},
      attribut: {
        id: "description",
      },
    },
    price: {
      idParent: "card",
      balise: "p",
      content: "",
        style: {
            // display: "inline",
            // margin: "0.5em 1em 0.5em 1em"
        },
      attribut: {
        id: "price",
      },
    },
  };