import React from 'react'
import Product from './Product';
import handcuff from '../assets/images/handcuff.gif';

export default function Main(props) {
    const { products, onAdd } = props;
  return (
    <div className='panel'>
      <h1 className='fits'>
        FITS
      <img src={handcuff} alt="cart-gif" className='fit-gif'></img> 
      </h1>
      <ul className='menu'>
        {products.map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </ul>
    </div>
  )
}
