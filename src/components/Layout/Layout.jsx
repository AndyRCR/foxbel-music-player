import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import SongBar from '../SongBar/SongBar'
import './Layout.css'

const Layout = () => {
  return (
    <div className='generalContainer'>
        <div className='navOutletContainer'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
        <SongBar></SongBar>
    </div>
  )
}

export default Layout