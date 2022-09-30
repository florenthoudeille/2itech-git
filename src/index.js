import { HomeComponent } from "./components/homeComponent.js";
import { ProductsComponent } from "./components/productsComponent.js";
import { divHead } from "./components/navbarComponent.js";
import { LoginComponent } from "./components/loginComponent.js";

const container = document.createElement("section");

document.body.appendChild(divHead);
container.appendChild(ProductsComponent);
document.body.appendChild(container);

document.body.setAttribute(
  "style",
  "margin:0;display:flex;flex-direction:column;justify-content:space-between"
);

const router = {
  // Home: HomeComponent,
  Products: ProductsComponent,
  // Login: LoginComponent,
};

document.querySelectorAll("a").forEach((item) => {
  item.addEventListener("click", (event) => {
    // empêche la balise a de faire des requêtes HTTP
    event.preventDefault();

    // effacer le contenu présent
    container.replaceChildren();

    // charger le composant correspondant au click
    container.appendChild(router[event.target.id]);
  });
});
