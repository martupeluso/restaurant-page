import { div } from "./index.js";

const drinks = [
  {
    name: "Coffee *",
    info: "All the classic options (+ blended)."
  },
  {
    name: "Tea *",
    info: "Black, green, and herbal."
  },
  {
    name: "Chocolate *",
  },
  {
    name: "Lemonade",
  },
  {
    name: "Water",
    info: "Still or sparkling.",
  }
];

const food = [
  {
    name: "Pastries",
    info: "Croissants and cookies.",
  },
  {
    name: "Cakes",
    info: "Cheesecake, chocolate and red velvet.",
  },
  {
    name: "Savory",
    info: "Bagels and toasts."
  }
]

function loadMenu(){
  div.className = "menu";

  const menuSection = document.createElement("div");
  menuSection.className = "menu-section";

  // DRINKS

  const drinksSection = document.createElement("div");

  const drinksTitle = document.createElement("h2");
  drinksTitle.textContent = "Drinks";

  const drinksList = document.createElement("ul");
  drinks.forEach(option => {
    const drinkChoice = document.createElement("li");
    drinkChoice.textContent = option.name;

    if (option.info){
      const drinkInfo = document.createElement("p");
      drinkInfo.textContent = option.info;

      drinkChoice.appendChild(drinkInfo)
    }

    drinksList.appendChild(drinkChoice);
  });

  drinksSection.append(drinksTitle, drinksList);

  // FOOD

  const foodSection = document.createElement("div");
  foodSection.className = "food-section";

  const foodTitle = document.createElement("h2");
  foodTitle.textContent = "Food";

  const foodList = document.createElement("ul");
  food.forEach(option => {
    const foodChoice = document.createElement("li");
    foodChoice.textContent = option.name;

    if (option.info){
      const foodInfo = document.createElement("p");
      foodInfo.textContent = option.info;

      foodChoice.appendChild(foodInfo);
    }

    foodList.appendChild(foodChoice);
  });

  foodSection.append(foodTitle, foodList);

  menuSection.append(drinksSection, foodSection);

  // FOOTNOTE

  const menuFootnote = document.createElement("p");
  menuFootnote.className = "menu-footnote";
  menuFootnote.textContent = "* Available hot or iced.";

  div.append(menuSection, menuFootnote);
}

export default loadMenu;