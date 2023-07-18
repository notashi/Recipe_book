// CartButton.js
// import "../components/All.css"
import React from "react";
import { connect } from "react-redux";

// this button twill save ths recipes in it 
const CartButton = ({ personalRecipes }) => {
  return (
    <div className="saved-recipes-container">
    <h2 >Saved Recipes</h2>
    <ul>
      {personalRecipes.map((recipe) => (
        <li key={recipe.id}>{recipe.title}</li>
      ))}
    </ul>
  </div>
);
};

const mapStateToProps = (state) => {
  return {
    personalRecipes: state.recipes.personalRecipes,
  };
};

export default connect(mapStateToProps)(CartButton);
