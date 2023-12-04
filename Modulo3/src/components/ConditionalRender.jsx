import React, { useState } from 'react'

const ConditionalRender = () => {

    const [x] = useState (false)

    const [name, setName] = useState ("Matheus");

  return (

    <div>
        
        <h3>Isso será exibido?</h3>

        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Se x for false, Não!</p>}

        <h2>If Ternário</h2>

        {name === "João" ? (
        <div>
            <p>O nome é joão</p>
            <p><a href="https://www.youtube.com/watch?v=a7ms3r-qt0E" target="_blank" rel="noopener noreferrer">link</a></p>
        </div>
        ) : (
            <div>
                <p>Nome não encontrado!</p>
            </div>

         )}

         <button onClick={() => setName("João")}>Clica aqui!</button>
         {console.log(name)}
        
    </div>

  )

}

export default ConditionalRender