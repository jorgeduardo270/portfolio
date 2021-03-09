import React, { useState, useEffect }  from 'react';
import style from './ProjectViewer.module.css';
import { makeStyles } from '@material-ui/core/styles';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
    icon: {
        width: "75px",
        height: "175px",
        color: "#08FDD9",
        textAlign: "center",
        transition: "all 0.3s linear",
        '&:hover': { 
            color: "#286BB0FF",
            cursor: "pointer",
        },
    },
}));

function ProjectViewer (props) {
    const classes = useStyles();
    const [imageIndex, setImageIndex] = useState(0);
    const [nextDisabled, setNextDisabled] = useState(false);
    const [prevDisabled, setPrevDisabled] = useState(true);
    const maxIndexAllwd = props.project?.video !== "" ? props.project?.images?.length : props.project?.images?.length - 1;
    const hasVideo = props.project?.video !== "";

    useEffect(() => {
        setNextDisabled(false);
        setPrevDisabled(true);
        setImageIndex(0);
    },[props]);

    const nextImage = () => {
        let newIndex = imageIndex + 1;
        if(newIndex <= maxIndexAllwd){
            setImageIndex(newIndex);
            enableDisableArrows(newIndex);
        }
    };

    const prevImage = () => {
        let newIndex = imageIndex - 1;
        if(newIndex >= 0){
            setImageIndex(newIndex);
            enableDisableArrows(newIndex);
        }
    };

    const enableDisableArrows = (newIndex) => {
        if(newIndex <= 0)
            setPrevDisabled(true);
        else
            setPrevDisabled(false);

        if(newIndex === maxIndexAllwd)
            setNextDisabled(true);
        else
            setNextDisabled(false);
    };

    return <div 
            onMouseEnter={() => enableDisableArrows(imageIndex)}
            onMouseLeave={() => {setNextDisabled(true); setPrevDisabled(true);} }
            className={style.projectViewer}>
            <div className={style.leftArrow}>
                {
                    !prevDisabled &&
                    <ArrowBackIosIcon 
                        onClick={() => prevImage()}
                        className={classes.icon}/>
                }
            </div>
            {
                hasVideo && imageIndex === 0 && 
                <iframe 
                    className={style.focusVideo}
                    src={props?.project?.video || "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>
                </iframe>
            }
            {
                (!hasVideo ||  (hasVideo && imageIndex !== 0))&& 
                <img 
                    alt={props?.title || ""} 
                    src={props?.project?.images[hasVideo ? imageIndex - 1 : imageIndex] || ""} 
                    className={style.focusImage}/>
            }

            <div className={style.rightArrow}>
                {
                    !nextDisabled && 
                    <ArrowForwardIosIcon 
                        onClick={() => nextImage()}
                        className={classes.icon}/>
                }
            </div>

            <div className={style.rightContent}>
                
                <p className={style.projectTitle}>
                    {props?.project?.title || ""}
                </p>
                <p className={style.proyectDate}>
                    Year: {props?.project?.date || ""}
                </p>
                <p className={style.projectDescription}>
                    Description: <br/> {props?.project?.description || ""}
                </p>
                <p className={style.projectLanguages}>
                    Languages: <br/> {props?.project?.languages || ""}
                </p>
                <a href={props?.project?.link || ""} className={style.projectLink}>
                    Link: {props?.project?.link || ""}
                </a>

            </div>
    </div>
};

export default ProjectViewer;