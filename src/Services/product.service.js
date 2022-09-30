import data from "../Models/card.model.js";
import { ProductsComponent } from "../Components/productComponents/products.component.js";
import { cardBuilder } from "../Components/homeComponents/cards.component.js";

const productPage = () => {
  data.cards.forEach((card) => {
    const elementCard = cardBuilder(
      card.img,
      card.name,
      card.desc,
      card.nameUser,
      card.rate
    );
    ProductsComponent.querySelector("#divProducts").append(elementCard);
  });
  return ProductsComponent;
};
export default productPage;
