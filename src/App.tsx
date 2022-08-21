import { useState } from 'react'
import { AuthProvider } from './context/AuthProvider'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedLayout } from './components/ProtectedLayout'
import { Login } from './components/Login'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedLayout><h1>Olá, esse é o componente profile</h1></ProtectedLayout>} path='/profile' />
            
         

          <Route element={<Login />} path='/login' />


          
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
