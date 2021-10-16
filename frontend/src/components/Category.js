import React from 'react'

function Category(props) {
    const {name, description, image} = props;

    return (
        <div>
            <div> <b>{name}</b> </div>
            <img src={image} className='small' alt={description}/>
            <div> {description} </div>
        </div>
    )
}

export default Category
