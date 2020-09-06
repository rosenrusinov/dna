import React from 'react';
import {ReactComponent as Logo} from '../logo.svg';
import {ReactComponent as Burger} from '../open-menu.svg';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

class Collapsible extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(state => ({
            open: !state.open
        }));
    }

    closeMenu() {
        this.setState(state => ({
            open: false
        }));
    }

    render () {
        return (
            <div>
                <Row className='navbar-container'>
                    <div className='navbar-inner'></div>
                    <div className='navbar-logo'><Link onClick={() => {this.setState({screen: -1}); this.closeMenu(); }} to='/'><Logo className='logo'/></Link></div>
                    <Col className='navbar-end'></Col>
                    <div className='navbar-end-button'>
                        <Burger className='burger-button' onClick={this.handleClick}/>
                    </div>
                </Row>
                <div>
                    {this.state.open && this.props.children}
                </div>
            </div>
        )
    }
}

export default Collapsible;