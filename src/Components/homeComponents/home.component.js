import { CarouselComponent } from "./carousel.component.js";

/* divMain */
let divMain = newElem("div", {
  "data-main": "home",
  id: "divMain",
});

/* sectionCarousel */
let sectionCarousel = newElem("section", {
  class: "flex justify-center",
});
divMain.insertBefore(sectionCarousel, null);

/* divCarousel */
let divCarousel = newElem("div", {
  class: "w-2/3 h-80 relative",
  id: "default-carousel",
  "data-carousel": "slide",
});
sectionCarousel.insertBefore(divCarousel, null);

/* carouselWrapper */
let carouselWrapper = newElem("div", {
  class: "relative h-56 overflow-hidden md:h-96",
});
divCarousel.insertBefore(carouselWrapper, null);

Object.values(CarouselComponent).forEach((item) => {
  let items = document.createElement(item.name);
  items.setAttribute("class", item.attribut.class);
  items.setAttribute("data-carousel-item", item.attribut.dataCarousel);

  let spanItems = document.createElement(item.spanItem.name);
  spanItems.setAttribute("class", item.spanItem.class);
  let txtSpanItems = document.createTextNode(item.spanItem.text);
  spanItems.appendChild(txtSpanItems);

  let imgItems = document.createElement(item.imgItem.name);
  imgItems.setAttribute("class", item.imgItem.attribut.class);
  imgItems.setAttribute("src", item.imgItem.attribut.src);
  imgItems.setAttribute("alt", item.imgItem.attribut.alt);

  items.insertBefore(spanItems, null);
  spanItems.insertBefore(imgItems, null);
  carouselWrapper.insertBefore(items, null);
});

/* sectionCards */
let sectionCards = newElem("section", "");
divMain.insertBefore(sectionCards, null);

/* h2 */
let h2 = newElem(
  "h2",
  {
    class: "text-5xl ml-10 my-10",
  },
  "Cards"
);
sectionCards.insertBefore(h2, null);

/* divCards */
let divCards = newElem("div", {
  class: "flex justify-evenly",
  id: "cardContainer",
});
sectionCards.insertBefore(divCards, null);

/* Fonction pour créer des elements */
function newElem(el, attribut, content = "") {
  const newElem = document.createElement(el);
  const newContent = document.createTextNode(content);
  newElem.appendChild(newContent);
  for (let key in attribut) {
    newElem.setAttribute(key, attribut[key]);
  }
  return newElem;
}

export const HomeComponent = divMain;
