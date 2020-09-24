import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../logo.svg';
import Collapsible from './Collapsible';

import {ReactComponent as BgButton} from '../vectors/bg.svg';
import {ReactComponent as EnButton} from '../vectors/en.svg';

import {ReactComponent as BgButtonSel} from '../vectors/bg_selected.svg';
import {ReactComponent as EnButtonSel} from '../vectors/en_selected.svg';

import { withTranslation } from 'react-i18next';

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
        const { t } = this.props;
        return (
            <div>
                {this.state.width < 600 ?
                <Collapsible>
                    <Col>
                        <Row className='navbar-link-small'><Link onClick={() => {this.setState({screen: 0}); }} className='navbar-text' to='/about'>{t("TID_ABOUT")}</Link></Row>
                        <Row className='navbar-link-small'><Link onClick={() => {this.setState({screen: 2}); }} className='navbar-text' to='/projects'>{t("TID_PROJECTS")}</Link></Row>
                        <Row className='navbar-link-small'><Link onClick={() => {this.setState({screen: 3}); }} className='navbar-text' to='/research'>{t("TID_RESEARCH")}</Link></Row>
                        <Row className='navbar-link-small'><Link onClick={() => {this.setState({screen: 4}); }} className='navbar-text' to='/contacts'>{t("TID_CONTACTS")}</Link></Row>
                        <Row className='navbar-link-small'>
                            {this.props.language === 'bg' 
                            ? <div><BgButtonSel onClick={() => this.props.languageClick('bg')} className='language-bar'/>/<EnButton onClick={() => this.props.languageClick('en')} className='language-bar'/></div>
                            : <div><BgButton onClick={() => this.props.languageClick('bg')} className='language-bar'/>/<EnButtonSel onClick={() => this.props.languageClick('en')} className='language-bar'/></div>
                            }
                            
                        </Row>
                    </Col>
                </Collapsible>
                :
                <Row className='navbar-container'>
                     <div className='navbar-inner'></div>
                     <div className='navbar-logo'><Link onClick={() => this.setState({screen: -1})} to='/'><Logo className='logo'/></Link></div>
                     <Col className='navbar-link'><Link onClick={() => this.setState({screen: 0})} className={this.state.screen === 0 ? 'navbar-text-selected' : 'navbar-text'} to='/about'>{t("TID_ABOUT")}</Link></Col>
                     <Col className='navbar-link'><Link onClick={() => this.setState({screen: 2})} className={this.state.screen === 2 ? 'navbar-text-selected' : 'navbar-text'} to='/projects'>{t("TID_PROJECTS")}</Link></Col>
                     <Col className='navbar-link'><Link onClick={() => this.setState({screen: 3})} className={this.state.screen === 3 ? 'navbar-text-selected' : 'navbar-text'} to='/research'>{t("TID_RESEARCH")}</Link></Col>
                     <Col className='navbar-link'><Link onClick={() => this.setState({screen: 4})} className={this.state.screen === 4 ? 'navbar-text-selected' : 'navbar-text'} to='/contacts'>{t("TID_CONTACTS")}</Link></Col>
                     <div className='navbar-link'>
                        <div className='navbar-text-selected'>
                            <Row className='language-row'>
                                {this.props.language === 'bg' 
                                ? <div><BgButtonSel onClick={() => this.props.languageClick('bg')} className='language-bar'/>/<EnButton onClick={() => this.props.languageClick('en')} className='language-bar'/></div>
                                : <div><BgButton onClick={() => this.props.languageClick('bg')} className='language-bar'/>/<EnButtonSel onClick={() => this.props.languageClick('en')} className='language-bar'/></div>
                                }
                                
                            </Row>
                        </div>
                    </div>
                     <div className='navbar-end'></div>
                </Row>}
            </div>
        )
    }
}

export default withTranslation()(TopBar);