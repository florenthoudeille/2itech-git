import "./style.css";
import "flowbite";
import { NavComponent } from "./Components/navComponents/nav.component.js";
import homePage from "./Services/home.service.js";
import productPage from "./Services/product.service.js";
import { HomeComponent } from "./Components/homeComponents/home.component.js";
import { ProductsComponent } from "./Components/productComponents/products.component.js";

homePage();
productPage();

document.body.appendChild(NavComponent);
let main = document.createElement("main");
main.setAttribute("class", "font-Reem");
document.body.insertBefore(main, null);
main.append(HomeComponent);

const btnHome = document.querySelector("#btnHome");
btnHome.addEventListener("click", () => {
  if (document.querySelector("#divMain").dataset.main !== "home") {
    main.removeChild(document.querySelector("#divMain"));
    main.appendChild(HomeComponent);
    // main.appendChild(document.querySelector("#divMain"['data-main' = "product"]));
  }
});

const btnProducts = document.querySelector("#btnProducts");
btnProducts.addEventListener("click", () => {
  if (document.querySelector("#divMain").dataset.main !== "product") {
    main.removeChild(document.querySelector("#divMain"));
    main.appendChild(ProductsComponent);
  }
});
