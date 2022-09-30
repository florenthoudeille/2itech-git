import data from "../Models/card.model.js";
import { HomeComponent } from "../Components/homeComponents/home.component.js";
import { cardBuilder } from "../Components/homeComponents/cards.component.js";

const homePage = () => {
  data.cards.slice(0, 3).forEach((card) => {
    const elementCard = cardBuilder(
      card.img,
      card.name,
      card.desc,
      card.nameUser,
      card.rate
    );
    HomeComponent.querySelector("#cardContainer").append(elementCard);
  });
  return HomeComponent;
};
export default homePage;
