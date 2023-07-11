import React from 'react'
import UserProvider from './context/UserProvider'
import { Navigate, Route, Routes } from 'react-router'
import LoginPage from './LoginPage'
import AboutPage from './AboutPage'
import HomePage from './HomePage'
import Navbar from './Navbar'

const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />
      <hr />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='/*' element={<Navigate to='/about' />} />
      </Routes>

    </UserProvider>

  )
}

export default MainApp