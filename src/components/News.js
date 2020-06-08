import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import DOMPurify from 'dompurify';

function News (props) {
    let history = useHistory();

    function handleClick() {
        history.push('/news/' + props.link);
    }

    return (
        <Container className='home-news-container' onClick={handleClick}>
            <Row xs={1} sm={2} md={2}>
                <Col>
                    <img src={props.thumbnail} width="100%" alt={props.thumbnail}/>
                </Col>
                <Col>
                    <div className='home-news-list-title' dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(props.text)}}/>
                    <p className='home-news-list-date'>{props.date}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default News;