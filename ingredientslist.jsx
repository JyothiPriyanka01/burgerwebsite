import React from "react";

const IngredientsList = ({ ingredients, onSelectIngredient }) => {
  return (
    <ul>
      {ingredients.map((ingredient) => (
        <li key={ingredient.name}>
          <button
            onClick={() => onSelectIngredient(ingredient.name)}
            disabled={ingredient.stock === 0}
          >
            {ingredient.name} (${ingredient.price}) - Stock: {ingredient.stock}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientsList;

