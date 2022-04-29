import { Ingredients } from "../interfaces/product";

const getIngredients = (ingredients: Ingredients) => {
  const keys = Object.keys(ingredients);

  return `ingredients: ${keys.join(", ")}`;
};

export default getIngredients;
