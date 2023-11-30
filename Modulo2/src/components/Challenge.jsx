
const Challenge = () => {

    const num1 = 6;
    const num2 = 5;

    const soma = () => {
       
        console.log(`Resultado da conta ${num1} + ${num2} é igual a ${num1 + num2}`);

    }

    return (

        <div>
            
            <br /><br /><br /><br />
            <hr />

            <h1>Challenge</h1>

            <button onClick={soma}>Click aqui e olhe o console</button>

        </div>

    );

}

export default Challenge