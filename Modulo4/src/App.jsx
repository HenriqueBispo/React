import './App.css'
import { useState } from "react";
import FirstComponent from './components/FirstComponent'

function App() {

  const n = 15;

  const [name] = useState("Matheus")

  const redTitle = true



  return (
    <>
      {/*CSS global*/}
      <h1>React com CSS</h1>

      {/*CSS componente*/}
      <FirstComponent />
      <p>Este paragrafo é do App.jsx</p>

      {/*Inline */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>Este elemento foi estilizado de forma inline</p>

      {/* CSS Inline dinamico */}

      <h2 style={n < 10 ? {color: "purple"} : {color: "pink"}}>CSS dinamico</h2>

      <h2 style={n > 10 ? {color: "purple"} : {color: "pink"}}>CSS dinamico</h2>

      <h2 style={name === "Matheus" ? {color: "green", backgroundColor: "#000"} : null }>CSS dinamico</h2>

      {/*Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title" }>Esse título vai ter classe dinâmica</h2>


    </>
  )
}

export default App
