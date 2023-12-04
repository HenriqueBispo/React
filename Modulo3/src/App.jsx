import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// Import Asset
import City from './assets/City.jpg'

// Import Style Css

import './App.css'

// Import components

import FirstComponent from './components/FirstComponent'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <div>

      {/*Imagem está em public*/}

      <img src="/img1.jpg" alt="Paisagem" />

    </div>

    <div>

      {/*Imagem está em assets*/}

      <img src={City} alt="Cidade" />

    </div>

    <br /><br /><hr /><h1>ManageData.jsx</h1><br /><br />
    <ManageData />
    <br /><br /><br /><br /><hr /><h1>ListRender.jsx</h1><br /><br /><hr />
    <ListRender />
    <br /><br /><br /><br /> <hr /><h1>Conditional.jsx</h1><br /><br /><hr />
    <ConditionalRender />

    </>
  )
}

export default App
