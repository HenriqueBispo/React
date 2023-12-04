import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Henrique", "P1", "P2", "Renato", "Pietro"])

    const [users] = useState([
      { id: 5661, name: "Matheus", age: 31},
      { id: 5662, name: "João", age: 28},
      { id: 5663, name: "Pedro", age: 44},
      { id: 5664, name: "Henrique", age: 17}
    ])

  return (

    <div>

    <ul>

        {list.map((item, index) => (

          <li key={index}>{item}</li>

        ))
        
        }

        <br /><br /><hr /><br /><br />

        {users.map((user) => (

          <li key={user.id}>

          {user.name} - {user.age}

          </li>


        ))}

    </ul>

    </div>

  )

}

export default ListRender