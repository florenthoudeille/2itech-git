"use strict";
(self["webpackChunklego"] = self["webpackChunklego"] || []).push([["index"],{

/***/ "./src/component/header.js":
/*!*********************************!*\
  !*** ./src/component/header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
const header = {
  header: {
    idParent: "",
    parent: "body",
    class:"header",
    content: "",
    balise: "header",
    style: {
      display: "flex",
      flexdirection: "row",
      margin: "0.5em 1em 0.5em 1em ",
      width: "100vw",
      height: "10vh",
    },
    attribut: {
      id: "header",
    },
  },
  TitreLogo: {
    idParent: "header",
    content: "LEGO Share",
    balise: "h1",
    style: {
      display: "inline",
      margin: "0.5em 1em 0.5em 1em ",
    },
    attribut: {
      id: "header",
    },
  },
  containerLink: {
    idParent: "header",
    balise: "ul",
    content: "",
    style: {},
    attribut: {
      id: "containerlink",
    },
  },
  btnAHome: {
    idParent: "containerlink",
    balise: "a",
    content: "Home",
    style: { display: "inline", margin: "0.5em 1em 0.5em 1em" },
    attribut: {
      class: "nav-link",
      id: "btnHome",
    },
  },
  btnAProducts: {
    idParent: "containerlink",
    balise: "a",
    content: "Products",
    style: { display: "inline", margin: "0.5em 1em 0.5em 1em" },
    attribut: {
      id: "btnProducts",
      class: "nav-link",
    },
  },
  searchBar: {
    idParent: "header",
    balise: "input",
    content: "",
      style: {
          display: "inline",
          height: "3vh",
          margin: "0.5em 1em 0.5em 1em",
      },
    attribut: {
      id: "searchBar",
      type: "search",
      placeholder: "Recherche ?",
    },
  },
  btnALogin: {
    idParent: "header",
    balise: "a",
    content: "Login",
    style: { display: "inline", margin: "0.5em 1em 0.5em 1em; display: end" },
    attribut: {
      id: "btnALogin",
    },
    },

};

document.body.querySelectorAll("a").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    document.querySelector("section").replaceChildren();

    creatComponent(router[event.target.innerHTML]);
  });
});

/***/ }),

/***/ "./src/component/homeComponent.js":
/*!****************************************!*\
  !*** ./src/component/homeComponent.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeComponent": () => (/* binding */ homeComponent)
/* harmony export */ });
const homeComponent = {
    
  divCaroussel: {
    class: "containerCaroussel",
    idParent: "section",
    content: "",
    balise: "div",
    style: {
      width: "100%",
      height: "20vh",
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
    },
    attribut: {
      id: "containerCaroussel",
    },
  },
  caroussel: {
    class: "caroussel",
    idParent: "containerCaroussel",
    content: "",
    balise: "div",
    style: {
      "background-color": "red",
      width: "60%",
      height: "80%",
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
    },
    attribut: {
        id: "caroussel",
    },
  },
  textCaroussel: {
    class: "textCaroussel",
    idParent: "caroussel",
    content: "Caroussel",
    balise: "p",
    style: {},
    attribut: {
      id: "containerCaroussel",
    },
  },
  divCard: {
    class: "containerCard",
    idParent: "section",
    content: "",
    balise: "div",
    style: {
      width: "100%",
    },
    attribut: {
      id: "containerCard",
    },
  },
  h2Card: {
    class: "h2Card",
    idParent: "containerCard",
    content: "Products Lists",
    balise: "h2",
    style: {
        width: "100%",
      display: "block",
    },
    attribut: {
      id: "h2Card",
    },
  },
  card: {
    class: "card",
    idParent: "containerCard",
    content: "card",
    balise: "div",
    attribut: {
      id: "card",
    },
    style: {
      width: "100%",
    },
  },
};

/***/ }),

/***/ "./src/component/productComponent.js":
/*!*******************************************!*\
  !*** ./src/component/productComponent.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "productComponent": () => (/* binding */ productComponent)
