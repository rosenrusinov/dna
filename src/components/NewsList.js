import React from 'react';
import { Container, Row } from 'react-bootstrap';
import News from './News';

import NewsData from '../data/home/news.json'
import { useTranslation } from 'react-i18next';

function makeNews (items) {
    return items.map(item => {
        return <News key={item.link} thumbnail={item.thumbnail} date={item.date} link={item.link} id={item.id} text={item.title}></News>
    })
}

function NewsList (props) {
    const { t } = useTranslation();
    return (
        <Container className='home-news-list'>
            <Row className='home-news-title'>{t("TID_NEWS")}</Row>
            <Row className='home-news-inner-list'>
                {makeNews(NewsData.items)}
            </Row>
        </Container>
    )
}

export default NewsList;