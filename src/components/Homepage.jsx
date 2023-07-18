import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
 import "./All.css"



const Homepage = () => {
  const navigate = useNavigate();
  const handleLogout =()=>{
    localStorage.removeItem("loggedin")
    navigate("/login")
  }

  
  return (
    <>
    { <Navbar/> }
    <Header title= "Recipes" bgClass="bg-image ">
      
    <Button 
        content= "SEARCH RECIPES" 
        primary
        as={Link}
        to="/recipes"
        size='big'/>
        <Button
        content ="LOGOUT"
        inverted color='red'
        type='button'
        onClick={handleLogout}
        />
        


        </Header>
       
    </>
  )
}

export  default Homepage;