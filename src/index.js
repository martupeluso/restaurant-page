import "./styles.css";
import loadHome from "./home";
import loadMenu from "./menu";

export const div = document.getElementById("content");

const homeButton = document.querySelector("button:first-of-type");
homeButton.classList.add("current-page-btn");

const menuButton = document.querySelector("button:nth-of-type(2)");

loadHome();

homeButton.addEventListener("click", () => {
  div.textContent = "";
  menuButton.classList.remove("current-page-btn");
  homeButton.classList.add("current-page-btn");
  loadHome();
})

menuButton.addEventListener("click", () => {
  div.textContent = "";
  homeButton.classList.remove("current-page-btn");
  menuButton.classList.add("current-page-btn");
  loadMenu();
})