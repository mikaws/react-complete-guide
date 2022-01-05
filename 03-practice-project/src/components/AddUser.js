import { useState } from "react"
import './AddUser.css'
import '../index.css'

export default function AddUser(props) {
    
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    
    function onFormSubmit(e) {
        e.preventDefault()
        if(username.trim().length === 0 || age.trim().length === 0)
            return props.onClickButton('Empty values')
        else if(parseInt(age) < 1)
            return props.onClickButton('Age must be grower than 0')
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