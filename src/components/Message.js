import { Avatar } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from '../App';
import './Message.css';

export default function Message() {
    const { user } = useContext(UserContext);

    return (
        <div className='message'>
            <Avatar />
            <div className='message_info'>
                <h4>{user.displayName}<span className='message_timeStamp'>TimeStamp</span></h4>
                <p>message</p>
            </div>
        </div>
    )
}