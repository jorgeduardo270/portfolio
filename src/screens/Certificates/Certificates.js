import React from 'react';
import BoopText from '../../components/BoopText/BoopText.js';
import NavBar from '../../components/NavBar/NavBar.js';
import styles from './Certificates.module.css';

const aboutMeTitle = ["Certificates"];


function CertificatesScreen (props) {

    return <div>
        <NavBar ></NavBar>
        <div className={styles.homeScreenTitle}>
            <div className={styles.titleSection}>
                <BoopText titleText={aboutMeTitle}/>
            </div>
        </div>
    </div>
};

export default CertificatesScreen;