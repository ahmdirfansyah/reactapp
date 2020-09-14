import React from 'react';
import PropTypes from 'prop-types';

import JoinButton from '../JoinButton/JoinButton';

import {Bg, Desc, Went} from "./PastMeetUpCard.style";

// import './PastMeetupCard.css';


const PastMeetupCard = ({date, desc,attendees}) => {
    return (
        <Bg>
            <Desc>
                <b>{date}</b>
                <hr></hr>
                <br></br>
                <p>{desc}</p>
                <p>{attendees} &nbsp;<Went>went</Went></p>
                <JoinButton primary="primary" text="View" />
            </Desc>
        </Bg>
    );
}

PastMeetupCard.propTypes = {
    date: PropTypes.string.isRequired, 
    desc : PropTypes.string.isRequired,
    attendees : PropTypes.number.isRequired,
};


export default PastMeetupCard;