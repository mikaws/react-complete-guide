import Card from "./components/UI/Card";
import AddUser from "./components/AddUser";
import React, { useState } from "react";
import './App.css'
import ErrorModal from "./components/ErrorModal";

export default function App() {
  const [users, setUsers] = useState([]);
  const [invalidInput, setInvalidInput] = useState('')
  const styles = {border: '1px solid #ccc', margin: 10, padding: 10}

  function formDataHandler(data) {
    if(data) {
      if(data === 'Empty values' || data === 'Age must be grower than 0')
        setInvalidInput(data)
      else
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
      {invalidInput &&
        <ErrorModal
          clickHandler={() => setInvalidInput('')}
          message={invalidInput}
        />
      }
      <Card>
        <AddUser onClickButton={formDataHandler}/>
      </Card>

      {users &&
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
      }

      
    </>
  );
}
