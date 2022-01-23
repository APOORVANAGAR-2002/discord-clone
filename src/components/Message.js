import { Avatar } from '@mui/material';
import './Message.css';

export default function Message() {
    return (
        <div className='message'>
            <Avatar />
            <div className='message_info'>
                <h4>Username<span className='message_timeStamp'>TimeStamp</span></h4>
                <p>message</p>
            </div>
        </div>
    )
}