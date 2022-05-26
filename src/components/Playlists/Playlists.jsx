import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import './Playlists.css'

const Playlists = () => {

  const {setActiveNavbar} = useContext(GlobalContext)

  return (
    <div className='playlistContainer'>
        <h2 className='h2'>Playlist</h2>
        <div className='linkContainer'>
            <NavLink onClick={()=> setActiveNavbar(false)} to='/' className='link'>Metal</NavLink>
            <NavLink onClick={()=> setActiveNavbar(false)} to='/' className='link'>Para bailar</NavLink>
            <NavLink onClick={()=> setActiveNavbar(false)} to='/' className='link'>Rock 90s</NavLink>
            <NavLink onClick={()=> setActiveNavbar(false)} to='/' className='link'>Baladas</NavLink>
        </div>
    </div>
  )
}

export default Playlists