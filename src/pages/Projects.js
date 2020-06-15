import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Project from '../components/Project';

function makeItems (items, path) {
    return items.map(item => {
        return <Project key={item.link} title={item.title} thumbnail={item.thumbnail} link={path + item.link}></Project>
    })
}

function Projects (props) {
    return (
        <Container fluid={true} className='projects-container'>
            <Row xs={2} sm={2} md={2} lg={3} xl={3}>
                {makeItems(props.projects, props.path)}
            </Row>
        </Container>
    )
}

export default Projects;