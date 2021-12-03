import React,{useState, useEffect, useContext, useRef} from 'react'
import {cartContext, authContext} from '../App';
import {useHistory} from 'react-router-dom';

function Product(props) {
    const {id, title, price, image} = props;
    const [addqty, setAddQty] = useState(1);
    const [qty, setQty] = useState('')
    const auth = useContext(authContext)
    const cartOperations = useContext(cartContext);
    const {cartList, setCartList} = cartOperations;
    const history = useHistory();
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    fetch('http://localhost:3001/products', {
        method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
        const item = data.filter(item=>item.id===id)
        setQty(item[0].qty)
    })
    .catch(err => console.log(err))
    
    const onCartAdd = (e) => {
        e.preventDefault();   
        if(!auth.user){
            history.push('/login')
        } else{
            const inCart = cartList.find(item => item.title===title)
            if(inCart){
                setCartList(cartList.map(item => item.title===title ? {...item, qtyadded: inCart.qtyadded + Number(addqty)}
                                                                    : item
                ))
            } else{
                setCartList([...cartList, {
                                            title: title,
                                            price: price,
                                            qtyadded: Number(addqty),
                                            id: id,
                                            image: image
                                            }]
                )
            }

            fetch('http://localhost:3001/updatequantity', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id,
                    newqty: qty-addqty
                })
            })
            .then(data=>{
                setQty(qty-addqty)
                setAddQty(1)
                return data.json()
            })
            .then(res=>console.log(cartList))
            .catch(err=>
                console.log(err)
            )

        }
    }
    
    useEffect( ()=> {
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
    }, [cartList])

    const handlechange = (e) => {
        if(e.target.value>0 || e.target.value===''){
            if(e.target.value>qty){
                setAddQty(qty)
            } else{
                setAddQty(e.target.value)
            }
        } else return
    }
    
    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target) && (ref.current.value==='' || ref.current.value<'1') ) {
                    setAddQty(1)
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    
    return (
        <div className='product'>
            <img src={image} className='small' alt='electronics item'/>
            <div> {title} </div>
            <div> <b> ${price} </b> </div>

            {qty>0 ? <div> 
                      In Stock: {qty} 
                      {
                        <div>
                            <button onClick={()=>setAddQty(Math.max(1,Number(addqty)-1))}>-</button>
                            <input type='text' onChange={handlechange} value={addqty} style={{width: '2rem'}} ref={wrapperRef}/>
                            <button onClick={()=>setAddQty(Number(addqty)+1)}>+</button>
                            <button onClick={onCartAdd}>Add to Cart</button>
                        </div>
                      }
                     </div> 
                   : <div> Out of Stock </div>   
            }
            
        </div>
    )
}

export default Product

