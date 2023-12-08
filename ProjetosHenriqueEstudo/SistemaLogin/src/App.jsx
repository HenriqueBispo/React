import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Sistema from './Sistema'

function App() {
  
  const [login] = useState ([

    {id: 1, email: "admin@admin.com", senha:"admin1235" },
    {id: 2, email: "xxhenriqueplayy848@gmail.com", senha:"xxhenriqueplayy848"}

  ])

  return (
    <>
      <div>

        <Login login={login} />
        <Sistema />

      </div>
    </>
  )
}

export default App
