// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))

// root.render(
//     <h1>Hello, React!</h1>
// )

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element (createElement)
- Give it some textContent
- Give it a class name of "header"
- append it as a child (using `appendChild`) of the div#root

Don't use innerHTML to accomplish any of this.
    
*/

// Manual Imperative Coding

let headingOne = document.createElement("h1");
headingOne.textContent = "Hello, React!";
headingOne.className = "header";
const root = document.getElementById("root");
root.appendChild(headingOne);

/* Think of this as getting a table at a restaraunt and having to say to the host:

Walk me down the hallway 50 steps,
turn right, 
walk 20 more steps, 
sit me at the boom on the right please. 

in comparison to Declarative:

Table for 4 please and trusting the host to do their job.
*/
