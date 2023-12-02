import { useState } from "react"

const ListRender = () => {

    const [list] = useState([ 
        
        {
            img: <img className="img" src="/img1.jpg" alt="Produto 1" />,
            NomeProduto: "Item 1",
            Preço: 39.50,
            Promoção: 0
            
          },
          {
            img: <img className="img" src="/img1.jpg" alt="produto 2"/>,
            NomeProduto: "Item 2",
            Preço: 50.00,
            Promoção: 0

          },
          {
            img: <img className="img" src="/img1.jpg" alt="Produto 3" />,
            NomeProduto: "Item 3",
            Preço: 1.000,
            Promoção: 0
          }

        ])

  return (

    <div>

    <ul>

        {list.map((item, index) => (

            <li key={index}>
                {item.img}
                <div>{item.NomeProduto}</div>
                <div>Preço: {item.Preço}</div>
                <div>Promoção: {item.Promoção}</div>
            </li>

        ))
        
        }

    </ul>

    </div>

  )

}

export default ListRender