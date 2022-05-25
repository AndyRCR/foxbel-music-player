import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import AlbumItem from '../AlbumItem/AlbumItem'
import './GridList.css'

const GridList = () => {

    const { songList } = useContext(GlobalContext)

    useEffect(() => {}, [songList])

    return (
        <div className='generalGridListContainer'>
            <h2 className='h2'>Resultados</h2>
            <div className='gridListContainer'>
                {songList != null ? (
                    songList.data.length > 0 ? (
                        songList.data.map((album, index) => (
                            <AlbumItem key={index+1} album={album} index={index} />
                        ))
                    ) : <h1>Cargando</h1>
                ) : (
                    <h1>Cargando</h1>
                )}
            </div>
        </div>
    )
}

export default GridList