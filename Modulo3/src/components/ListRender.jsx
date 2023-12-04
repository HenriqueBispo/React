import { useState, setUsers } from "react"

const ListRender = () => {

    const [list] = useState(["Henrique", "P1", "P2", "Renato", "Pietro"])

    const [users, setUsers] = useState([
      { id: 0, name: "Matheus", age: 31},
      { id: 1, name: "João", age: 28},
      { id: 2, name: "Pedro", age: 44},
      { id: 3, name: "Henrique", age: 17},
      { id: 4, name: "José", age: 59},
      { id: 5, name: "Renato", age: 37},
      { id: 6, name: "Ricardo", age: 19},
      { id: 7, name: "Pedrin", age: 17},
    ])

    const DeleteRandom = () => {
                                                //6 pq 0 conta tbm
      const randomNumber = Math.floor(Math.random() * 8);

      setUsers((prevUsers) => {

        console.log(prevUsers);

        return prevUsers.filter((user) => randomNumber !== user.id)

      });

    };

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

          <button onClick={DeleteRandom}>Delete random user</button>

    </div>

  )

}

export default ListRender