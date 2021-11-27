import React from 'react'
import {NavLink} from 'react-router-dom';

function Category(props) {
    const {name, description, image} = props;

    return (
        <div className='catitem'>
            <div> <b>{name}</b> </div>
            <NavLink to={`/${name}`}> <img src={image} className='large' alt={description}/> </NavLink>
            <div className='description'> {description} </div>
        </div>
    )
}

export default Category
