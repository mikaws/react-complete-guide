import Card from "./UI/Card";
import './ErrorModal.css'

export default function ErrorModal(props) {
    
    return(
        <div
            className="error-modal-shadow"
            onClick={props.clickHandler}>
            <Card>
                <h6>{props.message}</h6>
            </Card>
        </div>
    )
}