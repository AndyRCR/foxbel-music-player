import React, { useContext, useEffect } from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'
import foxBelLogo from '../../assets/foxbel-music@2x.png'
import foxBelLogo_sm from '../../assets/foxbel-music-icon@3x.png'
import Menu from '../Menu/Menu'
import Playlists from '../Playlists/Playlists'
import { GlobalContext } from '../../context/GlobalStateContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = () => {

  const {activeNavbar, setActiveNavbar} = useContext(GlobalContext)

  useEffect(() => {}, [activeNavbar])
  
  return (
    <div className={ !activeNavbar ? 'navBarContainer' : 'navBarContainer activeNavBarContainer'}>
        <div className='closeIconContainer' onClick={()=> setActiveNavbar(false)} >
          <FontAwesomeIcon className='closeIcon' icon={faXmark}/>
        </div>
        <div className='imgContainer'>
            <img className='logoSm' alt='foxbel icon' src={foxBelLogo_sm}/>
            <img className='logo' alt='foxBel logo' src={foxBelLogo}/>
        </div>
        <Menu/>
        <Playlists/>
    </div>
  )
}

export default NavBar