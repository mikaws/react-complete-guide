import { useState } from "react"
import './AddUser.css'

export default function AddUser(props) {
    
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    
    function onFormSubmit(e) {
        e.preventDefault()
        props.onClickButton({username, age})
        setUsername('')
        setAge('')
    }

    return(
        <form className="add-user-form">
            <label htmlFor="username">Username</label>
            <input 
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <label htmlFor="age">Age</label>
            <input 
                type="number"
                value={age}
                onChange={e => setAge(e.target.value)}
            />
            <button
                type="submit"
                onClick={e => onFormSubmit(e)}>
                Add User
            </button>
        </form>
    )
}