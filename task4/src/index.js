import "../css/style.css"
import Icon from "../assets/cover-01.png";

const h1 = document.createElement("h1");

h1.textContent= "I love JavaScript";
document.body.append(h1);

const jsImage = document.createElement("img");
jsImage.className = "js-image"
jsImage.src = Icon;
document.body.append(jsImage);