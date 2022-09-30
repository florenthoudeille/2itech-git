import { homeComponent } from "../page/home.js";
import { loginComponent } from "../page/login.js";
import { productsComponent } from "../page/products.js";

export const navbarComponent = document.createElement("div");

function hide(component) {
  content.replaceChildren(component);
}

const elemHtml = (type, text, attribute, listener) => {
  const elem = document.createElement(`${type}`);
  if (text && !"") {
    const contentText = document.createTextNode(text);
    elem.appendChild(contentText);
  }
  if (attribute && !"") {
    attribute.map((attribute) => {
      elem.setAttribute(attribute.key, attribute.value);
    });
  }
  if (listener) {
    elem.addEventListener(listener.action, () => {
      hide(listener.function);
    });
  }
  return elem;
};

const content = elemHtml("div");
const h1 = elemHtml("h1", "Lego Shared");
const span1 = elemHtml("a", "products", "", {
  action: "click",
  function: productsComponent,
});
const span2 = elemHtml("a", "home", "", {
  action: "click",
  function: homeComponent,
});
const span3 = elemHtml("a", "Login", "", {
  action: "click",
  function: loginComponent,
});
const input = elemHtml("input", "", [{ key: "placeholder", value: "search" }]);
const navbar = elemHtml("div");

navbar.classList.add("nav");
navbar.append(h1, span2, span1, input, span3);

navbarComponent.appendChild(navbar);
navbarComponent.appendChild(content);
