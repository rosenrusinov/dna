import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Project from '../components/Project';

function makeItems (items, path) {
    return items.map(item => {
        return <Project key={item.link} thumbnail={item.thumbnail} link={path + item.link}></Project>
    })
}

function Projects (props) {
    return (
        <Container className='projects-container'>
            <Row xs={1} sm={2} md={2} lg={2}>
                {makeItems(props.projects, props.path)}
            </Row>
        </Container>
    )
}

export default Projects;