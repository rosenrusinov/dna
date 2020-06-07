import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Employee from '../components/Employee';

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
                    <p>
                        През последните няколко години тя се включи в широк спектър от проекти - от материалните системи до градските намеси. Общата черта сред нейната работа е търсенето на алтернативни решения по отношение на конструкцията, приложението и дизайна. Тя е създала голям набор от умения по отношение на физическите изчисления, цифровото производство и изчислителния дизайн, които й помагат да изведе работата си на следващото ниво. Нейният изследователски интерес се състои в проучване как може да се възстанови съществеността в архитектурата и строителството и предлага по-добра комуникация между изградената среда и нейните обитатели.
                    </p>

                    <p>
                        През 2018 г. и 2019 г. нейното изследване върху интерактивната среда, базирана на графен, предназначена за пространствено-временен контрол и анализ (Synapse), беше отличена с наградата за отлични технологии Digital Matter and Intelligent Construction, а по-късно и с наградата за изкуствено и материално интелигентно архитектурно развитие. През лятото на 2018 г. тя асистира в Global Summer School в Барселона и оттогава помага на различни семинари в IAAC. През есента на 2018 г. Никол стана част от Фондация Норман Фостър след участие в ателието по роботика, ръководено от Фабио Грамацио. Съвсем наскоро нейната работа бе призната, тъй като беше избрана сред много абсолвенти от цял ​​свят, които да бъдат част от програмата на антената по време на Холандската седмица на дизайна 2019.
                    </p>
                    </Col>
                </Row>
                <Row xs={1} sm={2} md={3} lg={4} className='center-col'>
                    {this.makeItems(this.state.items)}
                </Row>
                <Row>
                    {this.state.text && <div className='employee-text'>{this.state.text}</div>}
                </Row>
            </Container>
        )
    }
}

export default AboutUs;