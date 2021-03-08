import React from 'react';

import style from './ProjectViewer.module.css';

function ProjectViewer (props) {

    return <div className={style.projectViewer}>
            <img alt={props.title} src={props.project.images[0]} className={style.focusImage}/>
            <div className={style.rightContent}>
                
                <p className={style.projectTitle}>
                    {props.project.title}
                </p>
                <p>
                    {props.project.description}
                </p>
                <a href={props.project.link} className={style.projectLink}>
                    Link: {props.project.link}
                </a>
            </div>
    </div>
};

export default ProjectViewer;