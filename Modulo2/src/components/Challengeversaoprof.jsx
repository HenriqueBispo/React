
import React from 'react'

{/*Feito pelo prof do curso agora em baixo*/}

const Challengeversaoprof = () => {


    const a = 10;
    const b = 15;

  return (
    <div>

        <p>A: {a}</p>
        <p>B: {b}</p>

        <button onClick={() => {console.log(a + b)}}>Click para ver a soma!</button>

    </div>
  )
}

export default Challengeversaoprof
.