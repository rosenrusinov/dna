import React from 'react';

import {ReactComponent as LinkedIn} from '../vectors/LinkedIn.svg';
import {ReactComponent as Instagram} from '../vectors/Insta.svg';
import {ReactComponent as Facebook} from '../vectors/Facebook.svg';

function Footer(props) {
    return (
        <div className='footer-container'>
            <div onClick={() => {window.scrollTo(0, 0)}} className='footer-top-text'>
                <i className="arrow up"></i>back to top
            </div>
            <div className='footer-icons-container'>
                <a href="https://www.linkedin.com/" target="_blank" rel='noopener noreferrer'><LinkedIn className='footer-icon'/></a>
                <a href="https://www.instagram.com/" target="_blank" rel='noopener noreferrer'><Instagram className='footer-icon'/></a>
                <a href="https://www.facebook.com/" target="_blank" rel='noopener noreferrer'><Facebook className='footer-icon'/></a>
            </div>
            <p className='footer-bottom-text'>@ DNA Studio 2020 | more then architecture</p>
        </div>
    )
}

export default Footer;