import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import MyCarousel from './MyCarousel'
import Footer from './Footer'
import Scroll from './Scroll'
import Dailydeal from './Dailydeal'
import SubNavbar from './SubNavbar'

export default function Home() {
  return (
    <div>
    <Navbar/>
    <SubNavbar></SubNavbar>
    <MyCarousel></MyCarousel>
    <Scroll></Scroll>
    <Dailydeal></Dailydeal>
    <Footer></Footer>
    </div>
  )
}
