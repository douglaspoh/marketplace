import React, {useContext} from 'react'
import { cartContext } from '../App'

function CartItem(props) {
    const {title, qty, price, id} = props;
    const cart = useContext(cartContext);

    return (
        <div>
            {title} x{qty} 
            <button onClick={()=>cart.minus(id, qty)}>-</button>
            <button onClick={()=>cart.add(id)}>+</button>
            <button onClick={()=>cart.remove(id)}>Remove from cart</button>
            ${price*qty}
        </div>
    )
}

export default CartItem
