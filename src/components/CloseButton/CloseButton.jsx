import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from '../../context/GlobalStateContext'
import './CloseButton.css'

const CloseButton = () => {

    const {setActiveNavbar} = useContext(GlobalContext)

  return (
    <>
        <div className='menuIconContainer'>
            <FontAwesomeIcon onClick={() => setActiveNavbar(true)} className='menuIcon' icon={faBars}/>
        </div>
    </>
  )
}

export default CloseButton