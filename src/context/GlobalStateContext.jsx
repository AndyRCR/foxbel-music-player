import React, { createContext, useState } from 'react'

export const GlobalContext = createContext()

const GlobalStateContext = ({children}) => {

    const [songList, setSongList] = useState(null)
    const [songIndex, setSongIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [volumeLevel, setVolumeLevel] = useState(1)

  return (
    <GlobalContext.Provider value={{
        songList, setSongList,
        songIndex, setSongIndex,
        isPlaying, setIsPlaying,
        isMuted, setIsMuted,
        volumeLevel, setVolumeLevel
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStateContext