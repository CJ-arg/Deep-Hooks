import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import LoginPage from './LoginPage'
import AboutPage from './AboutPage'
import HomePage from './HomePage'
import { Link } from 'react-router-dom'

const MainApp = () => {
  return (
    <>
      <h1>MainApp</h1>

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>   <hr /> <hr />
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