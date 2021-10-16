import React from 'react'
import {NavLink} from 'react-router-dom';
import cartlogo from '../img/cart.png';

function NavBar() {
    return (
        <div className='navbar'>
            <NavLink to='/' exact={true} className='title'  style={{textDecoration:'none'}}> <b>Real Shopee</b> </NavLink>
            <div className='navright'>
                <NavLink to='/login' className='navitem' activeStyle={{fontWeight:'bold',color:'red'}} style={{textDecoration:'none'}}>Login</NavLink>
                <div className='navitem'>|</div>
                <NavLink to='/register' className='navitem' activeStyle={{fontWeight:'bold',color:'red'}} style={{textDecoration:'none'}}>Register</NavLink> 
                <NavLink to='/cart' exact={true} className='navitem navcart' activeStyle={{fontWeight:'bold',color:'red'}} style={{textDecoration:'none'}}>
                    <img src={cartlogo} className='navcart' alt='cartpic'/>
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar
