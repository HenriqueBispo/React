import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
  ];

  return (
    <>
      <div>
    
      <h1>Meu Carrossel</h1>
      <Carrossel images={images} />
      
      </div>
    </>
  )
}

export default App
