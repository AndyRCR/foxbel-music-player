import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import './Menu.css'

const Menu = () => {

  const {setActiveNavbar} = useContext(GlobalContext)

  return (
    <div className='menuContainer'>
        <h2 className='h2'>Mi Librería</h2>
        <div className='navLinkContainer'>
            <NavLink onClick={()=> setActiveNavbar(false)} to='/' className={ ({isActive}) => isActive ? 'activeNavLink' : 'navLink'}>Recientes</NavLink>
            <NavLink onClick={()=> setActiveNavbar(false)} to='/artists' className={ ({isActive}) => isActive ? 'activeNavLink' : 'navLink'}>Artistas</NavLink>
            <NavLink onClick={()=> setActiveNavbar(false)} to='/albums' className={ ({isActive}) => isActive ? 'activeNavLink' : 'navLink'}>Álbums</NavLink>
            <NavLink onClick={()=> setActiveNavbar(false)} to='/songs' className={ ({isActive}) => isActive ? 'activeNavLink' : 'navLink'}>Canciones</NavLink>
            <NavLink onClick={()=> setActiveNavbar(false)} to='/podcasts' className={ ({isActive}) => isActive ? 'activeNavLink' : 'navLink'}>Estaciones</NavLink>
        </div>
    </div>
  )
}

export default Menu