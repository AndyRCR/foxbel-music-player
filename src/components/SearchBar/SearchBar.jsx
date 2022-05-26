import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import './SearchBar.css'
import { GlobalContext } from '../../context/GlobalStateContext'
import HowlerRep from '../HowlerRep/HowlerRep'

const SearchBar = () => {

  const [wordToSearch, setWordToSearch] = useState('')
  const {setSongList, setIsPlaying, options, setSongIndex} = useContext(GlobalContext)

  const search = () =>{
    setSongList(null)
    setSongIndex(0)
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
            <FontAwesomeIcon className='searchIcon' onClick={search} style={{cursor: 'pointer'}} color='#BDBDBD' icon={faMagnifyingGlass} />
        </div>
        <HowlerRep/>
    </div>
  )
}

export default SearchBar