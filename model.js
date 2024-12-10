const ingredients = [
    { name: "Lettuce", price: 5, stock: 10 },
    { name: "Tomato", price: 7, stock: 15 },
    { name: "Cheese", price: 10, stock: 8 },
    { name: "Bacon", price: 15, stock: 5 },
  ];
  
  export const getIngredients = () => ingredients;
  
  export const updateIngredientStock = (name, quantity) => {
    const ingredient = ingredients.find(ing => ing.name === name);
    if (ingredient && ingredient.stock >= quantity) {
      ingredient.stock -= quantity;
      return ingredient;
    }
    return null;
  };
  
  export const calculateTotalPrice = (selectedIngredients) => {
    return selectedIngredients.reduce((total, ingredient) => total + ingredient.price, 0);
  };
  