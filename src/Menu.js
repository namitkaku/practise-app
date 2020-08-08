import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
         <>
         <NavLink exact activeclassName='active_class' to='/'>About Us</NavLink>
         <NavLink exact activeclassName='active_class' to='/contact'>Contact Us</NavLink>
         </>   
    );
}
export default Menu;