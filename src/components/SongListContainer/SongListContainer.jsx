import React from 'react'
import ListContainer from '../ListContainer/ListContainer'
import SearchBar from '../SearchBar/SearchBar'
import User from '../User/User'
import './SongListContainer.css'

const SongListContainer = () => {
  return (
    <div className='songListContainer'>
        <div className='upperNavBarContainer'>
          <SearchBar/>
          <User/>
        </div>
        <ListContainer/>
    </div>
  )
}

export default SongListContainer