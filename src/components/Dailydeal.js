import React from 'react'
import './Dailydeal.css'
import deal from '../assets/deal.png'
export default function Dailydeal() {
  return (
    <div className='whole'>
    <div className='whole-main-deal'>
    <p>Welcome to our exclusive Daily Deals section! Dive into a world 
    of incredible discounts on high-quality appliances that change every day.
     From cutting-edge technology to stylish designs, 
     our Daily Deals bring you unbeatable offers on must-have products</p>
     </div>
      <div className='main-deal'>
      <h1>DAILYDEALS</h1>
      <img src={deal} className='img-deal'></img>
      <h1>Biggest Sale Upto 55% Offer</h1>
      <button>View Products</button>
      </div>
    </div>
  )
}
