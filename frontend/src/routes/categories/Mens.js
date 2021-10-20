import React, {useState, useEffect} from 'react'
import Product from '../../components/Product';

function Mens() {
    const [mens, setMens] = useState([]);

    const fetchMens = () => {
        fetch("http://localhost:3001/products", {
            method: 'GET'
        })
        .then(res => {
            if(!res.ok){
                throw new Error ('Could not fetch data');
            }
            return res.json()
        })
        .then(data => {
            const mensdata = data.filter(item => item.category_id===3)
            setMens(mensdata)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(()=>{
        fetchMens()
    }, [])
    
    return (
        <div className='products'>
            {mens.map(item =>
                <Product key={item.id} name={item.name} title={item.title} image={item.image} qty={item.qty} price={item.price}/>
            )}
        </div>
    )
}

export default Mens
