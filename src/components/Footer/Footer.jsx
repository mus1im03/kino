import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer_container}>
                <div className={styles.footer_content}>
                    <div className={styles.footer_colum}>
                        <span className={styles.name_colum}>О нас</span>
                        <ul>
                            <li>О компании</li>
                            <li>Вакансии</li>
                            <li>Программа бета-тестирования</li>
                            <li>Политика конфиденциальности</li>
                            <li>На Иви применяются рекомендательные технологии</li>
                            <li>Комплаенс</li>
                        </ul>
                    </div>
                    <div className={styles.footer_colum}>
                        <span className={styles.name_colum}>Разделы</span>
                        <ul>
                            <li>Что нового</li>
                            <li>Фильмы</li>
                            <li>Сериалы</li>
                            <li>Мультфильмы</li>
                            <li>TV+</li>
                        </ul>
                        <div>
                            <a className={styles.activacia}>Активация сертификата</a>
                        </div>
                    </div>
                    <div>
                        <span className={styles.name_colum}>Служба поддержки</span>
                        <div className={styles.footer_description}>
                            <span className={styles.support_text}>Мы всегда готовы вам помочь.</span>
                            <span className={styles.support_text}>Наши операторы онлайн 24/7</span>
                        </div>
                        <div className={styles.footer_support}>
                            <button className={styles.message}>
                                Написать в чате
                            </button>
                            <div className={styles.footer_support_button}>
                                <a href="" className={styles.suppport_button_icon}>
                                    <div className={styles.nbl_icon}></div>
                                </a>
                                <a href="" className={styles.suppport_button_icon}>
                                    <div className={styles.nbl_icon}></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;