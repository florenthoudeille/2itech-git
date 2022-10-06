import { router } from "../router/router.js";

export function creatComponent(elem) {

  for (let obj of Object.values(elem)) {

    let newElem = document.createElement(obj.balise);

    if (obj.content) {
      const newContent = document.createTextNode(obj.content);
      newElem.appendChild(newContent);
    }

    for (let key in obj.attribut) {
      newElem.setAttribute(key, obj.attribut[key]);
    }

    if (obj.style) {
      var url = "";
      for (const key in obj.style) {
        url = url.concat(key+': '+obj.style[key]+"; ");
      }
      newElem.setAttribute("style", url);
    }
    
    newElem.setAttribute("class", obj.class);

    if (obj.idParent) {
      document.getElementById(obj.idParent).appendChild(newElem);
    } else {
      document.querySelector(obj.parent).appendChild(newElem);
    }
 
  }
  document.body.querySelectorAll("a").forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
    
        document.querySelector("section").replaceChildren();
    
        creatComponent(router[event.target.innerHTML]);
      });
    });
}