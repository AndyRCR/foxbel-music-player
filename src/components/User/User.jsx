import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './User.css'

const User = () => {
  return (
    <div className='userContainer'>
      <FontAwesomeIcon style={{margin: '0 12px'}} color='#E86060' icon={faUser} />
      <div className='username'>
        Andy Ruben C.
      </div>
    </div>
  )
}

export default User