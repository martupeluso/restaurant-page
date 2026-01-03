import { div } from "./index.js";

function loadAbout(){
  div.className = "about";

  const aboutTitle = document.createElement("h2");
  aboutTitle.textContent = "What we do";

  const infoContainer = document.createElement("div");
  infoContainer.className = "info-container";

  const aboutInfo1 = document.createElement("p");
  aboutInfo1.textContent = "Catty is a cat-themed café where guests can enjoy drinks and food while being able to interact with the cutest resident cats."

  const aboutInfo2 = document.createElement("p");
  aboutInfo2.textContent = "We are also an adoption center, so any cat you meet here is a potential new friend for you! What are you waiting for?"

  infoContainer.append(aboutInfo1, aboutInfo2);

  const linksContainer = document.createElement("div");

  const meetLink = document.createElement("a");
  meetLink.textContent = "Meet our residents";
  meetLink.href = "#";

  const bookLink = document.createElement("a");
  bookLink.textContent = "Book now";
  bookLink.href = "#";

  linksContainer.append(meetLink, bookLink);

  div.append(aboutTitle, infoContainer, linksContainer);
}

export default loadAbout;