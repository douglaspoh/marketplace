import React,{useState, useContext} from 'react'
import cartContext from '../App';

function Product(props) {
    const {title,price,image,qty} = props;
    const [adding, setAdding] = useState(false);
    const [addqty, setAddQty] = useState(null);
    const cartOperations = useContext(cartContext);

    return (
        <div className='product'>
            <img src={image} className='small' alt='electronics item'/>
            <div> {title} </div>
            <div> <b> ${price} </b> </div>

            {qty>0 ? <div> 
                      In Stock: {qty} 
                      {!adding ? <button onClick={()=>{setAdding(true)}}>Add to Cart</button> 
                              : <div>
                                  <form onSubmit={()=>{setAdding(false); setAddQty(null)}}>
                                    <input onChange={(e)=>{setAddQty(e.target.value)}} value={addqty}/>
                                    <button type='submit'>Submit</button>
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

