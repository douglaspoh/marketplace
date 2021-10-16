import React,{useEffect} from 'react'

function Home() {

    const fetchcategories = (params) => {
        fetch('http://localhost:3001/categories',
        { method: 'POST' })
    }
    
    useEffect(()=>{
        fetchcategories()
    }, []);

    return (
        <div>
            Home
        </div>
    )
}

export default Home
