import React from 'react';
import { Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Employee (props) {
    const { t } = useTranslation();
    return (
        <Col className='center-col'>
            <div className='employee'>
                { props.selected 
                ?   <div className='employee-tint'>
                        <img className='about-us-employee-image-selected' src={props.img} alt={props.name}/>
                    </div>
                :   <img onClick={(e) => props.onClick(e)} className='about-us-employee-image' src={props.img} alt={props.name}/> }
                
                <p className='about-us-employee-text'>{t(props.name)}</p>
                <p className='about-us-employee-text'>{t(props.title)}</p>
            </div>
        </Col>
    )
}

export default Employee;