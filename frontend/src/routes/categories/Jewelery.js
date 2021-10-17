import React, {useState, useEffect} from 'react'

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
            Jewelery
        </div>
    )
}

export default Jewelery
