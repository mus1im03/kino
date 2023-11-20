import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/img/logo.png'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className={styles.header_block}>
                <div className={styles.img_block}>
                    <img src={logo} alt="logo" />
                </div>
                <ul className={styles.categories}>
                    <li href="" className='nav'>Главная</li>
                    <li href="" className='nav'>Жанры</li>
                    <li href="" className='nav'>Фильмы</li>
                    <li href="" className='nav'>Сериалы</li>
                    <li href="" className='nav'>Мультфильмы</li>
                </ul>
                <div className={styles.right_block}>
                    <input type="text" id="" />
                    <button>ВОЙТИ</button>
                </div>
            </div>
        </header>
    );
};

export default Header;