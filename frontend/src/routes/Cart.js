import React, {useContext} from 'react'
import {cartContext} from '../App';
import CartItem from '../components/CartItem';

function Cart() {
    const cart = useContext(cartContext);
    const {cartList} = cart
    return (
        <div>
            {cartList.length ? <div>
                                    {cartList.map(item => 
                                        <CartItem key={item.id} id ={item.id} title={item.title} qty={item.qtyadded} price={item.price} image={item.image}/>
                                    )}
                                    <hr/>
                                    <b>Total:</b> ${cartList.reduce((a,b) => {
                                        return a + b.price*b.qtyadded
                                    }, 0)}
                                    <button onClick={()=>{}}>Check Out</button>
                                </div>
                             : <div>Cart is empty</div> 
                             
            }
        </div>
    )
}

export default Cart
