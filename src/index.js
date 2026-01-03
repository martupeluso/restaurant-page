import "./styles.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

export const div = document.getElementById("content");

const homeButton = document.querySelector("button:first-of-type");
homeButton.classList.add("current-page-btn");

const menuButton = document.querySelector("button:nth-of-type(2)");

const aboutButton = document.querySelector("button:last-of-type");

loadHome();

homeButton.addEventListener("click", () => {
  div.textContent = "";
  menuButton.classList.remove("current-page-btn");
  aboutButton.classList.remove("current-page-btn");
  homeButton.classList.add("current-page-btn");
  loadHome();
})

menuButton.addEventListener("click", () => {
  div.textContent = "";
  homeButton.classList.remove("current-page-btn");
  aboutButton.classList.remove("current-page-btn");
  menuButton.classList.add("current-page-btn");
  loadMenu();
})

aboutButton.addEventListener("click", () => {
  div.textContent = "";
  homeButton.classList.remove("current-page-btn");
  menuButton.classList.remove("current-page-btn");
  aboutButton.classList.add("current-page-btn");
  loadAbout();
})