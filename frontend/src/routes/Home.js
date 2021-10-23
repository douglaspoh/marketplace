import React,{useState, useEffect} from 'react'
import Category from '../components/Category';

function Home() {
    const [categories, setCategories] = useState([]);

    const fetchcategories = () => {
        fetch('http://localhost:3001/categories', { 
            method: 'GET' 
        })
        .then(response=>{
            if(!response.ok){
                throw new Error('Error cannot fetch category data')
            }
            return response.json()
        })
        .then(data=>{
            setCategories(data)
        })
        .catch(err =>
            console.log(err)
        )
    }
    
    useEffect(()=>{
        fetchcategories()
    }, []);

    return (
        <div className='main'>
            {categories.map(cat =>
                <Category key={cat.id} name={cat.name} description={cat.description} image={cat.image}/>
            )}
        </div>
    )
}

export default Home
