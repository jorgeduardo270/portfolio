import React from 'react';
import BoopText from '../../components/BoopText/BoopText.js';
import NavBar from '../../components/NavBar/NavBar.js';
import styles from './Portfolio.module.css';

const portfolioTitle = ["Projects"];


function PortfolioScreen (props) {

    return <div>
        <NavBar ></NavBar>
        <div className={styles.homeScreenTitle}>
            <div className={styles.titleSection}>
                <BoopText titleText={portfolioTitle}/>
            </div>
        </div>
    </div>
};

export default PortfolioScreen;