import { useState } from "react"
import "./InputText.css"

export default function InputText(props) {
    const [value, setValue] = useState('')
    
    if (props.onButtonClicked) { setTimeout(() => { setValue('') }, 10); }

    function onKeyDown(data) {
        setValue(data)
        props.onChange(data)
    }

    return(
        <div className="input-text">
            <label>
                {props.title}
            </label>
            <input type="text" value={value} onChange={e => onKeyDown(e.target.value)}/>
        </div>
    )
}