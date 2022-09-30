const hide = (component) => {
  content.replaceChildren(component);
};

const elemHtml = (type, text, attribute, listener) => {
  const elem = document.createElement(`${type}`);
  if (text && !"") {
    const contentText = document.createTextNode(text);
    elem.appendChild(contentText);
  }
  if (attribute && !"") {
    attribute.map((attribute) => {
      elem.setAttribute(attribute.key, attribute.value);
    });
  }
  if (listener) {
    elem.addEventListener(listener.action, () => {
      hide(listener.function);
    });
  }
  return elem;
};

export default elemHtml;
