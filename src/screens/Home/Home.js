import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import style from './Home.module.css';
import LogoQuepar from '../../images/quepar/QueparLogoBlue.png';
import Button from '@material-ui/core/Button';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        width: "200px",
        height: "70px",
        backgroundColor: "#434343",
        textTransform: "none",
        fontWeight: "600",
        borderRadius: "20px",
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
    icon: {
        color: "#EFEFEF",
        marginRight: "20%",
        marginLeft: "5%",
        transform: "scale(1.5)",
        paddingLeft: "0",
    },
}));

function HomeScreen (props) {
    const classes = useStyles();

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return <div>
        <div className={style.homeScreenTitle}>
            <div className={style.leftElements}>
                <p className="TextWhite" data-aos="fade-right" data-aos-delay="0">
                    Hi, 
                </p>
                <p className="TextWhite" data-aos="fade-left" data-aos-delay="0">
                    I´m Jorge
                </p>
                <p className="TextWhite" data-aos="fade-up" data-aos-delay="0">
                    Software Developer
                </p>
            </div>
            <div className={style.whatsappSection}>
                <Button
                    href="https://wa.me/5218781338974"
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    classes={{
                        root: classes.root,
                        label: classes.label, 
                        startIcon: classes.icon,
                    }}
                    startIcon={<WhatsAppIcon />}
                >
                    Cuéntanos que buscas
                </Button>
            </div>
        </div>
        <div className={style.ultimosProyectos}>
            <p className="QueparBlack">
                últimos proyectos
            </p>
        </div>
    </div>;
};

export default HomeScreen;