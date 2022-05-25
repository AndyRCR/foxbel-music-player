import React, { useContext, useEffect } from 'react'
import ReactHowler from 'react-howler'
import { GlobalContext } from '../../context/GlobalStateContext'

const HowlerRep = () => {

    const {songList, songIndex, setSongIndex, isPlaying, setIsPlaying, volumeLevel} = useContext(GlobalContext)

    const nextSong = () =>{
        setIsPlaying(true)
        songIndex === songList.data.length-1 ? setSongIndex(0) : setSongIndex(songIndex+1)
    }

    useEffect(() => {}, [songIndex, volumeLevel])

  return (
    <>
        { songList != null && songList.data.length > 0 && <ReactHowler
            src = {songList.data[songIndex].preview}
            playing = {isPlaying}
            volume = {volumeLevel}
            onEnd = {nextSong}
            />
        }
    </>
  )
}

export default HowlerRep