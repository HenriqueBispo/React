//Import do vite || React || npm etc...

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// Style || CSS

import './App.css'

// FirstCompornent

import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'


function App() {
  return (
    
    <div>

      <h1>Este h1 está no App.jsx</h1>

      <FirstComponent />
      <TemplateExpressions />
      <Events />

    </div>
  )
}



export default App
