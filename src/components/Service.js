import React from 'react';
import { useTranslation } from 'react-i18next';

function Service (props) {
    const { t } = useTranslation();
    return (
        <div className={'service-header-box'} onClick={props.onClick}>
            <div className='service-header-container'>
                <img className='service-header-image' src={props.img} alt={props.img}/>
            </div>
            <p className='services-header-name'>{t(props.name)}</p>
        </div>
    )
}

export default Service;