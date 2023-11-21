import React from 'react';
import styles from './MainContent.module.css'
import MovieList from '../Cards/MovieList';

const MainContent = () => {
    return (
        <div className={styles.container}>
           <MovieList /> 
        </div>
    );
};

export default MainContent;