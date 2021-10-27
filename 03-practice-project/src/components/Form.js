import "./InputText.css"
import "./Form.css"
import InputText from "./InputText"
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
        <div className="form">
            <InputText
                title="Username"
                onChange={onKeyUsername}
                onButtonClicked={clear}
            />
            <InputText
                title="Age (Years)"
                onChange={onKeyAge}
                onButtonClicked={clear}
            />
            <Button
                content="Add User"
                onClick={() => onFormSubmit((data.username && data.age) ? data : '')}
            />
        </div>
    )
}