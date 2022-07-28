import React from 'react';
import logo from '../../images/logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <nav>
                <img className='logo' src={logo} alt="" />
                <a href="/categories"><small>Categories</small></a>
                <input type="text" placeholder='Search anything here ...' />
                <a href="/log-in"><small className='log-sign'>Log in</small></a>
                <a href="/sign-up"><small className='log-sign'>Sign up</small></a>
            </nav>
        </div>
    );
};

export default Header;