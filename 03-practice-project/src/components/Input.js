import { useState } from "react"
import "./Input.css"

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
            <input
                type="text"
                value={value}
                onChange={e => {
                    if(props.type === 'number')
                        onKeyDown(e.target.value.replace(/\D/g, ''))
                    else if(props.type === 'text')
                        onKeyDown(e.target.value.replace(/\d/g, ''))
                }}
            />
        </div>
    )
}