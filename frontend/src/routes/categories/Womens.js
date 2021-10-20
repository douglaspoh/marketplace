import React, {useState, useEffect} from 'react';
import Product from '../../components/Product';

function Womens() {
    const [womens,setWomens] = useState([]);
    
    const fetchWomens = () => {
        fetch('http://localhost:3001/products', {
            method: 'GET'
        })
        .then(res => {
            if(!res.ok){
                throw new Error('Could not fetch data')
            }
            return res.json();
        })
        .then(data => {
            const womensdata = data.filter(item => item.category_id===4)
            setWomens(womensdata)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(()=>{
        fetchWomens()
    }, [])
    
    return (
        <div className='products'>
            {womens.map(item =>
                <Product key={item.id} name={item.name} title={item.title} image={item.image} qty={item.qty} price={item.price}/>
            )}
        </div>
    )
}

export default Womens
