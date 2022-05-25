import React from 'react'
import { NavLink } from 'react-router-dom'
import './Playlists.css'

const Playlists = () => {
  return (
    <div className='playlistContainer'>
        <h2 className='h2'>Playlist</h2>
        <div className='linkContainer'>
            <NavLink to='/' className='link'>Metal</NavLink>
            <NavLink to='/' className='link'>Para bailar</NavLink>
            <NavLink to='/' className='link'>Rock 90s</NavLink>
            <NavLink to='/' className='link'>Baladas</NavLink>
        </div>
    </div>
  )
}

export default Playlists