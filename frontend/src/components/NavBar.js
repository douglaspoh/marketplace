import React from 'react'
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <div className='navbar'>
            <div className='title'>Digital Marketplace</div>
            <NavLink to='/' exact={true} activeStyle={{fontWeight:'bold',color:'red'}} style={{textDecoration:'none'}}>Home</NavLink>
            <NavLink to='/login' activeStyle={{fontWeight:'bold',color:'red'}} style={{textDecoration:'none'}}>Login</NavLink>
            <NavLink to='/register' activeStyle={{fontWeight:'bold',color:'red'}} style={{textDecoration:'none'}}>Register</NavLink>
            <NavLink to='/cart' exact={true} activeStyle={{fontWeight:'bold',color:'red'}} style={{textDecoration:'none'}}>Cart</NavLink>
        </div>
    )
}

export default NavBar