/* harmony export */ });
const productComponent = {
  listProducts: {
    idParent: "section",
    class: "containerP",
    content: "",
    balise: "header",
    style: {
        "background-color": "grey",
    },
    attribut: {
      id: "listProducts",
    },
},
para: {
    idParent: "listProducts",
    class: "para",
    content:   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At multis se probavit. Audeo dicere, inquit. Proclivi currit oratio. Quid censes in Latino fore? Hoc enim constituto in philosophia constituta sunt omnia. Haec para/doca illi, nos admirabilia dicamus. Quod autem ratione actum est, id officium appellamus.Quid de Platone aut de Democrito loquar? Nam quid possumus facere melius? Quod ea non occurrentia fingunt, vincunt Aristonem; Qui ita affectus, beatum esse numquam probabis; Duo Reges: constructio interrete. Aliter homines, aliter philosophos loqui putas oportere? Cur iustitia laudatur? Itaque ad tempus ad Pisonem omnes. Tubulo putas dicere? Nihil illinc huc pervenit. Recte, inquit, intellegis. Illis videtur, qui illud non dubitant bonum dicere -; Sit enim idem caecus, debilis. Tuo vero id quidem, inquam, arbitratu. Istic sum, inquit. Prave, nequiter, turpiter cenabat; Quamquam te quidem video minime esse deterritum. Summae mihi videtur inscitiae. Sed haec omittamus; Si longus, levis",
    style: {
        color:"white",
        width: "60%",
        height: "80%",
    },
    attribut: {
      id: "paraProducts",
    },
  },
};


/***/ }),

/***/ "./src/component/section.js":
/*!**********************************!*\
  !*** ./src/component/section.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "section": () => (/* binding */ section)
/* harmony export */ });
const section = {
  section: {
    idParent: "body",
    parent: "body",
    classe: "section",
    content: "toto",
    balise: "section",
    style: {
      width: "100vw",
      height: "80vh",
    },
    attribut: {
      id: "section",
    },
  },
};


/***/ }),

/***/ "./src/function/creatComponent.js":
/*!****************************************!*\
  !*** ./src/function/creatComponent.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "creatComponent": () => (/* binding */ creatComponent)
/* harmony export */ });
/* harmony import */ var _router_router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router/router.js */ "./src/router/router.js");


function creatComponent(elem) {

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
    
        creatComponent(_router_router_js__WEBPACK_IMPORTED_MODULE_0__.router[event.target.innerHTML]);
      });
    });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _function_creatComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/creatComponent.js */ "./src/function/creatComponent.js");
/* harmony import */ var _router_router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router/router.js */ "./src/router/router.js");
// import _ from 'lodash';



(0,_function_creatComponent_js__WEBPACK_IMPORTED_MODULE_0__.creatComponent)(_router_router_js__WEBPACK_IMPORTED_MODULE_1__.router.header);
(0,_function_creatComponent_js__WEBPACK_IMPORTED_MODULE_0__.creatComponent)(_router_router_js__WEBPACK_IMPORTED_MODULE_1__.router.section);
(0,_function_creatComponent_js__WEBPACK_IMPORTED_MODULE_0__.creatComponent)(_router_router_js__WEBPACK_IMPORTED_MODULE_1__.router.Home);

/***/ }),

/***/ "./src/router/router.js":
/*!******************************!*\
  !*** ./src/router/router.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "router": () => (/* binding */ router)
/* harmony export */ });
/* harmony import */ var _component_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/header.js */ "./src/component/header.js");
/* harmony import */ var _component_homeComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/homeComponent.js */ "./src/component/homeComponent.js");
/* harmony import */ var _component_section_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/section.js */ "./src/component/section.js");
/* harmony import */ var _component_productComponent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/productComponent.js */ "./src/component/productComponent.js");





