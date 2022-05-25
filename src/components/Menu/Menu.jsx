import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

const Menu = () => {
  return (
    <div className='menuContainer'>
        <h2 className='h2'>Mi Librería</h2>
        <div className='navLinkContainer'>
            <NavLink to='/' className={ ({isActive}) => isActive ? 'activeNavLink' : 'navLink'}>Recientes</NavLink>
            <NavLink to='/artists' className={ ({isActive}) => isActive ? 'activeNavLink' : 'navLink'}>Artistas</NavLink>
            <NavLink to='/albums' className={ ({isActive}) => isActive ? 'activeNavLink' : 'navLink'}>Álbums</NavLink>
            <NavLink to='/songs' className={ ({isActive}) => isActive ? 'activeNavLink' : 'navLink'}>Canciones</NavLink>
            <NavLink to='/podcasts' className={ ({isActive}) => isActive ? 'activeNavLink' : 'navLink'}>Estaciones</NavLink>
        </div>
    </div>
  )
}

export default Menu