import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const ListRender = () => {
    const [carrinho, setCarrinho] = useState(0);
    const [mostrarProdutos, setMostrarProdutos] = useState('comprar');
    const [produtosNoCarrinho, setProdutosNoCarrinho] = useState([]);

    const addToCarrinho  = (produto) => {
        setCarrinho(carrinho + 1);
        setProdutosNoCarrinho([...produtosNoCarrinho, produto]);
        console.log('Produto adicionado ao carrinho:', produto.NomeProduto);
    };

    const calcularTotal = () => {
        const total = produtosNoCarrinho.reduce((acc, produto) => acc + produto.Preço, 0);
        return total.toFixed(2);
    };

    const comprar = () => {
        console.log('Compra realizada');
    };

    const toggleMostrarProdutos = (opcao) => {
        setMostrarProdutos(opcao);
    };

    const [list] =  useState([

        {
            img: <img className="imgProduto" src="/img1.jpg" alt="Produto-01" />,
            NomeProduto: "item-1",
            Preço: 39.50,
            Promoção: 0
        },

        {
            img: <img className="imgProduto" src="/img1.jpg" alt="Produto-02" />,
            NomeProduto: "item-2",
            Preço: 50.00,
            Promoção: 0
        },

        {
            img: <img className="imgProduto" src="/img1.jpg" alt="Produto-03" />,
            NomeProduto: "item-3",
            Preço: 77.50,
            Promoção: 0
        },

        {
            img: <img className="imgProduto" src="/img1.jpg" alt="Produto-04" />,
            NomeProduto: "item-4",
            Preço: 99.99,
            Promoção: 0
        },

        {
            img: <img className="imgProduto" src="/img1.jpg" alt="Produto-05" />,
            NomeProduto: "item-5",
            Preço: 149.99,
            Promoção: 0
        },
        {
            img: <img className="imgProduto" src="/img1.jpg" alt="Produto-06" />,
            NomeProduto: "item-6",
            Preço: 39.70,
            Promoção: 0
        },
        {
            img: <img className="imgProduto" src="/img1.jpg" alt="Produto-07" />,
            NomeProduto: "item-7",
            Preço: 265.50,
            Promoção: 0
        },
        {
            img: <img className="imgProduto" src="/img1.jpg" alt="Produto-08" />,
            NomeProduto: "item-8",
            Preço: 89.90,
            Promoção: 0
        },
        {
            img: <img className="imgProduto" src="/img1.jpg" alt="Produto-0
            9" />,
            NomeProduto: "item-9",
            Preço: 69.90,
            Promoção: 0
        },
        {
            img: <img className="imgProduto" src="/img1.jpg" alt="Produto-10" />,
            NomeProduto: "item-10",
            Preço: 639.90,
            Promoção: 0
        }


    ])
    
    return (
        <div>
            <div className='divProdutos'>
                <ul className='ulProdutos'>
                    {list.map((item, index) => (
                        <li className='liProdutos' key={index}>
                            {item.img}
                            <div>{item.NomeProduto}</div>
                            <div>Preço: {item.Preço}</div>
                            <div>Promoção: {item.Promoção}</div>
                            <button onClick={() => addToCarrinho(item)}>Adicionar ao Carrinho</button>
                            <button onClick={comprar}>Comprar</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="MenuBar">
                <button className='botao' onClick={() => toggleMostrarProdutos('carrinho')}>Mostrar Carrinho ({carrinho})</button>
            </div><br /><br />

            {mostrarProdutos === 'carrinho' && (
                <div>
                    <h2>Produtos no Carrinho</h2>
                    <h3>Total: {calcularTotal()}</h3>
                    <ul className='ulCarrinho'>
                        {produtosNoCarrinho.map((produto, index) => (
                            <li className='liCarrinho' key={index}> 
                                <div className="ImgCarrinho">{produto.img}</div><br />
                                <div className='divNomeProduto'>{produto.NomeProduto}</div><br />
                                <div className='divPreco'>Preço: {produto.Preço}</div> 
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            <div>
                <form action="" method="post">
                    Número de cartão: <input type="text" name="" id="" />
                    <br />
                    CVV: <input type="text" name="" id="" />
                    <br />
                    Nome no Cartão: <input type="text" name="" id="" />
                    <br />
                    <input type="submit" value="Confirmar compra" />
                    <br /><br /><hr /><br /><br />
                </form>
            </div>

            
        </div>
    );
};

export default ListRender;