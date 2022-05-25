import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Albums from '../views/Albums'
import Artists from '../views/Artists'
import Home from '../views/Home'
import Podcasts from '../views/Podcasts'
import Songs from '../views/Songs'

const Rutas = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/artists' element={<Artists/>}/>
                    <Route path='/albums' element={<Albums/>}/>
                    <Route path='/songs' element={<Songs/>}/>
                    <Route path='/podcasts' element={<Podcasts/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Rutas