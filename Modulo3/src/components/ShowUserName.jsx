import { useState } from "react"

const ShowUserName = (props) => {

  return (

    <div>

        <h2>Nome do usuario é: {props.name}</h2>

        <h2>Nome do 2º usuario é: {props.pessoa}</h2>

        <ul>
    
            {props.userName.map((item) => (
            
            <li key={item.id}>Nome = {item.name} - idade = {item.age}</li>

            ))
            
            }

        </ul>
    
    </div>

  )

}

export default ShowUserName