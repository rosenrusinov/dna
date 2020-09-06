import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Employee from '../components/Employee';
import DOMPurify from 'dompurify';
import Media from 'react-media';

import Employees from '../data/about/employees.json';
import Service from '../components/Service';
import ServicesData from '../data/services.json';
import { withTranslation } from 'react-i18next';

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

    makeServices = (items, small) => {
        return items.map(item => {
            return <Service key={item.id} selected={item.id === this.state.selected}
                    img={item.icon}
                    name={item.name}
                    // onClick={(e) => this.handleServiceClick(item.id, item.text)}
                />
        })
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
        const { t } = this.props;
        return (
            <Container className='about-us'>
                <Row>
                    <Col className='about-us-text'>
                        <div key={this.state.text} className='employee-text' dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(t(Employees.text))}}/>
                    </Col>
                </Row>

                <Container className='services-container'>
                    <Media query={{ maxWidth: 1199 }}>
                    {matches =>
                        matches ? (
                            <Row xs={2} sm={5} md={5} className='center-col'>
                                {this.makeServices(ServicesData.items)}
                            </Row>
                        ) : (
                            <Row className='center-col'>
                                {this.makeServices(ServicesData.items)}
                            </Row>
                        )
                    }
                    </Media>
                </Container>

                <Row>
                    <Col className='about-us-text'>
                        <div key={this.state.text} className='employee-text' dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(t(Employees.text2))}}/>
                    </Col>
                </Row>
                <Row xs={1} sm={2} md={3} lg={4} className='center-col'>
                    {this.makeItems(this.state.items)}
                </Row>
                <Row>
                <Col className='about-us-text'>
                    {this.state.text && <div key={this.state.text} className='employee-text' dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(t(this.state.text))} }/>}
                </Col>
                </Row>
            </Container>
        )
    }
}

export default withTranslation()(AboutUs);