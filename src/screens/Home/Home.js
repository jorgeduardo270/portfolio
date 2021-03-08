import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import style from './Home.module.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useDencrypt } from "use-dencrypt-effect";
import NavBar from '../../components/NavBar/NavBar.js';
import BoopText from '../../components/BoopText/BoopText.js';
import { Chrono } from "react-chrono";
import {aboutMeInfo} from './Data.js';
import { Element, Link } from "react-scroll";

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LaunchIcon from '@material-ui/icons/Launch';

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
    stickyButton: {
        width: "175px",
        height: "70px",
        backgroundColor: "transparent",
        textTransform: "none",
        fontWeight: "600",
        borderRadius: "20px",
        '&:hover': { 
            backgroundColor: "#286BB0FF",
        },
    },
    labelSticky: {
        color: "#08FDD9",
        padding: "0",
    },
    iconSticky: {
        color: "#08FDD9",
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

const contactMeTitle = ["Contact me"];

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
                <div className={style.whatsappSection}>
                    <Button
                        href="https://wa.me/5218781334204"
                        variant="contained"
                        className={classes.button}
                        classes={{
                            root: classes.root,
                            label: classes.label, 
                            startIcon: classes.icon,
                        }}
                        startIcon={<WhatsAppIcon />}
                    >
                        Phone
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
                        Mail 
                    </Button>
                </div>
            </div>
            <div className={style.rightElements}>
                <p className="TextWhite">
                    {result}
                </p>
            </div>
        </div>

        <Element className={style.ultimosProyectos}  name="aboutMeSection">
            <div className={style.aboutMeTitle}>
                <BoopText titleText={aboutMeTitle} />
            </div>
            <div className={style.aboutMeData}>
                <p>
                As you can see, I am really passionate about what I do. 
                <br/><br/>
                During my career I started working in Hackathons and Entrepreneur challenges, and then jumped to startups and professional experience at big projects with big companies. 
                <br/><br/>
                My goal for the next years is to find a place to stay permanently and be able to get involved full time in a project where I can impact people and learn even more.  
                </p>
            </div>
            <div className={style.aboutMeContent}> 
                <div style={{ width: "100%", height: "100%" }}>
                    <Chrono
                        theme={{primary: "#08FDD9", secondary: "#00009c", cardBgColor: "none", cardForeColor: "#EFEFEF" }}
                        items={aboutMeInfo}
                        mode="VERTICAL"
                    />
                </div>
            </div>
        </Element>

        <Element className={style.ultimosProyectos} name="contactMeSection">
            <div className={style.aboutMeTitle}>
                <BoopText titleText={aboutMeTitle} />
            </div>
            <div className={style.aboutMeData}>
                <p>
                As you can see, I am really passionate about what I do. 
                <br/><br/>
                During my career I started working in Hackathons and Entrepreneur challenges, and then jumped to startups and professional experience at big projects with big companies. 
                <br/><br/>
                My goal for the next years is to find a place to stay permanently and be able to get involved full time in a project where I can impact people and learn even more.  
                </p>
            </div>
            <div className={style.aboutMeContent}> 
                <div style={{ width: "100%", height: "100%" }}>
                    <Chrono
                        theme={{primary: "#08FDD9", secondary: "#00009c", cardBgColor: "none", cardForeColor: "#EFEFEF" }}
                        items={aboutMeInfo}
                        mode="VERTICAL"
                    />
                </div>
            </div>
        </Element>

        <div className={style.stickyLeftButton}>
            <Link
                to="aboutMeSection"
                spy={true}
                smooth={true}
                duration={500}
            >
                <Button
                    variant="contained"
                    className={classes.stickyButton}
                    classes={{
                        root: classes.root,
                        label: classes.labelSticky, 
                        startIcon: classes.iconSticky,
                    }}
                    startIcon={<LaunchIcon />}
                >
    
                        About Me
                </Button>
            </Link>
        </div>

        <div className={style.stickyRightButton}>
            <Link
                to="contactMeSection"
                spy={true}
                smooth={true}
                duration={500}
            >
                <Button
                    variant="contained"
                    className={classes.stickyButton}
                    classes={{
                        root: classes.root,
                        label: classes.labelSticky, 
                        startIcon: classes.iconSticky,
                    }}
                    startIcon={<LaunchIcon />}
                >
                    
                        Contact Me
                </Button>
            </Link>
        </div>
    </div>;
};

export default HomeScreen;