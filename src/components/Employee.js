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
                
                <p className='about-us-employee-text'>{props.name}</p>
                <p className='about-us-employee-text'>{props.title}</p>
            </div>
        </Col>
    )
}

export default Employee;