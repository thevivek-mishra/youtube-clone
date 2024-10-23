import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Search from './components/Search'
import PlayingVideo from './components/PlayingVideo'

export default function App() {
 
  return (
    <div>
      <Navbar />
      {/* <Sidebar /> */}

      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/search/:searchQuery" element={<Search/>} />
        <Route path="/video/:id" element={<PlayingVideo/>} />

      </Routes>
    </div>
  )
}
