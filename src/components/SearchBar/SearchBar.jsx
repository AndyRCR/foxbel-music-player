import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import './SearchBar.css'
import { GlobalContext } from '../../context/GlobalStateContext'
import HowlerRep from '../HowlerRep/HowlerRep'

const SearchBar = () => {

  const [wordToSearch, setWordToSearch] = useState('')
  const {setSongList, setIsPlaying} = useContext(GlobalContext)

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
      'X-RapidAPI-Key': 'a65d0e0058mshcc16fa0e8d384d6p15d152jsnd19bb60dd9b5'
    }
  }

  const search = () =>{
    setSongList(null)
    setIsPlaying(false)
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=album:"${wordToSearch}"`, options)
	  .then(response => response.json())
	  .then(response => {setSongList(response)})
	  .catch(err => console.error(err))
  }

  const searchEnter = (evt) =>{
    if(evt.keyCode === 13) search()
  }

  return (
    <div className='searchBarContainer'>
        <div className='searchBar'>
            <input onKeyDown={searchEnter} onChange={(evt) => setWordToSearch(evt.target.value)} className='textArea' type="text" placeholder='Buscar'/>
            <FontAwesomeIcon onClick={search} style={{cursor: 'pointer'}} color='#BDBDBD' icon={faMagnifyingGlass} />
        </div>
        <HowlerRep/>
    </div>
  )
}

export default SearchBar