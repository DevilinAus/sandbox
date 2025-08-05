import { createElement } from "react";
import { createRoot } from "react-dom/client";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

const reactElement = createElement("h1", null, "Hello from createElement!");
console.log(reactElement);

root.render(reactElement);

// This isn't widely used today - more of a history lesson of how we got to modern react.
