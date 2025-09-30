import { useState } from 'react'
import Sumador from './components/Sumador'
import ContadorConHistorial from './components/Contador'
import './App.css'

function App() {
  return (
    <>
    <h1>Suma dos numeros</h1>
    <Sumador />
    <ContadorConHistorial />

    </>
  )
}

export default App
