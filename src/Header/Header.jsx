import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/img/logo.png'

const Header = () => {
    return (
        <header>
            <div className="header_block">
                <div className="img_block">
                    <img src={logo} alt="logo" />
                </div>
            </div>
        </header>
    );
};

export default Header;