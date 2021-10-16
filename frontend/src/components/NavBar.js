import React from 'react'
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <div className='navbar'>
            <div className='title'> <b>Digital Marketplace</b> </div>
            <div>
            <NavLink to='/' exact={true} className='navitem' activeStyle={{fontWeight:'bold',color:'red'}} style={{textDecoration:'none'}}>Home</NavLink>
            <NavLink to='/login' className='navitem' activeStyle={{fontWeight:'bold',color:'red'}} style={{textDecoration:'none'}}>Login</NavLink>
            <NavLink to='/register' className='navitem' activeStyle={{fontWeight:'bold',color:'red'}} style={{textDecoration:'none'}}>Register</NavLink>
            <NavLink to='/cart' exact={true} className='navitem' activeStyle={{fontWeight:'bold',color:'red'}} style={{textDecoration:'none'}}>Cart</NavLink>
            </div>
        </div>
    )
}

export default NavBar
