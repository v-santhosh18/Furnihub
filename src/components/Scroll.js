import React from 'react';
import Scrollview from './Scrollview';
import './Scroll.css';
import card4 from '../assets/card4.png'
import card5 from '../assets/card5.png'
import card8 from '../assets/card8.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import bean from '../assets/bean.jpg'
import decor from '../assets/decor.jpg'
import kids from '../assets/kids.jpg'
import outdoor from '../assets/outdoor.jpg'
import wardobe from '../assets/wardobe.jpg'

export default function Scroll() {
  const products = [
    { productName: 'Product 1', price: '₹50', image: card4 },
    { productName: 'Product 2', price: '₹40', image: card5 },
    { productName: 'Product 3', price: '₹60', image: card8 },
    { productName: 'Product 4', price: '₹80', image: card2 },
    { productName: 'Product 5', price: '₹20', image: outdoor },
  ];
  const products1 = [
    { productName: 'Product 1', price: '₹50', image: card3 },
    { productName: 'Product 2', price: '₹40', image:  bean},
    { productName: 'Product 3', price: '₹75', image: decor},
    { productName: 'Product 4', price: '₹89', image: kids },
    { productName: 'Product 5', price: '₹69', image: wardobe},
  
   
  ];

  return (
    <div className='main-scroll'>
      <h1>TOP SELLER</h1>
      <div className='scrollmenu'>
        {products.map((product, index) => (
          <div className='ScrollProduct' key={index}>
            <Scrollview {...product} />
          </div>
        ))}
      </div>
      <h1>NEW LAUNCHES</h1>
      <div className='scrollmenu'>
        {products1.map((product, index) => (
          <div className='ScrollProduct' key={index}>
            <Scrollview {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}
