import React from 'react';
import { Carousel, Container, Col, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import { SRLWrapper } from 'simple-react-lightbox';
import DOMPurify from 'dompurify';

function makeSlideshow (items) {
    return items.map(item => {
        return  <Carousel.Item key={item}>
                    <img
                        className="d-block w-100"
                        src={item}
                        alt={item}
                    />
                </Carousel.Item>
    })
}

function makeCol(items) {
    return items.map(item => {
        return  <Col key={item} className='project-view-grid'>
                    <a href={item}  data-attribute="SRL">
                        <img src={item} width="100%" alt={item} />
                    </a>
                </Col>
    })
}

function makeRow(items) {
    return items.map(item => {
        return  <Row key={item} className='project-view-grid'>
                    {makeCol(item)}
                </Row>
    })
}

function makeProject (items) {
    return items.map(item => {
        if (item.type === 'text')
        {
            return <div key={item.text} className='project-view-text' dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(item.text)} }/>
        }
        else if (item.type === 'image')
        {
            return <img key={item.img} src={item.img} width="100%" alt={item.img} />
        }
        else if (item.type === 'grid')
        {
            return  <Container key={item}>
                        {makeRow(item.content)}
                    </Container>
        }

        return <p key={item}>missing type</p>
    })
}

function findProject(project) {
    return project.link === this;
}

const options = {
    settings: {
        disablePanzoom: true,
        disableWheelControls: true
    },
    buttons: {
        showAutoplayButton: false,
        showDownloadButton: false,
        showThumbnailsButton: false,
        showFullscreenButton:false
    },
    caption: {
        showCaption: false
    },
    thumbnails: {
        showThumbnails: false
    },
    progressBar: {
        showProgressBar: false
    }
};

function ProjectView (props)  {
    let link = useLocation().pathname.substring(props.startIndex);
    let index = props.projects.findIndex(findProject, link);
    let project = props.projects[index];
    return (
        <div>
            <SRLWrapper options={options}>
                <Carousel indicators={false} key={project.link} className='news-carousel'>
                    {makeSlideshow(project.slideshow)}
                </Carousel>
                <Container key={"project" + index} className='project-view-container'>
                    {makeProject(project.views)}
                </Container>
            </SRLWrapper>
        </div>
    )
}

export default ProjectView;