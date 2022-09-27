import { HomeComponent } from "./home.js";
import { ProductsComponent } from "./products.js";
import { divHead } from "./navbar.js";
import { LoginComponent } from "./login.js";

const container = document.createElement("div");
document.body.appendChild(divHead);
container.appendChild(HomeComponent);
document.body.appendChild(container);

const router = {
  Home: HomeComponent,
  Products: ProductsComponent,
  Login: LoginComponent,
};

document.querySelectorAll("a").forEach((item) => {
  item.addEventListener("click", (event) => {
    container.replaceChildren();
    container.appendChild(router[event.target.id]);
  });
});
