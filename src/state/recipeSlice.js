// // reducers/recipeSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   personalRecipes: [],
// };

// const recipeSlice = createSlice({
//   name: "recipes",
//   initialState,
//   reducers: {
//     addRecipe: (state, action) => {
//       const newRecipe = action.payload;
//       state.personalRecipes = [...state.personalRecipes, newRecipe];
//     },
//     removeRecipe: (state, action) => {
//       console.log(action.payload)
//       state.personalRecipes = state.personalRecipes.filter(
//         (recipe) => recipe.id !== action.payload
        
//       );
      
//     },
  
//   },
// });

// export const { addRecipe, removeRecipe } = recipeSlice.actions;
// export default recipeSlice.reducer;

// reducers/recipeSlice.js

// both the functions works the same creating slice of the recipes


 import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalRecipes: [],
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addRecipe: (state, action) => {
      state.personalRecipes.push(action.payload);
    },
    removeRecipe: (state, action) => {
      state.personalRecipes = state.personalRecipes.filter(
        (recipe) => recipe.id !== action.payload
      );
    },
  },
});

export const { addRecipe, removeRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
