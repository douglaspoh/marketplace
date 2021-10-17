import React,{useState, useContext} from 'react'
import {cartContext} from '../App';

function Product(props) {
    const {title,price,image,qty} = props;
    const [adding, setAdding] = useState(false);
    const [addqty, setAddQty] = useState('');
    const cartOperations = useContext(cartContext);
    const {cartList, setCartList} = cartOperations;

    const onSubmit = (e) => {
        e.preventDefault();
        const inCart = cartList.find(item => item.title===title)
        if(inCart){
            setCartList(cartList.map(item => item.title===title ? {...item, qtyadded: inCart.qtyadded + Number(addqty)}
                                                                : item
            ))
        } else{
            setCartList([...cartList, {
                                        title: title,
                                        price: price,
                                        qtyadded: Number(addqty)
                                        }]
            )
        }
        setAdding(false)
        setAddQty('')
        console.log(cartList)
    }
    
    return (
        <div className='product'>
            <img src={image} className='small' alt='electronics item'/>
            <div> {title} </div>
            <div> <b> ${price} </b> </div>

            {qty>0 ? <div> 
                      In Stock: {qty} 
                      {!adding ? <button onClick={()=>{setAdding(true)}}>Add to Cart</button> 
                               : <div>
                                  <form onSubmit={onSubmit}>
                                    <input onChange={(e)=>{setAddQty(e.target.value)}} value={addqty}/>
                                    <button type='submit'>Submit</button>
                                    <button onClick={()=>{setAdding(false)}}>Cancel</button>
                                  </form>
                                 </div>
                      }
                     </div> 
                   : <div> Out of Stock </div>   
            }
            
        </div>
    )
}

export default Product

