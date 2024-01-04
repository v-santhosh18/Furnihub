import React from 'react';
import './Scrollview.css';

export default function Scrollview({ productName, price, offer, image }) {
  return (
    <div className='scroll-container'>
      <div className='scroll-img'>
        <img src={image} alt={productName}></img>
      </div>
      <div className='name-container'>{productName}</div>

      <div className='price-container'>{price}</div>
      <div className='addcart-container'>
        <button>ADD TO CART</button>
      </div>
    </div>
  );
}
