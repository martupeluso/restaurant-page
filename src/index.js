import "./styles.css";
import loadHome from "./home";

export const div = document.getElementById("content");

const homeButton = document.querySelector("button:first-of-type");
homeButton.classList.add("current-page-btn");

loadHome();

homeButton.addEventListener("click", () => {
  homeButton.classList.add("current-page-btn");
  loadHome();
})