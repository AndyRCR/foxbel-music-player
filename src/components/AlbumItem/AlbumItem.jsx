import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useEffect, useState } from 'react'
import './AlbumItem.css'
import { GlobalContext } from '../../context/GlobalStateContext'

const AlbumItem = ({album, index}) => {

  const {setIsPlaying, setSongIndex} = useContext(GlobalContext)
  const [hover, setHover] = useState(false)

  const hoverStyle = {backgroundImage:  `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${album.album.cover_medium})`}
  const notHoverStyle = {backgroundImage:  `url(${album.album.cover_medium})`}

  const playSong = () =>{
    setIsPlaying(true)
    setSongIndex(index)
  }

  useEffect(()=>{}, [hover])

  return (
    <div className='albumItemContainer'>
      <div className='playIconContainer'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style= {hover ? hoverStyle : notHoverStyle}>
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