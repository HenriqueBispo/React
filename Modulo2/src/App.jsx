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
import Challenge from './components/Challenge'
import Challengeversaoprof from './components/Challengeversaoprof'


function App() {
  return (
    
    <div>

      <h1>Este h1 está no App.jsx</h1>

      <FirstComponent />
      <hr />
      <TemplateExpressions />
      <hr />
      <Events />
      <Challenge />
      <br /><br /><br /><hr />
      <Challengeversaoprof />

    </div>
  )
}



export default App
