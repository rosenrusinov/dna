import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../logo.svg';
import Collapsible from './Collapsible';

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: -1,
            width: 0,
            height: 0
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        console.log(window.innerWidth);
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        return (
            <div>
                {this.state.width < 600 ?
                <Collapsible>
                    <Col className='navbar-container'>
                        <Row className='navbar-link-small'><Link onClick={() => {this.setState({screen: 0}); }} className='navbar-text' to='/about'>за нас</Link></Row>
                        <Row className='navbar-link-small'><Link onClick={() => {this.setState({screen: 2}); }} className='navbar-text' to='/projects'>проекти</Link></Row>
                        <Row className='navbar-link-small'><Link onClick={() => {this.setState({screen: 3}); }} className='navbar-text' to='/research'>разработки</Link></Row>
                        <Row className='navbar-link-small'><Link onClick={() => {this.setState({screen: 4}); }} className='navbar-text' to='/contacts'>контакти</Link></Row>
                    </Col>
                </Collapsible>
                :
                <Row className='navbar-container'>
                     <div className='navbar-inner'></div>
                     <div className='navbar-logo'><Link onClick={() => this.setState({screen: -1})} to='/'><Logo className='logo'/></Link></div>
                     <Col className='navbar-link'><Link onClick={() => this.setState({screen: 0})} className={this.state.screen === 0 ? 'navbar-text-selected' : 'navbar-text'} to='/about'>за нас</Link></Col>
                     <Col className='navbar-link'><Link onClick={() => this.setState({screen: 2})} className={this.state.screen === 2 ? 'navbar-text-selected' : 'navbar-text'} to='/projects'>проекти</Link></Col>
                     <Col className='navbar-link'><Link onClick={() => this.setState({screen: 3})} className={this.state.screen === 3 ? 'navbar-text-selected' : 'navbar-text'} to='/research'>разработки</Link></Col>
                     <Col className='navbar-link'><Link onClick={() => this.setState({screen: 4})} className={this.state.screen === 4 ? 'navbar-text-selected' : 'navbar-text'} to='/contacts'>контакти</Link></Col>
                     <div className='navbar-end'></div>
                </Row>}
            </div>
        )
    }
}

export default TopBar;