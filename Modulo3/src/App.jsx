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
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import Container from './components/container'
import ExecuteFunction from './components/executeFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import Desafio from './Desafios/Desafio'

function App() {

  const cars =  [
    
    {id: 1, brand:"Ferrari", color:"Amarelo", newCar: true, km: 0},
    {id: 2, brand:"KIA", color:"Branco", newCar: false, km: 33434},
    {id: 3, brand:"Supra", color:"branco", newCar: true, km: 0},
    {id: 4, brand:"Mustang", color:"Amarelo", newCar: false, km: 100},
    {id: 5, brand:"BMW", color:"Azul", newCar: true, km: 100},
    {id: 6, brand:"Fusca", color:"Azul", newCar: false, km: 700000},

  
  ]

  const [userName] = useState ([

      { id: 0, name: "Matheus", age: 31},
      { id: 1, name: "João", age: 28},
      { id: 2, name: "Pedro", age: 44},
      { id: 3, name: "Henrique", age: 17},
      { id: 4, name: "José", age: 59},
      { id: 5, name: "Renato", age: 37},
      { id: 6, name: "Ricardo", age: 19},
      { id: 7, name: "Pedrin", age: 17},

  ])

  const  person = "Renato";

  const [count, setCount] = useState(0)

  
  function showMessage() {

    console.log('Evento do componente pai')

  }


  const [message, setMessage] = useState ("")

  const handleMessage = (msg) => {

    setMessage(msg);

  }











  {/* Desafio do Módulo3*/}

  const [nomes] = useState ([

    {id: 0, nome: "Henrique", idade: 17, profissao: "programador"},
    {id: 1, nome: "Renato", idade: 37, profissao: "Vendedor/Empressario"},
    {id: 2, nome: "P1", idade: 17, profissao: "WebDesigner"},
    {id: 3, nome: "P2", idade: 17, profissao: "Gestor de Trafego"},
    {id: 4, nome: "Pietro", idade: 8, profissao: "Financeiro"},
    {id: 5, nome: "Esteve Jobs", idade: 56, profissao: "Ex-presidente da Apple Inc. Apple, Pixar, NeXT, Atari, Inc."}

])










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
    <br /><br /><br /><br /><hr /><h1>ShowUserName</h1><br /><br /><hr />
     {/*Props*/}
    <ShowUserName name="Paulo" pessoa={person} userName={userName} />
    <br /><br /><br /><br /><hr /><h1>CarDetails</h1><br /><br /><hr />
    {/*Destructuring*/}
    <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
    {/*Reaproveitando*/}
    <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true}  />
    <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false} />
    {/*Loop em array de objetos*/}
    {cars.map((car) => (

      <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} />


    ))}

    {/*Fragment*/}
    <Fragment testpronp="Teste" /><br /><br /><br /><br /><hr /><br /><br />

    {/*Children*/}
    <Container myValue="Testing">

      <p>E este é o conteúdo</p>

    </Container>

    <Container myValue="Testing2">

      <h5>Testando Container</h5>

    </Container><br /><br /><hr /><br /><br />

    {/*Executando função*/}
    <ExecuteFunction myFunction={showMessage} />

    {/*State lift*/}
    <Message msg={message} />
    <ChangeMessageState handleMessage={handleMessage} />
    <br /><br /><br /><br /><hr /><br /><br /><br /><br />

    {/*Desafio do módulo3*/}
    <h1>Desafio do módulo 3</h1>

    <Desafio nomes={nomes}/>

  

    
    </>
    
  )
}

export default App
