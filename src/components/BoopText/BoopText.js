import React from 'react';
import style from './BoopText.module.css';
import Boop from '../../hooks/Boop/Boop.js';

const BoopText = (props) => {
    let ElementToDisp = props.titleText?.map(element => {
        let innerElement = element.split("").map((letter, index) => {
            if(letter == " "){
                return <p 
                    className={style.spaceP} 
                    key={index}> 
                    &nbsp;
                </p>;
            }else{
                return <Boop 
                            key={index + letter}
                            y={-20} 
                            scale={2} 
                            rotation={5} 
                            className={style.boopLetter}>
                    {letter}
                </Boop>;
            }
        })
        return <div className="TextWhite" key={element[0]} data-aos={props.fade || ""} data-aos-delay="500">
            {innerElement}
        </div>
    });

    return ElementToDisp;
}

export default BoopText;