import React, { createContext, useState } from 'react'

export const GlobalContext = createContext()

const GlobalStateContext = ({children}) => {

    const [songList, setSongList] = useState(null)
    const [songIndex, setSongIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [volumeLevel, setVolumeLevel] = useState(1)
    const [firstLoad, setFirstLoad] = useState(false)
    const [activeNavbar, setActiveNavbar] = useState(false)

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': 'a65d0e0058mshcc16fa0e8d384d6p15d152jsnd19bb60dd9b5'
      }
    }

  return (
    <GlobalContext.Provider value={{
        songList, setSongList,
        songIndex, setSongIndex,
        isPlaying, setIsPlaying,
        isMuted, setIsMuted,
        volumeLevel, setVolumeLevel,
        firstLoad, setFirstLoad,
        activeNavbar, setActiveNavbar,
        options
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStateContext