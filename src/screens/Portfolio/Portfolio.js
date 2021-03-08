import React from 'react';
import BoopText from '../../components/BoopText/BoopText.js';
import NavBar from '../../components/NavBar/NavBar.js';
import style from './Portfolio.module.css';
import ProjectViewer from '../../components/ProjectViewer/ProjectViewer.js';
import {projectsData} from './Data.js';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import LanguageIcon from '@material-ui/icons/Language';
import ComputerIcon from '@material-ui/icons/Computer';
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';

const portfolioTitle = ["Projects"];

const useStyles = makeStyles((theme) => ({
    button: {
        width: "175px",
        height: "70px",
        backgroundColor: "transparent",
        textTransform: "none",
        fontWeight: "600",
        borderRadius: "20px",
        marginRight: "20px",
        '&:hover': { 
            backgroundColor: "#286BB0FF",
        },
    },
    root: {
        color: "#E06566",
    },
    label: {
        color: "#08FDD9",
        padding: "0",
    },
    icon: {
        color: "#08FDD9",
        marginRight: "20%",
        marginLeft: "5%",
        transform: "scale(2)",
        paddingLeft: "0",
        '&:hover': { 
            transform: "scale(3)",
        },
    },
}));

function PortfolioScreen (props) {
    const classes = useStyles();

    return <div>
        <NavBar ></NavBar>
        <div className={style.projectScreen}>
            <div className={style.titleSection}>
                <BoopText titleText={portfolioTitle}/>
            </div>

            <div className={style.projectSectionsButtons}> 
                <Button
                    href="https://wa.me/5218781334204"
                    variant="contained"
                    className={classes.button}
                    classes={{
                        root: classes.root,
                        label: classes.label, 
                        startIcon: classes.icon,
                    }}
                    startIcon={<ComputerIcon />}
                >
                    C++
                </Button>
                <Button
                    href="mailto:jorge.eduardo.delatorre.maldonado@gmail.com"
                    variant="contained"
                    className={classes.button}
                    classes={{
                        root: classes.root,
                        label: classes.label, 
                        startIcon: classes.icon,
                    }}
                    startIcon={<LanguageIcon />}
                >
                    Web 
                </Button>
                <Button
                    href="mailto:jorge.eduardo.delatorre.maldonado@gmail.com"
                    variant="contained"
                    className={classes.button}
                    classes={{
                        root: classes.root,
                        label: classes.label, 
                        startIcon: classes.icon,
                    }}
                    startIcon={<MobileScreenShareIcon />}
                >
                    Others 
                </Button>
            </div>

            <div className={style.projectFocus}>
                <ProjectViewer project={projectsData[0]}>
                </ProjectViewer>
            </div>

            <div className={style.projectsList}>
                <ImageList className={classes.root}>
                    <ImageListItem key="Subheader" cols={2}>
                        <ListSubheader component="div">December</ListSubheader>
                    </ImageListItem>
                    {projectsData.map((item) => (
                        <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format 1x,
                                ${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                            actionIcon={
                            <IconButton
                                aria-label={`info about ${item.title}`}
                                className={classes.icon}
                            >
                                <InfoIcon />
                            </IconButton>
                            }
                        />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </div>
    </div>
};

export default PortfolioScreen;