import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

function EuTopBar(props) {
    return (
        <Container className='eu-shit' fluid={true}>
            <Row xs={2} md={2}>
                <div>
                    <img className='eu-shit-left' key={"/dna/media/eu/" + props.language + "/logo_eu_brand.png"} src={"/dna/media/eu/" + props.language + "/logo_eu_brand.png"} alt={"/dna/media/eu/" + props.language + "/logo_eu_brand.png"} />
                </div>
                <div className='eu-shit-right-top'>
                    <img className='eu-shit-right' key={"/dna/media/eu/" + props.language + "/logo-right.jpg"} width="auto" src={"/dna/media/eu/" + props.language + "/logo-right.jpg"} alt={"/dna/media/eu/" + props.language + "/logo-right.jpg"} />
                </div>
            </Row>
        </Container>
    )
}

export default EuTopBar;