import React from 'react';

const Desafio1 = ({ carros }) => {

    return (

        <>

            <div className=''>

                <h1 className='tarefa2'>Tarefa 2</h1>

                <div className="listCar">

                    <div className='carInfo'>

                        <ul className="ul-listCar">

                            {carros.map((car) => (



                                <li key={car.id}>


                                    <hr />


                                    <img style={{ borderRadius: '50px', width: '150px', height: '150px' }} src="./img1.jpg" alt="Foto do carro" />
                                    <p className='p-listCar'>Carro: {car.carro}</p>
                                    <br />
                                    <p className='p-listCar'>Quilometragem: {car.km}</p>
                                    <br />
                                    <p className='p-listCar'>Ano: {car.ano}</p>
                                    <br />
                                    <p className='p-listCar'>Fabricante: {car.brand}</p>
                                    <br />
                                    <h3 style={{ color: 'green' }}>R$: {car.price}</h3>
                                    <button>Adicionar ao carrinho</button>
                                    <button>Comprar</button>

                                </li>


                            ))}
                        </ul>

                    </div>

                </div>

            </div>

        </>

    )

}

export default Desafio1