import React from 'react';
import style from './BoopText.module.css';
import Boop from '../../hooks/Boop/Boop.js';

const BoopText = (props) => {
    const space = <p className={style.spaceP}> &nbsp;</p>;

    let ElementToDisp = props.titleText?.map(element => {
        let innerElement = element.split("").map(letter => {
            if(letter == " "){
                return space;
            }else{
                return <Boop y={-20} scale={2} rotation={5}>
                    {letter}
                </Boop>;
            }
        })
        return <div className="TextWhite" data-aos={props.fade || ""} data-aos-delay="500">
            {innerElement}
        </div>
    });

    return ElementToDisp;
}

export default BoopText;