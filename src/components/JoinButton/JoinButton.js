import React from 'react';

// import './JoinButton.css';
import {BtnComp} from "./JoinButton.style";

const JoinButton = (props) => {
    return (
    <BtnComp primary={props.primary}>{props.text}</BtnComp>
        // <button className="button">{param.text}</button>
    );
}

export default JoinButton;