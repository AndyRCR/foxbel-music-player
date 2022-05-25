import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import Controls from '../Controls/Controls'
import Volume from '../Volume/Volume'
import './SongBar.css'

const SongBar = () => {
  const {songList, songIndex} = useContext(GlobalContext)

  useEffect(() => {}, [songIndex])

  return (
    <div className='songBarContainer'>
        <div className='actualSong'>
          {songList != null && (
            <>
              <img alt='' src={songList.data[songIndex].album.cover_small}/>
              <div className='actualSongInfo'>
                <p className='songName'>{songList.data[songIndex].title}</p>
                <p className='artistName'>{songList.data[songIndex].artist.name} - {songList.data[songIndex].album.title}</p>
              </div>
            </>
          )}
        </div>

        <Controls></Controls>
        <Volume></Volume>
    </div>
  )
}

export default SongBar