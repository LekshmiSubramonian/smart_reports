import React from 'react'
import {Button} from 'react-bootstrap';
import './Dashboard.css';


function Buttons(props) {
    return (
        <div>
            <Button className="dash-btn" variant={props.variantName}>{props.name}</Button>
        </div>
    )
}

export default Buttons
