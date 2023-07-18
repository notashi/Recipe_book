
import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';

import Homepage from './components/Homepage';
import LoginPage from './LoginPage/Login';
import RegisterPage from './LoginPage/Register';
import Recipes from './pages/Recipes';

//import {ToastContainer} from "react-toastify"
import RecipeDetails from './components/RecipeDetails';
import ProtectedRoutes from './services/ProtectedRoutes';
// import CartButton from "./CartButton";
// import SavedPersonalRecipe from "./pages/SavedRecipes"
// import CartButton from './pages/CartButton';
function App() {
  return (

    <>
    <div className="App">
        
      <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
           {/* Redirect to login page as the default route */}
           <Route path="/" element={<LoginPage />} />
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path="/recipes" element={<Recipes/>}></Route>
        <Route path="/recipes/:recipeId" element={<RecipeDetails/>}></Route>
        <Route path ="/" element={<ProtectedRoutes/>}>
         <Route path='/homepage' element={<Homepage/>}/>
        </Route>
        
      </Routes>
      {/* <Navbar/> */}
      </BrowserRouter>
      
    </div>
    </>

  );
}

export default App;
