import React, { useState }  from 'react';
import BoopText from '../../components/BoopText/BoopText.js';
import NavBar from '../../components/NavBar/NavBar.js';
import style from './Portfolio.module.css';
import ProjectViewer from '../../components/ProjectViewer/ProjectViewer.js';
import {projectsData} from './Data.js';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import LanguageIcon from '@material-ui/icons/Language';
import ComputerIcon from '@material-ui/icons/Computer';
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

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
    rootList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: "transparent",
    },
    gridList: {
        width: 1000,
    },
    iconList: {
        color: '#08FDD9',
    },
    gridListItem: {
        '&:hover': { 
            cursor: "pointer",
        },
    },
}));

function PortfolioScreen (props) {
    const classes = useStyles();
    const [projectIndex, setProjectIndex] = useState(0);
    const [currProjectList, setCurrProjectlist] = useState(projectsData || []);

    const setNewProjectIndex = (index) => {
        if(index >= 0 && index < currProjectList.length){
            setProjectIndex(index);
        }
    }

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
                <ProjectViewer project={currProjectList[projectIndex]}>
                </ProjectViewer>
            </div>

            <div className={style.projectsList}>
                <div className={classes.rootList}>
                    <GridList cellHeight={300} className={classes.gridList}>
                        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        </GridListTile>
                        {currProjectList.map((tile, index) => (
                        <GridListTile 
                            onClick = {() => setNewProjectIndex(index)}
                            key={tile.title} 
                            className={classes.gridListItem}>
                            <img src={tile.images[0]} alt={tile.title} />
                            <GridListTileBar
                            title={tile.title}
                            subtitle={<span>-{tile.date}</span>}
                            actionIcon={
                                <IconButton aria-label={`info about ${tile.title}`} className={classes.iconList}>
                                    <OpenInNewIcon />
                                </IconButton>
                            }
                            />
                        </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>
        </div>
    </div>
};

export default PortfolioScreen;