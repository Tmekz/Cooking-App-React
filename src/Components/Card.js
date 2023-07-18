import React from "react";

const Card = ({ meale }) => {
  return (
    <div className="meal-card">
      <h2>{meale.strMeal}</h2>
      <p>Origin : {meale.strArea}</p>
      <img src={meale.strMealThumb} alt={"Recette " + meale.strMeal} />
      <p>{meale.strInstructions}</p>
    </div>
  );
};

export default Card;
