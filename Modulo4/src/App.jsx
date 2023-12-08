import './App.css'
import { useState } from "react";
import FirstComponent from './components/FirstComponent'
import Title from './components/Title';
import Desafio1 from './Desafios/Desafio1';

function App() {

  const n = 15;

  const [name] = useState("Matheus")

  const redTitle = true


  { /* Desafio modulo 4 */ }

  const [cars] = useState([
    { id: 1, carro: "Supra", km: 0, novo: true, ano: 2023, brand: "Alisul", price: 80000 },
    { id: 2, carro: "BMW X3", km: 0, novo: true, ano: 2023, brand: "BMW", price: 90000 },
    { id: 3, carro: "Mercedes-Benz S-Class", km: 0, novo: true, ano: 2023, brand: "Mercedes", price: 120000 },
    { id: 4, carro: "Audi A8", km: 0, novo: true, ano: 2023, brand: "Audi", price: 110000 },
    { id: 5, carro: "Lexus LS", km: 0, novo: true, ano: 2023, brand: "Lexus", price: 100000 },
    { id: 6, carro: "Rolls-Royce Phantom", km: 0, novo: true, ano: 2023, brand: "Rolls-Royce", price: 500000 },
    { id: 7, carro: "Porsche Panamera", km: 0, novo: true, ano: 2023, brand: "Porsche", price: 130000 },
    { id: 8, carro: "Jaguar XJ", km: 0, novo: true, ano: 2023, brand: "Jaguar", price: 95000 },
    { id: 9, carro: "Bentley Continental GT", km: 0, novo: true, ano: 2023, brand: "Bentley", price: 180000 },
  ]);




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

      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>CSS dinamico</h2>

      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>CSS dinamico</h2>

      <h2 style={name === "Matheus" ? { color: "green", backgroundColor: "#000" } : null}>CSS dinamico</h2>

      {/*Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Esse título vai ter classe dinâmica</h2>

      {/* CSS Module */}
      <Title />
      <h2 className='my_title'>Testando</h2>


      {/* Desafio modulo 4 */}
      <Desafio1 carros={cars} />


      <h1 className='ult-tarefa'>Ultima tarefa é a criação e estilização desse título</h1>

    </>
  )
}

export default App
