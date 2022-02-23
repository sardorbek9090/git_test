import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/navbar.css'
import { useAuth } from '../Auth';



function Navbar(props) {
// active clasiga stil yozamiz
const navLinkStyles=({isActive})=>{
return{
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? 'green' : 'white'
}
}
const auth = useAuth()
  
    return (
        <nav className='menu'>
            <NavLink style={navLinkStyles} to='/'>Home</NavLink>
            <NavLink style={navLinkStyles}  to='/about'>About</NavLink>
            <NavLink style={navLinkStyles}  to='/news'>News</NavLink>
            <NavLink style={navLinkStyles}  to='/products'>Products</NavLink>
            <NavLink style={navLinkStyles}  to='/users'>Users</NavLink>
            <NavLink style={navLinkStyles}  to='/profile'>Profile</NavLink>
            <NavLink style={navLinkStyles}  to='/counterreducer'>useReducer</NavLink>
            <NavLink style={navLinkStyles}  to='/fetchdata'>FetchData</NavLink>
            <NavLink style={navLinkStyles}  to='/fetchdata2'>FetchData2</NavLink>
            {!auth.user &&(
                <NavLink style={navLinkStyles}  to='/login'>Login</NavLink>
            )}
        </nav>
    );
}

export default Navbar;