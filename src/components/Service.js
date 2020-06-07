import React from 'react';

function Service (props) {
    return (
        <div className='service-header-box' onClick={props.onClick}>
            <div className='service-header-container'>
                <img className='service-header-image' src={props.img} alt={props.img}/>
            </div>
            <p className='services-header-name'>{props.name}</p>
        </div>
    )
}

export default Service;