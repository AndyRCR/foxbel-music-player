import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react'
import './Volume.css'
import { GlobalContext } from '../../context/GlobalStateContext'

const Volume = () => {

  const {isMuted, setIsMuted, volumeLevel, setVolumeLevel} = useContext(GlobalContext)

  const handleVolume = (evt) =>{
    evt.target.value === '0' ? setIsMuted(true) : setIsMuted(false)
    setVolumeLevel(parseFloat(evt.target.value)/100)
  }

  return (
    <div className='volumeContainer'>
      <input onChange={handleVolume} value={volumeLevel*100} type="range" className="range-style"></input>
      <div className='volumeIcon'>
        { isMuted ? <FontAwesomeIcon onClick={() => {
          setIsMuted(false)
          setVolumeLevel(1)
          }} icon={faVolumeXmark}/> :
        <FontAwesomeIcon onClick={() => {
          setIsMuted(true)
          setVolumeLevel(0)
          }} icon={faVolumeHigh}/>}
      </div>
    </div>
  )
}

export default Volume