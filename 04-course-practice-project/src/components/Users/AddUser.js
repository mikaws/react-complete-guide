import { useState } from "react"

import classes from './AddUser.module.css'
import Card from "../UI/Card"
import Button from "../UI/Button"
import ErrorModal from "../UI/ErrorModal"

const AddUser = props => {
    
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault()
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty value).'
            })
            return
        }
        else if(+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            })
            return
        }
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('')
        setEnteredAge('')
    }

    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={() => setError(null)}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={enteredUsername}
                        onChange={e => setEnteredUsername(e.target.value)}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        value={enteredAge}
                        onChange={e => setEnteredAge(e.target.value)}
                    />
                    <Button
                        type="submit"
                        onClick={e => addUserHandler(e)}
                    >Add User</Button>
                </form>
            </Card>
        </div>
    )
}
export default AddUser;