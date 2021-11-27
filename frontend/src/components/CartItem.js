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

    const minus = (id,qty) => {
        cart.minus(id,qty)
        fetch('http://localhost:3001/updatequantity', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                newqty: supply + 1
            })
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    }

    const remove = (id) => {
        cart.remove(id)
        fetch('http://localhost:3001/updatequantity', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                newqty: supply + qty
            })
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    }
    
    return (
        <div className='cartitem'>
            <img className='tiny' src={image} alt={title}/>
            <div>{title}</div>
            <div className='qty'> x{qty} </div>
            <button onClick={()=>minus(id,qty)} className='cartbutton'>-</button>
            <button onClick={()=>add(id)} className='cartbutton'>+</button>
            <button onClick={()=>remove(id)} className='cartbutton'>Remove from cart</button>
            <div className='right'>${price*qty}</div>
        </div>
    )
}

export default CartItem
