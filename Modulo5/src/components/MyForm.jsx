import './MyForm.css'

import { useState } from 'react'

const myForm = () => {
    // 3 - Gerenciamento de dados
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleName = (e) => {

        setName(e.target.value);

    }

    // console.log(name)
    // console.log(email)

   
    const handleSubmit = (event) => {

        event.preventDefault();
        console.log("Enviando os formulário");
        console.log(name, email);
        console.log("Formulario enviado com sucesso!")

    };
        
    return (

    <div>

        {/* 5 - Envio de form */}


        {/* 1 - Criação de form */}
        <form onSubmit={handleSubmit}>

            <div>

                <label htmlFor="name">Nome: </label>
                <input type="text" name="name" id='name' placeholder="Digite o seu nome" onChange={handleName}/>

            </div>
            {/* 2 - Label envolvendo input */}
            <label htmlFor="email">
                <span>E-mail</span>
                {/* 4 - Simplificação de manipulação de state */}
                <input type="email" name="email" id='email' placeholder='Digite o seu e-mail' onChange={(e) => setEmail(e.target.value)} />
            </label>

            <input type="submit" value="Enviar"/>

        </form>

    </div>

  )

}

export default myForm