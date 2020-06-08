import React from 'react';
import { Carousel } from 'react-bootstrap';

import Slideshow from '../data/home/slideshow.json';
import NewsList from '../components/NewsList';

function makeSlideshow (items) {
    return items.map(item => {
        return  <Carousel.Item key={item.img}>
                    <img
                        className="d-block w-100"
                        src={item.img}
                        alt={item.img}
                    />
                    <Carousel.Caption>
                        <h4 className='home-carousel-text'>{item.text}</h4>
                    </Carousel.Caption>
                </Carousel.Item>
    })
}

function Home(props) {
    return (
        <div>
            <Carousel indicators={false} className='home-carousel'>
                {makeSlideshow(Slideshow.items)}
            </Carousel>
            <NewsList>
            </NewsList>
        </div>
    )
}

export default Home; 