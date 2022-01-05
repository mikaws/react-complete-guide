export default function Button(props) {
    function onFormSubmit(e) {
        e.preventDefault()
        props.onClick()
    }

    return(
        <button type="submit" onClick={(e) => onFormSubmit(e)}>{props.content}</button>
    )
}