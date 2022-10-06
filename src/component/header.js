export const header = {
  header: {
    idParent: "",
    parent: "body",
    class:"header",
    content: "",
    balise: "header",
    style: {
      display: "flex",
      flexdirection: "row",
      margin: "0.5em 1em 0.5em 1em ",
      width: "100vw",
      height: "10vh",
    },
    attribut: {
      id: "header",
    },
  },
  TitreLogo: {
    idParent: "header",
    content: "LEGO Share",
    balise: "h1",
    style: {
      display: "inline",
      margin: "0.5em 1em 0.5em 1em ",
    },
    attribut: {
      id: "header",
    },
  },
  containerLink: {
    idParent: "header",
    balise: "ul",
    content: "",
    style: {},
    attribut: {
      id: "containerlink",
    },
  },
  btnAHome: {
    idParent: "containerlink",
    balise: "a",
    content: "Home",
    style: { display: "inline", margin: "0.5em 1em 0.5em 1em" },
    attribut: {
      class: "nav-link",
      id: "btnHome",
    },
  },
  btnAProducts: {
    idParent: "containerlink",
    balise: "a",
    content: "Products",
    style: { display: "inline", margin: "0.5em 1em 0.5em 1em" },
    attribut: {
      id: "btnProducts",
      class: "nav-link",
    },
  },
  searchBar: {
    idParent: "header",
    balise: "input",
    content: "",
      style: {
          display: "inline",
          height: "3vh",
          margin: "0.5em 1em 0.5em 1em",
      },
    attribut: {
      id: "searchBar",
      type: "search",
      placeholder: "Recherche ?",
    },
  },
  btnALogin: {
    idParent: "header",
    balise: "a",
    content: "Login",
    style: { display: "inline", margin: "0.5em 1em 0.5em 1em; display: end" },
    attribut: {
      id: "btnALogin",
    },
    },

};

document.body.querySelectorAll("a").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    document.querySelector("section").replaceChildren();

    creatComponent(router[event.target.innerHTML]);
  });
});