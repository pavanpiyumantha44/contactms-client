import React from 'react'
import Navbar from '../components/Navbar'
import '../assets/CSS/dashboard.css'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <div className='dashboard'>
        <div className="sidebar-container">
            <h1>Side bar</h1>
            <Sidebar/>
        </div>
        <div className="content-container">
            <Outlet/>
        </div>
    </div>
    </>
  )
}

export default Dashboard