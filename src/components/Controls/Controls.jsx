import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react'
import './Controls.css'
import { GlobalContext } from '../../context/GlobalStateContext'

const Controls = () => {
    const { songList, isPlaying, setIsPlaying, songIndex, setSongIndex} = useContext(GlobalContext)

    const nextSong = async () => {
        setIsPlaying(true)
        songIndex === songList.data.length-1 ? setSongIndex(0) : setSongIndex(songIndex+1)
    }

    const previousSong = async () =>{
        setIsPlaying(true)
        songIndex === 0 ? setSongIndex(songList.data.length-1) : setSongIndex(songIndex-1)
    }

    const playSong = () => {
        setIsPlaying(true)
    }

    const pauseSong = () =>{
        setIsPlaying(false)
    }
    
  return (
    <div className='controlsContainer'>
        <div className='back'>
            <FontAwesomeIcon style={{cursor: 'pointer'}} onClick={() => previousSong()} icon={faBackward}/>
        </div>
        <div style={{height: '100%', display: 'flex', alignItems: 'center'}}>
            <div className='play'>
                { isPlaying ?
                <FontAwesomeIcon style={{cursor: 'pointer'}} onClick={pauseSong} icon={faPause}/> :
                <FontAwesomeIcon style={{cursor: 'pointer'}} onClick={playSong} icon={faPlay}/>}
            </div>
        </div>
        <div className='next'>
            <FontAwesomeIcon style={{cursor: 'pointer'}} onClick={() => nextSong()} icon={faForward}/>
        </div>
    </div>
  )
}

export default Controls