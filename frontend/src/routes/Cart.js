import React, {useContext} from 'react'
import {cartContext} from '../App';
import CartItem from '../components/CartItem';

function Cart() {
    const cart = useContext(cartContext);
    const {cartList} = cart
    return (
        <div>
            {cartList.map(item => 
                <CartItem key={item.id}/>
            )}
        </div>
    )
}

export default Cart
