export default function Button(props) {
    function onFormSubmit() { props.onClick() }

    return(
        <button onClick={onFormSubmit}>{props.content}</button>
    )
}