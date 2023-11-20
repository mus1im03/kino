import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/img/reposition_iviLogoPlateRounded.svg'

const Header = () => {
    return (
        <header>
            <div className="header_block">
                <div className="img_block">
                    <img src={logo} alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;