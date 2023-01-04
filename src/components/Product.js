import React from 'react';
// import { useState } from 'react';

export default function Product(props) {
    const { product, onAdd } = props;
  return (
    <div>
        <li>
            <div className='plate'>
                <img src={product.image} alt={product.alt} className='plate'/>
            </div>
            <div className="content">
                <p className="menu-item">{product.name}</p>
                <p className="price">${product.price.toFixed(2)}</p>
                <button onClick={() => onAdd(product)} class="add">ADD TO CART</button>
            </div>
        </li>  
    </div>
  )
}


