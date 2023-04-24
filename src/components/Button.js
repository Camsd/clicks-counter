import React from 'react';
import '../stylesheet/Button.css';

function Button(props){
    return(
        <button className={ props.isClickButton ? "click-button" : "restartCounter" }
        onClick={props.clickEvent}>
            {props.text}
        </button>
    )
}

export default Button;