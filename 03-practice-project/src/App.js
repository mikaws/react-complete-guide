import Card from "./components/UI/Card";
import Form from "./components/Form";
import React, { useState } from "react";
import './App.css'

export default function App() {
  const [users, setUsers] = useState([]);
  const styles = {border: '1px solid #ccc', margin: 10, padding: 10}



  function formDataHandler(data) {
    if(data) {
      setUsers([...users, data])
    }
  }

  function filterUser(user) {
    let temp = [...users]
    temp.splice(user, 1)
    setUsers(temp)
  }

  
  return (
    <>
      <Card>
        <Form onClickButton={formDataHandler}/>
      </Card>

      {users ?
        <Card>
          {users.map((user, i) => {
            return(
              <ul
                className="user-content"
                style={styles}
                key={i}
                onClick={() => filterUser(i)}>
                <li>{`${user.username} (${user.age} years old)`}</li>
              </ul>
            )
          })}
        </Card>
        : ''
      }
    </>
  );
}
