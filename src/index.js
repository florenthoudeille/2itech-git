import './style.css';
import 'flowbite';
import { NavComponent } from "./components/navComponents/nav.js";
import { HomeComponent } from "./components/homeComponents/home.js";
import { ProductsComponent } from "./components/productComponents/products.js";

document.body.appendChild(NavComponent);
let main = document.createElement('main');
main.setAttribute('class', 'font-["Reem Kufi Fun"]');
document.body.insertBefore(main, null)
main.appendChild(HomeComponent);

const btnHome = document.querySelector('#btnHome');
btnHome.addEventListener('click', () => {
    if (document.querySelector('#divMain').dataset.main !== 'home') {
        main.removeChild(ProductsComponent);
        main.appendChild(HomeComponent);
    }
})

const btnProducts = document.querySelector('#btnProducts');
btnProducts.addEventListener('click', () => {
    if (document.querySelector('#divMain').dataset.main !== 'product') {
        main.removeChild(HomeComponent);
        main.appendChild(ProductsComponent);
    }
})