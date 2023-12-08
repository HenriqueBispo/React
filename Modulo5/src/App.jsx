import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MyForm from './components/myForm'

function App() {

  return (
    <>
      <div>

        <h2>Form</h2>
        <MyForm user={{name: "Josias", email:"josias@gmail.com"}} />

      </div>
    </>
  )
}

export default App
