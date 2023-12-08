import './MyForm.css'

import { useState } from 'react'

const myForm = ({ user }) => {
    // 3 - Gerenciamento de dados
    // Adicionar esse user ? user.name ou user.email é util pra quando a pesso asalvou a senha e email com o chrome sabe então acontece q preenche sozinho e caso a pessoa nunca tenha entrado no site ou n tenha salvado com o chrome a senha e o email Vai ficar vazio
    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")

    const [bio, setBio] = useState("");
    const [role, setRole] = useState("");

    const handleName = (e) => {

        setName(e.target.value);

    }

    // console.log(name)
    // console.log(email)


    const handleSubmit = (event) => {

        event.preventDefault();
        console.log("Enviando os formulário");
        console.log(name, email, bio, role);
        console.log("Formulario enviado com sucesso!")

        setEmail("")
        setName("")
        setBio("")

    };

    return (

        <div>

            {/* 5 - Envio de form */}


            {/* 1 - Criação de form */}
            <form onSubmit={handleSubmit}>

                <div>

                    <label htmlFor="name">Nome: </label>
                    <input type="text" name="name" id='name' placeholder="Digite o seu nome" onChange={handleName}
                        value={name}
                    />

                </div>
                {/* 2 - Label envolvendo input */}
                <label htmlFor="email">
                    <span>E-mail</span>
                    {/* 4 - Simplificação de manipulação de state */}
                    <input type="email" name="email" id='email' placeholder='Digite o seu e-mail' onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                
                <label htmlFor="bio">

                    <textarea 
                    name="bio"
                    placeholder="Digite a descrição do usúario"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}></textarea>

                </label>
                {/* 9 - select */}
                <label htmlFor="role">
                    <span>Função no sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)}
                    value={role}
                    >
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Adiministrador</option>


                    </select>


                </label>

                <input type="submit" value="Enviar" />

            </form >

        </div >

    )

}

export default myForm