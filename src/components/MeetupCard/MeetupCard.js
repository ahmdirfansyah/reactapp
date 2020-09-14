import React from 'react';
import {
    WrapperCard,
    Desc
} from './MeetUpCard.style';


import Avatar from '../avatar/avatar';
import JoinButton from '../JoinButton/JoinButton';


const MeetupCard = () => {
    return (
        <WrapperCard>
            <Avatar/>
            <Desc>
            <h1>Hacktiv8 Meetup (Styled Component)</h1>
                <table>
                    <tr>
                        <td>Location</td>
                        <td></td>
                        <td>Jakarta, Indonesia</td>
                    </tr>
                    <tr>
                        <td>Members</td>
                        <td></td>
                        <td>1,078</td>
                    </tr>
                    <tr>
                        <td>Organizers&nbsp; &nbsp; &nbsp;</td>
                        <td></td>
                        <td>Adhy Wiranata</td>
                    </tr>
                </table>
                
                <JoinButton primary="primary" text="Join Us!"></JoinButton>
                <JoinButton text="Subscribe"></JoinButton>
            </Desc>
        </WrapperCard>

    );
    };

export default MeetupCard;