const router = {
    
    header : _component_header_js__WEBPACK_IMPORTED_MODULE_0__.header,
    section : _component_section_js__WEBPACK_IMPORTED_MODULE_2__.section,
    Home : _component_homeComponent_js__WEBPACK_IMPORTED_MODULE_1__.homeComponent,
    Products : _component_productComponent_js__WEBPACK_IMPORTED_MODULE_3__.productComponent,
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQzhEO0FBQ2xCO0FBQzVDO0FBQ0EsMkVBQWMsQ0FBQyw0REFBYTtBQUM1QiwyRUFBYyxDQUFDLDZEQUFjO0FBQzdCLDJFQUFjLENBQUMsMERBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05zQjtBQUNjO0FBQ1o7QUFDa0I7QUFDcEU7QUFDTztBQUNQO0FBQ0EsYUFBYSx3REFBTTtBQUNuQixjQUFjLDBEQUFPO0FBQ3JCLFdBQVcsc0VBQWE7QUFDeEIsZUFBZSw0RUFBZ0I7QUFDL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWdvLy4vc3JjL2NvbXBvbmVudC9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vbGVnby8uL3NyYy9jb21wb25lbnQvaG9tZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9sZWdvLy4vc3JjL2NvbXBvbmVudC9wcm9kdWN0Q29tcG9uZW50LmpzIiwid2VicGFjazovL2xlZ28vLi9zcmMvY29tcG9uZW50L3NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbGVnby8uL3NyYy9mdW5jdGlvbi9jcmVhdENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9sZWdvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2xlZ28vLi9zcmMvcm91dGVyL3JvdXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaGVhZGVyID0ge1xyXG4gIGhlYWRlcjoge1xyXG4gICAgaWRQYXJlbnQ6IFwiXCIsXHJcbiAgICBwYXJlbnQ6IFwiYm9keVwiLFxyXG4gICAgY2xhc3M6XCJoZWFkZXJcIixcclxuICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICBiYWxpc2U6IFwiaGVhZGVyXCIsXHJcbiAgICBzdHlsZToge1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgZmxleGRpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgbWFyZ2luOiBcIjAuNWVtIDFlbSAwLjVlbSAxZW0gXCIsXHJcbiAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbiAgICAgIGhlaWdodDogXCIxMHZoXCIsXHJcbiAgICB9LFxyXG4gICAgYXR0cmlidXQ6IHtcclxuICAgICAgaWQ6IFwiaGVhZGVyXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgVGl0cmVMb2dvOiB7XHJcbiAgICBpZFBhcmVudDogXCJoZWFkZXJcIixcclxuICAgIGNvbnRlbnQ6IFwiTEVHTyBTaGFyZVwiLFxyXG4gICAgYmFsaXNlOiBcImgxXCIsXHJcbiAgICBzdHlsZToge1xyXG4gICAgICBkaXNwbGF5OiBcImlubGluZVwiLFxyXG4gICAgICBtYXJnaW46IFwiMC41ZW0gMWVtIDAuNWVtIDFlbSBcIixcclxuICAgIH0sXHJcbiAgICBhdHRyaWJ1dDoge1xyXG4gICAgICBpZDogXCJoZWFkZXJcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250YWluZXJMaW5rOiB7XHJcbiAgICBpZFBhcmVudDogXCJoZWFkZXJcIixcclxuICAgIGJhbGlzZTogXCJ1bFwiLFxyXG4gICAgY29udGVudDogXCJcIixcclxuICAgIHN0eWxlOiB7fSxcclxuICAgIGF0dHJpYnV0OiB7XHJcbiAgICAgIGlkOiBcImNvbnRhaW5lcmxpbmtcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBidG5BSG9tZToge1xyXG4gICAgaWRQYXJlbnQ6IFwiY29udGFpbmVybGlua1wiLFxyXG4gICAgYmFsaXNlOiBcImFcIixcclxuICAgIGNvbnRlbnQ6IFwiSG9tZVwiLFxyXG4gICAgc3R5bGU6IHsgZGlzcGxheTogXCJpbmxpbmVcIiwgbWFyZ2luOiBcIjAuNWVtIDFlbSAwLjVlbSAxZW1cIiB9LFxyXG4gICAgYXR0cmlidXQ6IHtcclxuICAgICAgY2xhc3M6IFwibmF2LWxpbmtcIixcclxuICAgICAgaWQ6IFwiYnRuSG9tZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ0bkFQcm9kdWN0czoge1xyXG4gICAgaWRQYXJlbnQ6IFwiY29udGFpbmVybGlua1wiLFxyXG4gICAgYmFsaXNlOiBcImFcIixcclxuICAgIGNvbnRlbnQ6IFwiUHJvZHVjdHNcIixcclxuICAgIHN0eWxlOiB7IGRpc3BsYXk6IFwiaW5saW5lXCIsIG1hcmdpbjogXCIwLjVlbSAxZW0gMC41ZW0gMWVtXCIgfSxcclxuICAgIGF0dHJpYnV0OiB7XHJcbiAgICAgIGlkOiBcImJ0blByb2R1Y3RzXCIsXHJcbiAgICAgIGNsYXNzOiBcIm5hdi1saW5rXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VhcmNoQmFyOiB7XHJcbiAgICBpZFBhcmVudDogXCJoZWFkZXJcIixcclxuICAgIGJhbGlzZTogXCJpbnB1dFwiLFxyXG4gICAgY29udGVudDogXCJcIixcclxuICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiM3ZoXCIsXHJcbiAgICAgICAgICBtYXJnaW46IFwiMC41ZW0gMWVtIDAuNWVtIDFlbVwiLFxyXG4gICAgICB9LFxyXG4gICAgYXR0cmlidXQ6IHtcclxuICAgICAgaWQ6IFwic2VhcmNoQmFyXCIsXHJcbiAgICAgIHR5cGU6IFwic2VhcmNoXCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIlJlY2hlcmNoZSA/XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnRuQUxvZ2luOiB7XHJcbiAgICBpZFBhcmVudDogXCJoZWFkZXJcIixcclxuICAgIGJhbGlzZTogXCJhXCIsXHJcbiAgICBjb250ZW50OiBcIkxvZ2luXCIsXHJcbiAgICBzdHlsZTogeyBkaXNwbGF5OiBcImlubGluZVwiLCBtYXJnaW46IFwiMC41ZW0gMWVtIDAuNWVtIDFlbTsgZGlzcGxheTogZW5kXCIgfSxcclxuICAgIGF0dHJpYnV0OiB7XHJcbiAgICAgIGlkOiBcImJ0bkFMb2dpblwiLFxyXG4gICAgfSxcclxuICAgIH0sXHJcblxyXG59O1xyXG5cclxuZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uXCIpLnJlcGxhY2VDaGlsZHJlbigpO1xyXG5cclxuICAgIGNyZWF0Q29tcG9uZW50KHJvdXRlcltldmVudC50YXJnZXQuaW5uZXJIVE1MXSk7XHJcbiAgfSk7XHJcbn0pOyIsImV4cG9ydCBjb25zdCBob21lQ29tcG9uZW50ID0ge1xyXG4gICAgXHJcbiAgZGl2Q2Fyb3Vzc2VsOiB7XHJcbiAgICBjbGFzczogXCJjb250YWluZXJDYXJvdXNzZWxcIixcclxuICAgIGlkUGFyZW50OiBcInNlY3Rpb25cIixcclxuICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICBiYWxpc2U6IFwiZGl2XCIsXHJcbiAgICBzdHlsZToge1xyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIGhlaWdodDogXCIyMHZoXCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBcImFsaWduLWl0ZW1zXCI6IFwiY2VudGVyXCIsXHJcbiAgICAgIFwianVzdGlmeS1jb250ZW50XCI6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG4gICAgYXR0cmlidXQ6IHtcclxuICAgICAgaWQ6IFwiY29udGFpbmVyQ2Fyb3Vzc2VsXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2Fyb3Vzc2VsOiB7XHJcbiAgICBjbGFzczogXCJjYXJvdXNzZWxcIixcclxuICAgIGlkUGFyZW50OiBcImNvbnRhaW5lckNhcm91c3NlbFwiLFxyXG4gICAgY29udGVudDogXCJcIixcclxuICAgIGJhbGlzZTogXCJkaXZcIixcclxuICAgIHN0eWxlOiB7XHJcbiAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcInJlZFwiLFxyXG4gICAgICB3aWR0aDogXCI2MCVcIixcclxuICAgICAgaGVpZ2h0OiBcIjgwJVwiLFxyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgXCJhbGlnbi1pdGVtc1wiOiBcImNlbnRlclwiLFxyXG4gICAgICBcImp1c3RpZnktY29udGVudFwiOiBcImNlbnRlclwiLFxyXG4gICAgfSxcclxuICAgIGF0dHJpYnV0OiB7XHJcbiAgICAgICAgaWQ6IFwiY2Fyb3Vzc2VsXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGV4dENhcm91c3NlbDoge1xyXG4gICAgY2xhc3M6IFwidGV4dENhcm91c3NlbFwiLFxyXG4gICAgaWRQYXJlbnQ6IFwiY2Fyb3Vzc2VsXCIsXHJcbiAgICBjb250ZW50OiBcIkNhcm91c3NlbFwiLFxyXG4gICAgYmFsaXNlOiBcInBcIixcclxuICAgIHN0eWxlOiB7fSxcclxuICAgIGF0dHJpYnV0OiB7XHJcbiAgICAgIGlkOiBcImNvbnRhaW5lckNhcm91c3NlbFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRpdkNhcmQ6IHtcclxuICAgIGNsYXNzOiBcImNvbnRhaW5lckNhcmRcIixcclxuICAgIGlkUGFyZW50OiBcInNlY3Rpb25cIixcclxuICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICBiYWxpc2U6IFwiZGl2XCIsXHJcbiAgICBzdHlsZToge1xyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICB9LFxyXG4gICAgYXR0cmlidXQ6IHtcclxuICAgICAgaWQ6IFwiY29udGFpbmVyQ2FyZFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGgyQ2FyZDoge1xyXG4gICAgY2xhc3M6IFwiaDJDYXJkXCIsXHJcbiAgICBpZFBhcmVudDogXCJjb250YWluZXJDYXJkXCIsXHJcbiAgICBjb250ZW50OiBcIlByb2R1Y3RzIExpc3RzXCIsXHJcbiAgICBiYWxpc2U6IFwiaDJcIixcclxuICAgIHN0eWxlOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICB9LFxyXG4gICAgYXR0cmlidXQ6IHtcclxuICAgICAgaWQ6IFwiaDJDYXJkXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2FyZDoge1xyXG4gICAgY2xhc3M6IFwiY2FyZFwiLFxyXG4gICAgaWRQYXJlbnQ6IFwiY29udGFpbmVyQ2FyZFwiLFxyXG4gICAgY29udGVudDogXCJjYXJkXCIsXHJcbiAgICBiYWxpc2U6IFwiZGl2XCIsXHJcbiAgICBhdHRyaWJ1dDoge1xyXG4gICAgICBpZDogXCJjYXJkXCIsXHJcbiAgICB9LFxyXG4gICAgc3R5bGU6IHtcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59OyIsImV4cG9ydCBjb25zdCBwcm9kdWN0Q29tcG9uZW50ID0ge1xyXG4gIGxpc3RQcm9kdWN0czoge1xyXG4gICAgaWRQYXJlbnQ6IFwic2VjdGlvblwiLFxyXG4gICAgY2xhc3M6IFwiY29udGFpbmVyUFwiLFxyXG4gICAgY29udGVudDogXCJcIixcclxuICAgIGJhbGlzZTogXCJoZWFkZXJcIixcclxuICAgIHN0eWxlOiB7XHJcbiAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiZ3JleVwiLFxyXG4gICAgfSxcclxuICAgIGF0dHJpYnV0OiB7XHJcbiAgICAgIGlkOiBcImxpc3RQcm9kdWN0c1wiLFxyXG4gICAgfSxcclxufSxcclxucGFyYToge1xyXG4gICAgaWRQYXJlbnQ6IFwibGlzdFByb2R1Y3RzXCIsXHJcbiAgICBjbGFzczogXCJwYXJhXCIsXHJcbiAgICBjb250ZW50OiAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQXQgbXVsdGlzIHNlIHByb2Jhdml0LiBBdWRlbyBkaWNlcmUsIGlucXVpdC4gUHJvY2xpdmkgY3Vycml0IG9yYXRpby4gUXVpZCBjZW5zZXMgaW4gTGF0aW5vIGZvcmU/IEhvYyBlbmltIGNvbnN0aXR1dG8gaW4gcGhpbG9zb3BoaWEgY29uc3RpdHV0YSBzdW50IG9tbmlhLiBIYWVjIHBhcmEvZG9jYSBpbGxpLCBub3MgYWRtaXJhYmlsaWEgZGljYW11cy4gUXVvZCBhdXRlbSByYXRpb25lIGFjdHVtIGVzdCwgaWQgb2ZmaWNpdW0gYXBwZWxsYW11cy5RdWlkIGRlIFBsYXRvbmUgYXV0IGRlIERlbW9jcml0byBsb3F1YXI/IE5hbSBxdWlkIHBvc3N1bXVzIGZhY2VyZSBtZWxpdXM/IFF1b2QgZWEgbm9uIG9jY3VycmVudGlhIGZpbmd1bnQsIHZpbmN1bnQgQXJpc3RvbmVtOyBRdWkgaXRhIGFmZmVjdHVzLCBiZWF0dW0gZXNzZSBudW1xdWFtIHByb2JhYmlzOyBEdW8gUmVnZXM6IGNvbnN0cnVjdGlvIGludGVycmV0ZS4gQWxpdGVyIGhvbWluZXMsIGFsaXRlciBwaGlsb3NvcGhvcyBsb3F1aSBwdXRhcyBvcG9ydGVyZT8gQ3VyIGl1c3RpdGlhIGxhdWRhdHVyPyBJdGFxdWUgYWQgdGVtcHVzIGFkIFBpc29uZW0gb21uZXMuIFR1YnVsbyBwdXRhcyBkaWNlcmU/IE5paGlsIGlsbGluYyBodWMgcGVydmVuaXQuIFJlY3RlLCBpbnF1aXQsIGludGVsbGVnaXMuIElsbGlzIHZpZGV0dXIsIHF1aSBpbGx1ZCBub24gZHViaXRhbnQgYm9udW0gZGljZXJlIC07IFNpdCBlbmltIGlkZW0gY2FlY3VzLCBkZWJpbGlzLiBUdW8gdmVybyBpZCBxdWlkZW0sIGlucXVhbSwgYXJiaXRyYXR1LiBJc3RpYyBzdW0sIGlucXVpdC4gUHJhdmUsIG5lcXVpdGVyLCB0dXJwaXRlciBjZW5hYmF0OyBRdWFtcXVhbSB0ZSBxdWlkZW0gdmlkZW8gbWluaW1lIGVzc2UgZGV0ZXJyaXR1bS4gU3VtbWFlIG1paGkgdmlkZXR1ciBpbnNjaXRpYWUuIFNlZCBoYWVjIG9taXR0YW11czsgU2kgbG9uZ3VzLCBsZXZpc1wiLFxyXG4gICAgc3R5bGU6IHtcclxuICAgICAgICBjb2xvcjpcIndoaXRlXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiNjAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjgwJVwiLFxyXG4gICAgfSxcclxuICAgIGF0dHJpYnV0OiB7XHJcbiAgICAgIGlkOiBcInBhcmFQcm9kdWN0c1wiLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJleHBvcnQgY29uc3Qgc2VjdGlvbiA9IHtcclxuICBzZWN0aW9uOiB7XHJcbiAgICBpZFBhcmVudDogXCJib2R5XCIsXHJcbiAgICBwYXJlbnQ6IFwiYm9keVwiLFxyXG4gICAgY2xhc3NlOiBcInNlY3Rpb25cIixcclxuICAgIGNvbnRlbnQ6IFwidG90b1wiLFxyXG4gICAgYmFsaXNlOiBcInNlY3Rpb25cIixcclxuICAgIHN0eWxlOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbiAgICAgIGhlaWdodDogXCI4MHZoXCIsXHJcbiAgICB9LFxyXG4gICAgYXR0cmlidXQ6IHtcclxuICAgICAgaWQ6IFwic2VjdGlvblwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyByb3V0ZXIgfSBmcm9tIFwiLi4vcm91dGVyL3JvdXRlci5qc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0Q29tcG9uZW50KGVsZW0pIHtcclxuXHJcbiAgZm9yIChsZXQgb2JqIG9mIE9iamVjdC52YWx1ZXMoZWxlbSkpIHtcclxuXHJcbiAgICBsZXQgbmV3RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqLmJhbGlzZSk7XHJcblxyXG4gICAgaWYgKG9iai5jb250ZW50KSB7XHJcbiAgICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShvYmouY29udGVudCk7XHJcbiAgICAgIG5ld0VsZW0uYXBwZW5kQ2hpbGQobmV3Q29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQga2V5IGluIG9iai5hdHRyaWJ1dCkge1xyXG4gICAgICBuZXdFbGVtLnNldEF0dHJpYnV0ZShrZXksIG9iai5hdHRyaWJ1dFtrZXldKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob2JqLnN0eWxlKSB7XHJcbiAgICAgIHZhciB1cmwgPSBcIlwiO1xyXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmouc3R5bGUpIHtcclxuICAgICAgICB1cmwgPSB1cmwuY29uY2F0KGtleSsnOiAnK29iai5zdHlsZVtrZXldK1wiOyBcIik7XHJcbiAgICAgIH1cclxuICAgICAgbmV3RWxlbS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCB1cmwpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBuZXdFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIG9iai5jbGFzcyk7XHJcblxyXG4gICAgaWYgKG9iai5pZFBhcmVudCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvYmouaWRQYXJlbnQpLmFwcGVuZENoaWxkKG5ld0VsZW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvYmoucGFyZW50KS5hcHBlbmRDaGlsZChuZXdFbGVtKTtcclxuICAgIH1cclxuIFxyXG4gIH1cclxuICBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uXCIpLnJlcGxhY2VDaGlsZHJlbigpO1xyXG4gICAgXHJcbiAgICAgICAgY3JlYXRDb21wb25lbnQocm91dGVyW2V2ZW50LnRhcmdldC5pbm5lckhUTUxdKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufSIsIi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IGNyZWF0Q29tcG9uZW50IH0gZnJvbSBcIi4vZnVuY3Rpb24vY3JlYXRDb21wb25lbnQuanNcIjtcclxuaW1wb3J0IHsgcm91dGVyIH0gZnJvbSBcIi4vcm91dGVyL3JvdXRlci5qc1wiO1xyXG5cclxuY3JlYXRDb21wb25lbnQocm91dGVyLmhlYWRlcik7XHJcbmNyZWF0Q29tcG9uZW50KHJvdXRlci5zZWN0aW9uKTtcclxuY3JlYXRDb21wb25lbnQocm91dGVyLkhvbWUpOyIsImltcG9ydCB7IGhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudC9oZWFkZXIuanMnO1xyXG5pbXBvcnQgeyBob21lQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50L2hvbWVDb21wb25lbnQuanMnO1xyXG5pbXBvcnQgeyBzZWN0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50L3NlY3Rpb24uanMnO1xyXG5pbXBvcnQgeyBwcm9kdWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50L3Byb2R1Y3RDb21wb25lbnQuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlciA9IHtcclxuICAgIFxyXG4gICAgaGVhZGVyIDogaGVhZGVyLFxyXG4gICAgc2VjdGlvbiA6IHNlY3Rpb24sXHJcbiAgICBIb21lIDogaG9tZUNvbXBvbmVudCxcclxuICAgIFByb2R1Y3RzIDogcHJvZHVjdENvbXBvbmVudCxcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9