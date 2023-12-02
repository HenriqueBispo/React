import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListRender from './components/ListRender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <ListRender />

      </div>
    </>
  )
}

export default App
