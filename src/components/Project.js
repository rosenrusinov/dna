import React from 'react';
import { useHistory } from "react-router-dom";
import { Col } from 'react-bootstrap';

function Project(props) {
    let history = useHistory();

    function handleClick() {
        history.push(props.link);
    }

    return (
        <Col className='projects-item-container' onClick={handleClick}>
            <img src={props.thumbnail} width="100%" alt={props.thumbnail}/>
        </Col>
    )
}

export default Project;