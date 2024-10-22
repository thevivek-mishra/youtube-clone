import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { useAuth } from './context/AuthProvider'
export default function App() {
 const {data,loading} =useAuth()
 console.log(loading)
 console.log(data)
  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  )
}
