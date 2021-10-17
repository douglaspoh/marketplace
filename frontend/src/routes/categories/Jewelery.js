import React, {useState, useEffect} from 'react'
import Product from '../../components/Product';

function Jewelery() {
    const [jewelery, setJewelery] = useState([]);

    const fetchJewelery = () => {
        fetch('http://localhost:3001/products', {
            method: 'GET'
        })
        .then(res => {
            if(!res){
                console.log('Could not fetch data')
            }
            return res.json()
        })
        .then(data => {
            const jewelerydata = data.filter(item => item.category_id===2)
            setJewelery(jewelerydata)
        })
    }
    
    useEffect(()=>{
        fetchJewelery()
    }, [])

    return (
        <div className='products'>
            {jewelery.map(item =>
                <Product key={item.id} title={item.title} description={item.description} price={item.price}/>
            )}
        </div>
    )
}

export default Jewelery
