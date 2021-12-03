import React, {useContext, useEffect} from 'react'
import {cartContext, authContext} from '../App';
import CartItem from '../components/CartItem';

function Cart() {
    const cart = useContext(cartContext);
    const auth = useContext(authContext);
    const {cartList, setCartList} = cart

    const checkout = () => {
        setCartList([])
    }
    
    useEffect( () => {
        fetch('http://localhost:3001/storecart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: auth.user.email,
                cartlist: cartList
            })
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }, [cartList, auth.user.email])

    return (
        <div className='cartpage'>
            {cartList.length ? <div>
                                    {cartList.map(item => 
                                        <CartItem key={item.id} id ={item.id} title={item.title} qty={item.qtyadded} price={item.price} image={item.image}/>
                                    )}
                                    <hr/>
                                    <b>Total:</b> ${(cartList.reduce((a,b) => {
                                        return a + b.price*b.qtyadded
                                    }, 0)).toFixed(2)}
                                    <button onClick={()=>checkout()} className='checkout'>Check Out</button>
                                </div>
                             : <div className='emptycart'>Cart is empty</div> 
                             
            }
        </div>
    )
}

export default Cart
