import React from 'react';
import { useHistory } from "react-router-dom";
import { Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Project(props) {
    const { t } = useTranslation();
    let history = useHistory();

    function handleClick() {
        history.push(props.link);
    }

    return (
        <Col className='projects-item-container' onClick={handleClick}>
            <img src={props.thumbnail} width="100%" alt={props.thumbnail}/>
            <div className='project-tint'>
                <p className='project-text'>{t(props.title)}</p>
            </div>
        </Col>
    )
}

export default Project;