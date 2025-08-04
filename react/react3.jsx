import { createRoot } from "react-dom/client";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

const reactElement = <h1>Hello from JSX</h1>;

console.log(reactElement);

root.render(reactElement);
