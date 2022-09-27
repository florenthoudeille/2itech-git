// START NAVBAR //

export const divHead = document.createElement("div");

import { linkElementFunction } from "./functions.js";
// H1

const h1 = document.createElement("h1");

const legoShareText = document.createTextNode("Lego Share");

h1.setAttribute("style", "margin:0");

h1.appendChild(legoShareText);

// Link Home

const homeLink = document.createElement("a");
homeLink.setAttribute("style", "text-decoration:none;color:black");
const homeLinkText = document.createTextNode("Home");
homeLink.setAttribute("id", "Home");

homeLink.appendChild(homeLinkText);
//Refacto :
// linkElementFunction("text-decoration:none;color:black", "Home", "Home");

// Link Products

const productsLink = document.createElement("a");
productsLink.setAttribute("style", "text-decoration:none;color:black");
const productsLinkText = document.createTextNode("Products");
productsLink.setAttribute("id", "Products");

productsLink.appendChild(productsLinkText);
// Refacto :
// linkElementFunction("text-decoration:none;color:black", "Products", "Products");

// Link Login

const loginLink = document.createElement("a");
loginLink.setAttribute("style", "text-decoration:none;color:black");
const loginLinkText = document.createTextNode("Login");
loginLink.setAttribute("id", "Login");

loginLink.appendChild(loginLinkText);
// Refacto :
// linkElementFunction("text-decoration:none;color:black", "Login", "Login");

// input search

const searchBarInput = document.createElement("input");
searchBarInput.setAttribute("placeholder", "Rechercher ...");

// div navbar

divHead.setAttribute(
  "style",
  "height:10vh; background-color:gray;width:100%;padding:0;display:flex;justify-content:space-around;align-items:center"
);

divHead.appendChild(h1);

// Placement des éléments dans divHead

divHead.appendChild(homeLink);
divHead.appendChild(productsLink);
divHead.appendChild(searchBarInput);
divHead.appendChild(loginLink);

// END NAV BAR //
