import React, { useContext, useEffect } from 'react'
import SongListContainer from '../components/SongListContainer/SongListContainer'
import { GlobalContext } from '../context/GlobalStateContext'

const Albums = () => {

    const {setSongList} = useContext(GlobalContext)

    useEffect(() => {
        setSongList(null)
    })

  return (
    <>
        <SongListContainer/>
    </>
  )
}

export default Albums