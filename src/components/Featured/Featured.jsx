import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faPlay } from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import './Featured.css'

const Featured = () => {

    const {songList, songIndex, setSongIndex, setIsPlaying} = useContext(GlobalContext)

    const playFeatured = async () =>{
        setIsPlaying(true)
        setSongIndex(0)
    }

    useEffect(() => {}, [songIndex])
    
  return (
    <>
        { songList != null ? (<div className='featuredContainer' style={{backgroundImage: `url(${songList.data[0].artist.picture_xl})`}}>
            <div className='featuredImgContainer' style={{backgroundImage: `url(${songList.data[0].album.cover_medium})`}}>
                <div className='playIconContainer'>
                    <FontAwesomeIcon onClick={playFeatured} style={{cursor: 'pointer'}} icon={faPlay} ></FontAwesomeIcon>
                </div>
            </div>
            <div className='featuredInfoContainer'>
                <div>
                    <h2 className='h2'>{songList.data[0].artist.name} {songList.data[0].album.title}</h2>
                    <h3 className='h3'>Lo mejor de {songList.data[0].artist.name}</h3>
                </div>
                <p className='p'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere debitis nobis similique minima temporibus quaerat ab explicabo aspernatur, sequi cumque maiores reprehenderit? Perferendis ad repudiandae tempora quaerat quis? Consectetur facere assumenda vel fugiat qui adipisci, cupiditate enim animi vitae deserunt provident fugit rem aut nulla! Itaque aliquid illum animi.
                </p>
                <div className='buttonContainer'>
                    <button onClick={playFeatured} className='btnReproducir'>Reproducir</button>
                    <button onClick={() => alert('Chupame el pene micky :3')} className='btnSeguir'>Seguir</button>
                    <div className='iconContainer'>
                        <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
                    </div>
                    
                </div>
            </div>
        </div>) : (
            <h1>Cargando...</h1>
        )}
    </>
    
  )
}

export default Featured