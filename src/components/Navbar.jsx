import React from 'react'
import { Menu } from 'semantic-ui-react';
import { logo } from '../constants/constant';
import { Link } from 'react-router-dom';
import CartButton from '../pages/CartButton';
import Userlog from '../LoginPage/Userlog';

const Navbar = () => {
  return (
 <>

 <Menu borderless fixed='top'>
    <Menu.Item>
        <img src={logo} alt ="logo" style={{width:50}}/>
    </Menu.Item>
    <Menu.Item name ="Home" as={Link} to="/homepage"/>
    <Menu.Item name ="Recipe"as={Link} to="/recipes"/>
    <Menu.Menu position='right'>
          <Menu.Item>
            <CartButton />
          </Menu.Item>
          <Menu.Item>
            <Userlog/>
          </Menu.Item>
        </Menu.Menu>
 </Menu>
 
 </>
  )
}

export default Navbar