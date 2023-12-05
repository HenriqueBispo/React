const Desafio = ( {nomes} ) => {

    

  return (

    <div>

        <ul>
      
        {nomes.map((nome) => (
          
            <li key={nome.id}>
              
              
              Nome: {nome.nome} - 
              <br />
              Idade: {nome.idade} - 
              <br />
              {nome.idade >= 18 && <p>Pode tirar carteira de habilitação</p>}
              {nome.idade < 18 && <p>Não pode tirar carteira de habilitação</p>}
              <br />
              Profissão: {nome.profissao}
            
            </li>
            
        ))}

            
        </ul>


        

    </div>

  )

}

export default Desafio