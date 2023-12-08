import { useState } from 'react';
import './Login.css';

const Login = ({ login }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [sucesso, setSucesso] = useState(null); // Add state for success message
  const [falha, setFalha] = useState(null);

  const handleSubmit = (e) => {

    //Não atualizar a pagina mesmo depois de enviar o formulario
    e.preventDefault();

    // Ache no na lista log email que é igual o email recebido do input
    const user = login.find((log) => log.email === email);

    //Se email for true(igual) verifique se a senha no user que verifica o log é igual ao do input 
    if (user && user.senha === senha) {

      console.log('Login efetuado com sucesso');
      setFalha(null);//To deixando vazia pra n aparecer junto com a mensagem de sucesso


      setTimeout(() => {
        
        setSucesso("Carregando as informações passadas")
        console.log("Carregando as informações passadas")

      }, 0);
  
      setTimeout(() => {

        
        setSucesso("Fazendo verificação das informações passadas")
        console.log("Fazendo verificação das informações passadas")

      }, 3000);

      setTimeout(function () {

        setSucesso("Fazendo verificação de segurança")
        console.log("Fazendo verificação de segurança")

      }, 6000);

      setTimeout(function () {

        setSucesso("Enviando informações para o servidor")
        console.log("Enviando informações")

      }, 9000);

      setTimeout(function () {

        setSucesso("Arrumando informações")
        console.log("Arrumando informações")

      }, 12000);

      setTimeout(function () {

        setSucesso("Login efetuado com sucesso!");
        console.log("Login efetuado com sucesso!")

      }, 15000)

      

      setTimeout(function () {

        setSucesso("Espere alguns segundos para ser direcionado para proxima página")
        console.log("Espere alguns segundos para ser direcionado para proxima tela")

      }, 18000);



      setTimeout(function () {

        window.location.href = 'https://www.GrowthBrand.com.br';

      }, 21000);

    } else {

      console.log('Login falhou com sucesso');
      setSucesso(null)
      setFalha("Login falhou com sucesso!")//Adicionou a variavel que tava vazia sucesso q tá lá em cima

    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">
          <span>E-mail: </span>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Digite o seu e-mail!"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br /><br />
        <label htmlFor="senha">
          <span>Senha: </span>
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="Digite a sua senha!"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </label>
        <br />

        {sucesso && <h5 style={{ color: "green" }}>{sucesso}</h5>}{/* Se  sucesso for true aparece texto */}
        {sucesso && <span></span>}

        {falha && <h5 style={{ color: "red" }}>{falha}</h5>}{/* Se falha for true aparece texto */}

        {/* Display success message if set */}
        <br /><br />
        <input type="submit" value="Fazer Login" />
      </form>
      <br /><br /><br /><br />
      <ul>
        {login.map((log) => (
          <li key={log.id}>
            <hr />
            <span>Id: {log.id}</span>
            <br />
            <span>E-mail: {log.email}</span>
            <br />
            <span>Senha: {log.senha}</span>
            <br />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Login
