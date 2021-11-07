import React, {useState, useContext} from 'react'
import { cartContext } from '../App'

function CartItem(props) {
    const {title, price, id, image, qty} = props;
    const [supply, setSupply] = useState('');
    const cart = useContext(cartContext);

    fetch('http://localhost:3001/products',{
        method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
        const item = data.filter(item => item.id===id)
        setSupply(item[0].qty)
    })

    const add = (id) => {
        cart.add(id)
        fetch('http://localhost:3001/updatequantity', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                newqty: supply - 1
            })
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <img className='tiny' src={image} alt={title}/>
            {title} x{qty} 
            <button onClick={()=>cart.minus(id, qty)}>-</button>
            <button onClick={()=>add(id)}>+</button>
            <button onClick={()=>cart.remove(id)}>Remove from cart</button>
            ${price*qty}
        </div>
    )
}

export default CartItem
