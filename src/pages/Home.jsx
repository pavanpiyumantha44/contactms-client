import React from 'react'
import Navbar from '../components/Navbar'
import '../assets/CSS/home.css'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='home'>
        <h1 className='home-title'>
            CONTACT MANAGEMENT SYSTEM
        </h1>
        <p className='description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, omnis? Atque eos totam illo quod quibusdam voluptatem ipsam sapiente perspiciatis.
        </p>
    </div>
    </>
  )
}

export default Home