import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Assistant from './components/Assistant'
import Calendar from './components/Calendar'
import Notifications from './components/Notifications'
import Profile from './components/Profile'
import Tasks from './components/Tasks'
import Navbar from './components/Navbar'
import Help from './components/Help'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path='/help' element={<Help />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
