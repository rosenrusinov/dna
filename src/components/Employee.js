import React from 'react';
import { Col } from 'react-bootstrap';

function Employee (props) {
    return (
        <Col className='center-col'>
            <div className='employee'>
                { props.selected 
                ?   <div className='employee-tint'>
                        <img className='about-us-employee-image-selected' src={props.img} alt={props.name}/>
                    </div>
                :   <img onClick={(e) => props.onClick(e)} className='about-us-employee-image' src={props.img} alt={props.name}/> }
                
                <p className='about-us-employee-text'><b>{props.name}</b></p>
                <p className='about-us-employee-text'><b>{props.title}</b></p>
            </div>
        </Col>
    )
}

export default Employee;