const Events = () => {

    const handleMyEvent = (e) => {
        

            console.log('Evento funcionou')

    };

    const renderSomething = (x) => {

        if(x) {
            return <h1>Renderizando isso!</h1>
        }else {
            return <h1>Também posso renderizar isso!</h1>
        }

    };

    return (

        <div>

            <div>

                <button onClick={handleMyEvent}>Click aqui!</button>

            </div>

            <div>

                <button onClick={() => console.log("Clicou no segundo botão tambem!")}>Click aqui tambem!</button>

                <button onClick={() => {
                    if(true) {
                        console.log("Obrigado por clicar aqui tambem!")
                    }
                }}>Clica aqui tambem por favor!</button>

            </div>

                {renderSomething(true)}
                {renderSomething(false)}

        </div>

    )

}

export default Events