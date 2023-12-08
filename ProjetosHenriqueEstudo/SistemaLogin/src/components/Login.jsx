import { useState } from 'react';
import './Login.css';

const Login = ({ login }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [sucesso, setSucesso] = useState(null); // To deixando null pra n aparecer antes do momento
  const [falha, setFalha] = useState(null);// To deixando null pra n aparecer antes do momento

  const handleLimpar = (e) => {

    e.preventDefault()
    setEmail("")
    setSenha("")

  }

  const handleSubmit = (e) => {

    // Não vai atualizar a pagina mesmo depois q eu enviar o formulario
    e.preventDefault();

    // Aqui eu criei a variavel user
    // login.find((log)... Aqui seria mais ou menos o mesmo do .map login é o nome da tabela .find seria pedindo para procurar no BD ou como no caso desse projeto na list 

    // Agora o ((log)... eu estou falando que agora dentro dessa variavel log=login igual no .map

    //log.email === email) Aqui basicamente está dizendo se log.email(lista ou BD)for identico ao email passado pelo input 
    
    // OBS: Caso ache algum resultado a vriavel passara true
    const user = login.find((log) => log.email === email);

    //Se o email for true(igual) vai verificar se a senha no user que verifica o log é igual ao do input 
    if (user && user.senha === senha) {

      console.log('Login efetuado com sucesso');
      setFalha(null);//To deixando vazia pra n aparecer junto com a mensagem de sucesso


      setTimeout(() => {
        
        setSucesso("Carregando as informações passadas pelo formulário")
        console.log("Carregando as informações passadas pelo formulário")

      }, 0);

      setTimeout(function () {

        setSucesso("Fazendo verificação de segurança")
        console.log("Fazendo verificação de segurança")

      }, 3000);
  
      setTimeout(() => {
        
        setSucesso("Fazendo verificação das informações passadas")
        console.log("Fazendo verificação das informações passadas")

      }, 6000);

      

      setTimeout(function () {
        setEmail("")
        setSenha("")
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

        setSucesso('Espere alguns segundos e click em "OK" para ser direcionado para proxima página')
        console.log("Espere alguns segundos para ser direcionado para proxima tela")

      }, 18000);



      setTimeout(function () {

        alert('O site deseja te enviar para outra pagina clique em "OK" para permitir')

        console.log('Alerta com texto "O site deseja te enviar para outra pagina clique em "OK" para permitir" foi executado com sucesso')

        window.location.href = 'https://www.GrowthBrand.com.br';

      }, 21000);

    } else {

      console.log('Login falhou com sucesso');

      setTimeout(() => {

        setSucesso("Carregando as informações passadas pelo formulário")

      }, 0);

      setTimeout(() => {
        
        setSucesso("Fazendo verificação de segurança")

      }, 3000);

      setTimeout(() => {
        
        setSucesso("Fazendo verificação das informações passadas pelo formuário")

      }, 6000);

      setTimeout(() => {
        setSucesso(null)
        setFalha("Login falhou com sucesso!")//Adicionou a variavel que tava vazia sucesso q tá lá em cima

      }, 9000);

      

      setTimeout(() => {
        
        setFalha("Email ou senha incorreto")

      }, 12000);

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

        <br /><br />
        <input type="submit" value="Fazer Login" />
        <button type="reset" onClick={handleLimpar}>Limpar formulário</button>
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
