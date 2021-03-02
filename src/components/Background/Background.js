import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import Rellax from "rellax";

import styles from './Background.module.css';
import {
    breatheAnim, 
    verticalMoveAnim,
    rotationAnim,
    horizontalMoveAnim,
    horizontalMoveAndRotationAnim,
    verticalMoveAndRotationAnim} from './BackgroundStyles.js';


const ImageBackground = styled.img`
    width: ${props => props.size ? props.size+"px" : "100px"};
    height: auto;
    position: relative;
    animation-name: ${props => props.anim ? props.anim : rotationAnim};
    animation-duration: ${props => props.animDur ? props.animDur+"s" : "25s"};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`

const ImageContainer = styled.span`
    position: absolute;
    top:    ${props => props.top ?      props.top+"%"    : "0%"};
    bottom: ${props => props.bottom ?   props.bottom+"%" : "0%"};
    left:   ${props => props.left ?     props.left+"%"   : "0%"};
    right:  ${props => props.right ?    props.right+"%"  : "0%"};
`

function Background (props){
    const rellaxRef = useRef();

    useEffect(() => {
      new Rellax(".slowerScroll", { 
        speed: -10,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });
    }, []);

    let anims = [
        breatheAnim,
        verticalMoveAnim,
        rotationAnim,
        verticalMoveAndRotationAnim,
        horizontalMoveAnim,
        horizontalMoveAndRotationAnim
    ];

    let body = []
    for(var i=0; i<27; i++){
        body.push(  <ImageContainer 
                        key= {Math.floor(Math.random() * 10000)}
                        className="slowerScroll Background"
                        bottom= {Math.floor(Math.random() * 100)}
                        left=   {Math.floor(Math.random() * 100) -5}
                        right=  {Math.floor(Math.random() * 100)}
                        top=    {Math.floor(Math.random() * 100) -5}>
                        <ImageBackground 
                            anim = {anims[Math.floor(Math.random() * anims.length)]}
                            animDur = {Math.floor(Math.random() * 30 + 15)}
                            size= {Math.floor(Math.random() * 500)}
                            src="https://i.imgur.com/kDDFvUp.png" 
                            alt="BackImg"/>
                    </ImageContainer>);
    }

    return <div className={styles.body} ref={rellaxRef}>
        {body}
        {props.children}
    </div>;
};

export default Background;