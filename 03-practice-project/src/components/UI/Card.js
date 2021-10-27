import '../UI/Card.css'

export default function Card(props) {
    return(
        <div id="card">
            {props.children}
        </div>
    )
}