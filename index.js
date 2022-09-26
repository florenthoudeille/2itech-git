document.body.setAttribute(
  "style",
  "margin:0;display:flex;flex-direction:column;justify-content:space-between"
);

// H1

const h1 = document.createElement("h1");

const legoShareText = document.createTextNode("Lego Share");

h1.setAttribute("style", "margin:0");

h1.appendChild(legoShareText);

// Link Home

const homeLink = document.createElement("a");
homeLink.setAttribute("href", "http://");
homeLink.setAttribute("style", "text-decoration:none;color:black");
const homeLinkText = document.createTextNode("Home");

homeLink.appendChild(homeLinkText);

// Link Products

const productsLink = document.createElement("a");
productsLink.setAttribute("href", "http://");
productsLink.setAttribute("style", "text-decoration:none;color:black");
const productsLinkText = document.createTextNode("Products");

productsLink.appendChild(productsLinkText);

// Link Login

const loginLink = document.createElement("a");
loginLink.setAttribute("href", "http://");
loginLink.setAttribute("style", "text-decoration:none;color:black");
const loginLinkText = document.createTextNode("Login");

loginLink.appendChild(loginLinkText);

// input search

const searchBarInput = document.createElement("input");
searchBarInput.setAttribute("placeholder", "Rechercher ...");

// div navbar

const divHead = document.createElement("div");

divHead.setAttribute(
  "style",
  "height:10vh; background-color:gray;width:100%;padding:0;display:flex;justify-content:space-around;align-items:center"
);

divHead.appendChild(h1);

// Placement des éléments dans divHead

document.body.appendChild(divHead);
divHead.appendChild(homeLink);
divHead.appendChild(productsLink);
divHead.appendChild(searchBarInput);
divHead.appendChild(loginLink);

// Carousel div

const carouselDiv = document.createElement("div");
carouselDiv.setAttribute(
  "style",
  "height:30vh;background-color:salmon;width:50vw;margin: 30px auto"
);

// Placement des éléments dans le body

document.body.appendChild(carouselDiv);
