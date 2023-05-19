/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Toys = ({toy}) => {
   const {name,img,price,rating,_id} = toy
    return (
        <div className='w-full p-4'>
            <img className='h-[250px]' src={img} alt="" />
            <p>Toy Name: {name}</p>
            <p>Price: ${price}</p>
            <p>Rating: {rating}</p>
            <Link to={`/alltoys/${_id}`}>
            <button className='btn btn-outline btn-primary'>View-Details</button>
            </Link>
        </div>
    );
};

export default Toys;