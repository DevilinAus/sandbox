/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding more styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="react-logo.png"` in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

import { createRoot } from "react-dom/client";
const root = React.createRoot(document.getElementById("root"));

const listItems = [
  React.createElement("li", null, "Was first released in 2013"),
  React.createElement("li", null, "Was originally created by Jordan Walke"),
  React.createElement("li", null, "Has well over 100k stars of GitHub"),
  React.createElement("li", null, "Is maintained by Meta"),
  React.createElement(
    "li",
    null,
    "Powers thousands of enterprise apps, including mobile apps"
  ),
];

let imageElement = React.createElement("img", {
  className: "logo",
  src: "react-logo.png",
  width: "40px",
});

let heading = React.createElement("h1", null, "Fun facts about React");
let paragraph = React.createElement("ol", null, listItems);

const container = React.createElement("div", null, [
  imageElement,
  heading,
  paragraph,
]);

root.render(container);
