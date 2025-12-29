import { div } from "./index.js";
import HomeImage from "./assets/images/home.jpg";

function loadHome(){
  div.style.backgroundImage = `url(${HomeImage})`;
  div.classList.add("overlay");
  div.style.backgroundSize = "cover";
  div.style.backgroundPosition = "center";
}

export default loadHome;