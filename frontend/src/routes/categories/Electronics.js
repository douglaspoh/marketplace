import React,{useState, useEffect} from 'react'
import Product from '../../components/Product';

function Electronics() {
    const [electronics, setElectronics] = useState([])

    const fetchelectronics = () => {
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
            const electronicsdata = data.filter(item=>item.category_id===1)
            setElectronics(electronicsdata)
        })
    }
    
    useEffect(()=>{
        fetchelectronics()
    }, [])

    return (
        <div className='products'>
            <Product/>
        </div>
    )
}

export default Electronics
