import Card from "./components/UI/Card";
import Form from "./components/Form";
import React, { useState, useEffect } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const styles = {border: '1px solid #ccc', margin: 10, padding: 10}



  function formDataHandler(data) {
    if(data) {
      setUsers([...users, data])
    }
  }

  function filterUser(user) {
    users.splice(user, 1)
  }

  useEffect(() => {}, [users])
  
  return (
    <>
      <Card>
        <Form onClickButton={formDataHandler}/>
      </Card>

      {users ?
        <Card>
          {users.map((user, i) => {
            return(
              <div
                className="user-content"
                style={styles}
                key={i}
                onClick={() => filterUser(i)}>
                {`${user.username} (${user.age} years old)`}
              </div>
            )
          })}
        </Card>
        : ''
      }
    </>
  );
}
