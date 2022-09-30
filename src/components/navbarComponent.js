// START NAVBAR //

export const divHead = document.createElement("div");

import {
  linkElementFunction,
  textElementFunction,
  input,
} from "../services/functions.js";

divHead.setAttribute(
  "style",
  "height:10vh; background-color:gray;width:100%;padding:0;display:flex;justify-content:space-around;align-items:center"
);

divHead.appendChild(textElementFunction("h1", "Lego Share"));

// Placement des éléments dans divHead

divHead.appendChild(
  linkElementFunction("text-decoration:none;color:black", "Home", "Home")
);
divHead.appendChild(
  linkElementFunction(
    "text-decoration:none;color:black;",
    "Products",
    "Products"
  )
);
divHead.appendChild(input("input", "Rechercher ..."));
divHead.appendChild(
  linkElementFunction("text-decoration:none;color:black", "Login", "Login")
);

// END NAV BAR //
