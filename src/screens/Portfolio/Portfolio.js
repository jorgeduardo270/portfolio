import React from 'react';
import BoopText from '../../components/BoopText/BoopText.js';
import NavBar from '../../components/NavBar/NavBar.js';
import style from './Portfolio.module.css';
import ProjectViewer from '../../components/ProjectViewer/ProjectViewer.js';
import {projectsData} from './Data.js';

const portfolioTitle = ["Projects"];


function PortfolioScreen (props) {

    return <div>
        <NavBar ></NavBar>
        <div className={style.projectScreen}>
            <div className={style.titleSection}>
                <BoopText titleText={portfolioTitle}/>
            </div>
            <div className={style.projectFocus}>
                <ProjectViewer project={projectsData[0]}>
                </ProjectViewer>
            </div>
        </div>
    </div>
};

export default PortfolioScreen;