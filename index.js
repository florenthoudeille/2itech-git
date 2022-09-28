import { NavComponent } from "./components/nav.js";
import { HomeComponent } from "./components/home.js";
import { ProductsComponent } from "./components/products.js";

document.body.appendChild(NavComponent);
document.body.appendChild(HomeComponent);

let pageState = true;

const btnHome = document.querySelector('#btnHome');
btnHome.addEventListener('click', () => {
    if (!pageState) {
        document.body.removeChild(ProductsComponent);
        document.body.appendChild(HomeComponent);
        pageState = true;
    }
})

const btnProducts = document.querySelector('#btnProducts');
btnProducts.addEventListener('click', () => {
    if (pageState) {
        document.body.removeChild(HomeComponent);
        document.body.appendChild(ProductsComponent);
        pageState = false;
    }
})
