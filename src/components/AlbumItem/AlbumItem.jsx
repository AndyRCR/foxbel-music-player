import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react'
import './AlbumItem.css'
import { GlobalContext } from '../../context/GlobalStateContext'

const AlbumItem = ({album, index}) => {

  const {setIsPlaying, setSongIndex} = useContext(GlobalContext)

  const playSong = () =>{
    setIsPlaying(true)
    setSongIndex(index)
  }
  return (
    <div className='albumItemContainer'>
      <div className='playIconContainer' style={{backgroundImage: `url(${album.album.cover_medium})`}}>
        <FontAwesomeIcon onClick={playSong} style={{cursor: 'pointer'}} icon={faPlay}/>
      </div>
      <div className='songName'>
        {album.title} - {album.album.title}
      </div>
      <div className='artistName'>
        {album.artist.name}
      </div>
    </div>
  )
}

export default AlbumItem