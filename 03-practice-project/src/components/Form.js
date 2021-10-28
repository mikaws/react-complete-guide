import "./Input.css"
import "./Form.css"
import Input from "./Input"
import Button from "./Button"
import { useEffect, useState } from "react"

export default function Form(props) {  
    let data = {username: '', age: ''}
    const [clear, setClear] = useState(false);
    
    function onKeyUsername(value) { data.username = value }
    function onKeyAge(value) { data.age = value }

    function onFormSubmit(data) {
        props.onClickButton(data)
        setClear(true)
    }

    useEffect(() => {
        if(clear) {
            setTimeout(() => setClear(false), 15)
        }
    }, [clear]);

    return(
        <form className="form">
            <Input
                title="Username"
                type="text"
                onChange={onKeyUsername}
                onButtonClicked={clear}
            />
            <Input
                title="Age (Years)"
                type="number"
                onChange={onKeyAge}
                onButtonClicked={clear}
            />
            <Button
                content="Add User"
                onClick={() => onFormSubmit((data.username && data.age) ? data : '')}
            />
        </form>
    )
}