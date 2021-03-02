import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {NavLink as RouterLink} from  "react-router-dom";
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AirplayIcon from '@material-ui/icons/Airplay';
import AssignmentIcon from '@material-ui/icons/Assignment';
import BookIcon from '@material-ui/icons/Book';

const useStyles = makeStyles({
  root: {
    position: "fixed",
    top: "4.5%",
    zIndex: "1",
    fontSize: "25px",
  },
  wrapper: {
    fontSize: "15px",
    color: "white",
  },
  icon: {
    color: "#EFEFEF",
    marginRight: "20%",
    transform: "scale(1.25)",
    paddingLeft: "0",
  },
  classLink: {
      color: "white !important",
      textDecoration: "none",
      textTransform: "none",
  },
  button: {
    boxShadow: "0 4px 2px -2px gray",
    width: "150px",
  },
  butonLabel: {
    color: "white !important",
    textDecoration: "none",
    textTransform: "none",
  },
});

const sectionsNavBar = [
    {
        text: "Projects",
        url: "projects",
        icon: <AirplayIcon />,
    },
    {
        text: "Certificates",
        url: "certificates",
        icon: <BookIcon />,
    },
    {
        text: "Resume",
        url: "resume",
        icon: <AssignmentIcon />,
    },
];

export default function CenteredTabs() {
  const classes = useStyles();

  return (
    <Grid
        className={classes.root} 
        container 
        alignContent = "center"
        alignItems = "center"
        justify = "center"
        direction="row">
    {
        sectionsNavBar.map(element => {
            return <Grid 
                    container item 
                    sm={2} xs={12} 
                    spacing={5}  
                    alignContent = "center"
                    alignItems = "center"
                    justify = "center" 
                    key={element.url}>
                        <RouterLink
                                className={classes.classLink}
                                to={element.url}>
                            <Button
                                className={classes.button}
                                classes={{
                                    startIcon: classes.icon,
                                    label: classes.butonLabel,
                                }}
                                startIcon={element.icon}>
                                {element.text}
                            </Button>       
                        </RouterLink>
                    </Grid>   
        })
    }
    </Grid>
  );
}