const Events = () => {

    const handleMyEvent = (e) => {
        

            console.log('Evento funcionou')

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

        </div>

    )

}

export default Events