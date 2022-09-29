import { input, textElementFunction } from "../services/functions.js";

export const LoginComponent = document.createElement("div");
LoginComponent.setAttribute("style", "height:90vh");

const form = document.createElement("form");

// const inputMail = document.createElement("input");
// inputMail.setAttribute("type", "mail");

// const inputPassword = document.createElement("input");
// inputPassword.setAttribute("type", "password");
const divForm = document.createElement("div");
divForm.setAttribute(
  "style",
  "border-radius:5px; background-color:gold; border:1px solid black; width:300px; height:300px; display:flex; flex-direction:column; justify-content:space-evenly; align-items: center; margin: 30px auto; "
);
divForm.appendChild(textElementFunction("h2", "Connecte toi !"));
const divFormMail = document.createElement("div");
divFormMail.appendChild(textElementFunction("p", "Mail :", "margin:0"));
divFormMail.appendChild(input("mail"));
divForm.appendChild(divFormMail);
const divFormPassword = document.createElement("div");
divFormPassword.appendChild(textElementFunction("p", "Password :", "margin:0"));
divFormPassword.appendChild(input("password"));
divForm.appendChild(divFormPassword);
divForm.appendChild(input("submit"));
LoginComponent.appendChild(divForm);
