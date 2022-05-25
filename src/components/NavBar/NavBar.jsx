import React from 'react'
import './NavBar.css'
import foxBelLogo from '../../assets/foxbel-music@2x.png'
import Menu from '../Menu/Menu'
import Playlists from '../Playlists/Playlists'

const NavBar = () => {
  return (
    <div className='navBarContainer'>
        <div className='imgContainer'>
            <img alt='' src={foxBelLogo}/>
        </div>
        <Menu/>
        <Playlists/>
    </div>
  )
}

export default NavBar