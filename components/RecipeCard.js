import React, { useState } from 'react';

const RecipeCard = ({ recipe }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="recipe-card-container">
      <div className={`recipe-card ${expanded ? 'expanded' : ''}`} onClick={toggleExpand}>
        <img src={recipe.image} alt={recipe.title} />
        <h3>{recipe.title}</h3>
        {expanded && (
          <div className="recipe-details">
            <h4>Ingredients:</h4>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            <h4>Instructions:</h4>
            <ol>
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
