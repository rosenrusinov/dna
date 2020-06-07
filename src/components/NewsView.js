import React from 'react';
import { Container, Row, Carousel, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'
import DOMPurify from 'dompurify';

import NewsData from '../data/home/news.json';

function makeSlideshow (items) {
    return items.map(item => {
        return  <Carousel.Item key={item.img}>
                    <img
                        className="d-block w-100"
                        src={item.img}
                        alt={item.img}
                    />
                </Carousel.Item>
    })
}

function findNews(news) {
    return news.link === this;
}

function NewsView(props) {
    let link = useLocation().pathname.substring(6);
    let index = NewsData.items.findIndex(findNews, link);
    let news = NewsData.items[index];
    let previous = null;
    let next = null;
    if (index > 0)
    {
        next = NewsData.items[index - 1];
    }
    if (index < NewsData.items.length - 1)
    {
        previous = NewsData.items[index + 1];
    }
    return (
        <div>
            <Carousel key={news.link} className='news-carousel'>
                {makeSlideshow(news.slideshow)}
            </Carousel>

            <Container className='news-view'>
                <Row className='news-view-title' dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(news.title)} }/>
                <Row className='news-view-date' dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(news.date)} }/>
                <Row className='news-view-text' dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(news.text)} } />
                {(previous || next) && 
                    <Row>
                        {previous && 
                            <Col className='news-view-previous'>
                                <Link to={'/news/' + previous.link} className='news-view-navigation-links'>previous</Link>
                            </Col>}

                        {next && 
                            <Col className='news-view-next'>
                                <Link to={'/news/' + next.link} className='news-view-navigation-links'>next</Link>
                            </Col>}
                    </Row>}
            </Container>
        </div>
    )
}

export default NewsView;