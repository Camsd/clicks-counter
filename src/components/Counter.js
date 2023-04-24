import React from "react";
import '../stylesheet/Counter.css';

function Counter(props){
    return (
        <div className="counter">
            {props.numClicks}
        </div>
    );
}

export default Counter;