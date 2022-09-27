import { HomeComponent } from "./home.js";
import { ProductsComponent } from "./products.js";

document.body.removeChild(document.querySelector('#mainProducts'));

const btnHome = document.querySelector('#btnHome');
btnHome.addEventListener('click', () => {
    document.body.removeChild(ProductsComponent);
    document.body.appendChild(HomeComponent);
})

const btnProducts = document.querySelector('#btnProducts');
btnProducts.addEventListener('click', () => {
    document.body.removeChild(HomeComponent);
    document.body.appendChild(ProductsComponent);
})