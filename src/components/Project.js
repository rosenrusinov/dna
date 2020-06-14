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
            <div className='project-tint'>
                <p className='project-text'>{props.title}</p>
            </div>
        </Col>
    )
}

export default Project;