import { createElement } from "react";
import { createRoot } from "react-dom/client";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

const reactElement = (
  <h1>
    <span></span>
  </h1>
);

console.log(reactElement);

root.render(reactElement);
