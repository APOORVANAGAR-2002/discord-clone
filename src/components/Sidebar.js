import React, { useContext } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import { Avatar } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';
import './Sidebar.css';
import { UserContext } from '../App';
import { firebase } from "../utils/firebase";
import 'firebase/compat/auth';


function Sidebar() {
    let { user } = useContext(UserContext)
    
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <h3>{user ? user.displayName: undefined}</h3>
                <ExpandMoreIcon />
            </div>

            <div className='sidebar_channels'>
                <div className='sidebar_channelHeader'>
                    <div className='sidebar_header'>
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>

                    <AddIcon className='sidebar_addChannelsIcon' />
                </div>
                <div className='sidebar_channelsList'>
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>
            {/* Sidebar section-2 */}
            <div className='sidebar_voice'>
                <SignalCellularAltIcon className='cellular_voiceIcon' fontSize='large' />
                <div className='sidebar_voiceInfo'>
                    <h4>Voice connected</h4>
                    <p>Stream</p>
                </div>
                <div className='sidebar_voiceIcons'>
                    <InfoIcon  />
                    <CallIcon />
                </div>
            </div>
            {/* SIdebar section-3 */}
            <div className='sidebar_profile'>
                <Avatar className='sidebar_profileAvatar' onClick={() => firebase.auth().signOut()} src={user.photo }/>
                <div className='sidebar_profileInfo'>
                    <h5>{user.displayName }</h5>
                    <p>#{user.uid.substring(0, 5)}</p>
                </div>
                <div className='sidebar_profileIcons'>
                    <MicIcon fontSize='small' />
                    <HeadsetIcon fontSize='small' />
                    <SettingsIcon fontSize='small'/>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;