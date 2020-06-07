import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../components/Service';

import ServicesData from '../data/services.json';

class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: null,
            selected: null
        }
    }

    handleServiceClick = (id, text) => {
        this.setState({text: text, selected: id});
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Service key={item.id} selected={item.id === this.state.selected}
                    img={item.icon}
                    name={item.name}
                    onClick={(e) => this.handleServiceClick(item.id, item.text)}
                />
        })
    }

    render () {
        return (
            <Container className='services-container'>
                <Row className='center-col'>
                    {this.makeItems(ServicesData.items)}
                </Row>
                <Row>
                    {this.state.text && <div className='employee-text'>{this.state.text}</div>}
                </Row>
            </Container>
        )
    }
}

export default Services;