export const LoginComponent = document.createElement("div");

const form = document.createElement("form");

const inputMail = document.createElement("input");
inputMail.setAttribute("type", "mail");

const inputPassword = document.createElement("input");
inputPassword.setAttribute("type", "password");

form.appendChild(inputMail);
form.appendChild(inputPassword);
LoginComponent.appendChild(form);
