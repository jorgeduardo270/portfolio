import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import style from './Home.module.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useDencrypt } from "use-dencrypt-effect";
import NavBar from '../../components/NavBar/NavBar.js';
import BoopText from '../../components/BoopText/BoopText.js';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles((theme) => ({
    button: {
        width: "175px",
        height: "70px",
        backgroundColor: "#000010",
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
        color: "#25D366",
        padding: "0",
    },
    labelMail: {
        color: "#c71610",
        padding: "0",
    },
    icon: {
        color: "#EFEFEF",
        marginRight: "20%",
        marginLeft: "5%",
        transform: "scale(1.5)",
        paddingLeft: "0",
    },
}));

const mainTitleText = [
    "Hello!",
    "My name is Jorge,",
    "And I am a Software Developer"
];
const aboutMeTitle = ["About me"];

function HomeScreen (props) {
    const classes = useStyles();
    const values = ["C++", "C# - Unity", "React JS", "Assembly", "Phyton"];
    const { result, dencrypt } = useDencrypt();

    useEffect(() => {
        AOS.init();
        AOS.refresh();

        let i = 0;
        const action = setInterval(() => {
            dencrypt(values[i]);
            i = i === values.length - 1 ? 0 : i + 1;
        }, 2000);
        return () => clearInterval(action);
    }, []);

    return <div>
        <NavBar ></NavBar>
        <div className={style.homeScreenTitle}>
            <div className={style.leftElements}>
                <BoopText titleText={mainTitleText} fade="fade-right"/>
            </div>
            <div className={style.rightElements}>
                <p className="TextWhite">
                    {result}
                </p>
            </div>
            <div className={style.whatsappSection}>
                <Button
                    href="https://wa.me/5218781338974"
                    variant="contained"
                    className={classes.button}
                    classes={{
                        root: classes.root,
                        label: classes.label, 
                        startIcon: classes.icon,
                    }}
                    startIcon={<WhatsAppIcon />}
                >
                    Colaborate
                </Button>
                <Button
                    href="mailto:jorge.eduardo.delatorre.maldonado@gmail.com"
                    variant="contained"
                    className={classes.button}
                    classes={{
                        root: classes.root,
                        label: classes.labelMail, 
                        startIcon: classes.icon,
                    }}
                    startIcon={<MailOutlineIcon />}
                >
                    Contact
                </Button>
            </div>
        </div>
        <div className={style.ultimosProyectos}>
            <p className="QueparBlack">
                <BoopText titleText={aboutMeTitle} />
            </p>
        </div>
    </div>;
};

export default HomeScreen;