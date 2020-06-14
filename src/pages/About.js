import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Employee from '../components/Employee';
import DOMPurify from 'dompurify';

import Employees from '../data/about/employees.json';

class AboutUs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: null,
            selected: -1,
            items: Employees.items
        }
    }

    handleEmployeeClick = (id, text) => {
        this.setState({text: text, selected: id});
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Employee key={item.id} selected={item.id === this.state.selected}
                    img={item.img}
                    name={item.name}
                    title={item.title}
                    onClick={(e) => this.handleEmployeeClick(item.id, item.text)}
                />
        })
    }

    render () {
        return (
            <Container className='about-us'>
                <Row>
                    <Col className='about-us-text'>
                        <div key={this.state.text} className='employee-text' dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(Employees.text)}}/>
                    </Col>
                </Row>
                <Row xs={1} sm={2} md={3} lg={4} className='center-col'>
                    {this.makeItems(this.state.items)}
                </Row>
                <Row>
                    

                    {this.state.text && <div key={this.state.text} className='employee-text' dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(this.state.text)} }/>}
                </Row>
            </Container>
        )
    }
}

export default AboutUs;