import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import LoginPage from './LoginPage'
import AboutPage from './AboutPage'
import HomePage from './HomePage'
import Navbar from './Navbar'

const MainApp = () => {
  return (
    <>
      <Navbar />
      <hr />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='/*' element={<Navigate to='/about' />} />
      </Routes>

    </>
  )
}

export default MainApp