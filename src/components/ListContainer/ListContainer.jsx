import React from 'react'
import Featured from '../Featured/Featured'
import GridList from '../GridList/GridList'
import './ListContainer.css'

const ListContainer = () => {

  return (
    <div className='listContainer'>
        <Featured/>
        <GridList/>
    </div>
  )
}

export default ListContainer