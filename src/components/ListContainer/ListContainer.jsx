import React, { useContext, useEffect } from 'react'
import { BounceLoader } from 'react-spinners'
import { GlobalContext } from '../../context/GlobalStateContext'
import Featured from '../Featured/Featured'
import GridList from '../GridList/GridList'
import './ListContainer.css'

const ListContainer = () => {

  const {songList, setSongList, setIsPlaying, options, setFirstLoad} = useContext(GlobalContext)

  useEffect(() => {
    setSongList(null)
    setIsPlaying(false)
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=album:"balas perdidas"`, options)
    .then(response => response.json())
    .then(response => {setSongList(response)})
    .catch(err => console.error(err))
    setFirstLoad(true)
  }, [])

  return (
    <div className='listContainer'>
      {songList != null ? (
        songList.data?.length > 0 ? (
          <>
            <Featured/>
            <GridList/>
          </>
        ):<h2>No se encontraron resultados :(</h2>
      ):<BounceLoader color='rgb(242,48,48)' size={150}/>
      }
    </div>
  )
}

export default ListContainer