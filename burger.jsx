import React from "react";

const BurgerPreview = ({ selectedIngredients }) => {
  return (
    <div>
      {selectedIngredients.length === 0 ? (
        <p>Your burger is empty. Add ingredients!</p>
      ) : (
        selectedIngredients.map((ingredient, index) => (
          <div key={index}>{ingredient.name}</div>
        ))
      )}
    </div>
  );
};

export default BurgerPreview;
