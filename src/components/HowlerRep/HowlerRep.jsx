import React, { useContext, useEffect } from 'react'
import ReactHowler from 'react-howler'
import { GlobalContext } from '../../context/GlobalStateContext'

const HowlerRep = () => {

    const {songList, songIndex, isPlaying, volumeLevel} = useContext(GlobalContext)

    useEffect(() => {}, [songIndex, volumeLevel])
    

  return (
    <>
        { songList != null && <ReactHowler
            src = {songList.data[songIndex].preview}
            playing = {isPlaying}
            volume = {volumeLevel}
            />
        }
    </>
  )
}

export default HowlerRep