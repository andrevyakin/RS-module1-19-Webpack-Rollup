import "./index.css";
import logo from "./assets/cover-01.png";

console.log("Hello World!");

const h1 = document.createElement("h1");

h1.textContent= "I love JavaScript";
document.body.append(h1);

const jsImage = document.createElement("img");
jsImage.className = "js-image"
jsImage.src = logo;
document.body.append(jsImage);
