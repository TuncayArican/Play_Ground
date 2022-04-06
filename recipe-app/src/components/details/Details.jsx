import React from 'react';
import { useLocation } from "react-router-dom";



const Details = () => {
    const location = useLocation();

    const recipe = location.state.recipe;

  return (
    <div>
      <h1>{recipe.label}</h1>
    </div>
  );
}

export default Details