import React from 'react';
import BoopText from '../../components/BoopText/BoopText.js';
import NavBar from '../../components/NavBar/NavBar.js';
import style from './Certificates.module.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';
import { tileData, tileDataUnity, tileDataGame, tileDataOthers } from './Data.js';

const aboutMeTitle = ["Certificates"];

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: "100%",
      height: "auto",
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    titleBar: {
      background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      color: 'white',
    },
}));

function CertificatesScreen (props) {
    const classes = useStyles();

    return <div>
        <NavBar ></NavBar>
        <div className={style.homeScreenTitle}>
            <div className={style.titleSection}>
                <BoopText titleText={aboutMeTitle}/>
            </div>

            <div className={style.certificatesData}>
                <GridList cellHeight={500} spacing={5} className={classes.gridList}>
                    {tileData.map((tile) => (
                    <GridListTile key={tile.key} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
                        <img src={tile.img} alt={tile.title} className={style.containedimage}/>
                    </GridListTile>
                    ))}
                </GridList>

                <GridList cellHeight={500} spacing={5} className={classes.gridList}>
                    {tileDataUnity.map((tile) => (
                    <GridListTile key={tile.key} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
                        <img src={tile.img} alt={tile.title} className={style.containedimage}/>
                    </GridListTile>
                    ))}
                </GridList>

                <GridList cellHeight={500} spacing={5} className={classes.gridList}>
                    {tileDataGame.map((tile) => (
                    <GridListTile key={tile.key} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
                        <img src={tile.img} alt={tile.title} className={style.containedimage}/>
                    </GridListTile>
                    ))}
                </GridList>

                <GridList cellHeight={500} spacing={5} className={classes.gridList}>
                    {tileDataOthers.map((tile) => (
                    <GridListTile key={tile.key} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
                        <img src={tile.img} alt={tile.title} className={style.containedimage}/>
                    </GridListTile>
                    ))}
                </GridList>
            </div>
        </div>
    </div>
};

export default CertificatesScreen;