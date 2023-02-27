const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector("#ingredients");

const arrayItems = [];

ingredients.forEach(ingredient => {

const ingredientLi = document.createElement("li");


ingredientLi.textContent = ingredient;
ingredientLi.classList.add("item");
arrayItems.push(ingredientLi);
});




listIngredients.append(...arrayItems);
