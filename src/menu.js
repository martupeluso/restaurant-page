import { div } from "./index.js";

const drinks = [
  {
    name: "Coffee",
    info: "All the classic options (+ blended).",
    footnote: true,
  },
  {
    name: "Tea",
    info: "Black, green, and herbal.",
    footnote: true,
  },
  {
    name: "Chocolate",
    footnote: true,
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
    
    drinkChoice.innerHTML = option.footnote ? `${option.name} ` + "<span>*</span>" : option.name;

    if (option.info){
      const drinkInfo = document.createElement("p");
      drinkInfo.textContent = option.info;

      drinkChoice.appendChild(drinkInfo)
    }

    drinksList.appendChild(drinkChoice);
  });

  // FOOTNOTE

  const menuFootnote = document.createElement("p");
  menuFootnote.className = "menu-footnote";
  menuFootnote.textContent = "* Available hot or iced.";

  drinksSection.append(drinksTitle, drinksList, menuFootnote);

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

  div.append(menuSection);
}

export default loadMenu;