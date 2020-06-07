import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SimpleReactLightbox from "simple-react-lightbox";

import './App.css';

import {ReactComponent as Logo} from './Logo.svg';
import AboutUs from './pages/About';
import Home from './pages/Home';
import NewsView from './components/NewsView';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Contacts from './pages/Contacts';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectView from './components/ProjectView';

import ProjectsData from './data/projects/projects.json'
import ResearchData from './data/projects/research.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <Router>
        <SimpleReactLightbox>
        <ScrollToTop>
        <Container className='p-0' fluid={true}>
          <Navbar className='navbar-custom' expand='lg'>
            <Link className='navbar-absolute' to='/'><Logo className='logo'/></Link>
            <Navbar.Toggle className='ml-auto navbar-toggle' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='m-auto border-bottom navbar-custom'>
                <Link className='nav-link' to='/about'>ABOUT US</Link>
                <Link className='nav-link' to='/services'>SERVICES</Link>
                <Link className='nav-link' to='/projects'>PROJECTS</Link>
                <Link className='nav-link' to='/research'>RESEARCH</Link>
                <Link className='nav-link' to='/contacts'>CONTACTS</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route exact path='/'>
            <Home/>
          </Route>

          <Route path='/news/'>
            <NewsView/>
          </Route>

          <Route exact path='/about'>
            <AboutUs/>
          </Route>

          <Route exact path='/services'>
            <Services/>
          </Route>

          <Route exact path='/projects'>
            <Projects projects={ProjectsData.items} path='/project/'/>
          </Route>

          <Route exact path='/research'>
            <Projects projects={ResearchData.items} path='/res/'/>
          </Route>

          <Route path='/project'>
            <ProjectView startIndex={9} projects={ProjectsData.items}/>
          </Route>

          <Route path='/res'>
            <ProjectView startIndex={5} projects={ResearchData.items}/>
          </Route>

          <Route exact path='/contacts'>
            <Contacts/>
          </Route>

          <Footer/>

        </Container>
        </ScrollToTop>
        </SimpleReactLightbox>
      </Router>
    );
  }
}

export default App;