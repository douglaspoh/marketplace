import React, {useState, useEffect} from 'react'
import Product from '../../components/Product';

function Electronics() {
    const [electronics, setElectronics] = useState([]);
    
    const fetchElectronics = () => {
        fetch('http://localhost:3001/products', {
            method: 'GET'
        })
        .then(res => {
            if(!res.ok){
                throw new Error ('Could not fetch data')
            }
            return res.json()
        })
        .then(data => {
            const electronicsdata = data.filter(item=>item.category_id===1)
            setElectronics(electronicsdata)
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    useEffect(()=>{
        fetchElectronics()
    }, [])

    return (
        <div className='products'>
            {electronics.map(item =>
                <Product key={item.id} title={item.title} price={item.price} image={item.image} qty={item.qty}/>
            )}
        </div>
    )
}

export default Electronics
