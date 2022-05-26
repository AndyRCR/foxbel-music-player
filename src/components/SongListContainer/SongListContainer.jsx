import React from 'react'
import ListContainer from '../ListContainer/ListContainer'
import SearchBar from '../SearchBar/SearchBar'
import User from '../User/User'
import './SongListContainer.css'
import CloseButton from '../CloseButton/CloseButton'

const SongListContainer = () => {

  return (
    <div className='songListContainer'>
        <div className='upperNavBarContainer'>
          <CloseButton/>
          <SearchBar/>
          <User/>
        </div>
        <ListContainer/>
    </div>
  )
}

export default SongListContainer