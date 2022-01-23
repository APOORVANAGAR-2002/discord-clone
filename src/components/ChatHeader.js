import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import PushPinIcon from '@mui/icons-material/PushPin';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import SearchIcon from '@mui/icons-material/Search';
import OutboxIcon from '@mui/icons-material/Outbox';
import HelpIcon from '@mui/icons-material/Help';
import './ChatHeader.css';

export default function ChatHeader({ channelName }) {
    return (
        <div className="chat_header">
            <div className="chatHeader_left">
                <h3><span className="chat_headerHash">#</span>{channelName}</h3>
            </div>
            <div className="chatHeader_right">
                <NotificationsIcon />
                <EditLocationAltIcon />
                <PeopleAltIcon />

                <div className='chatHeader_search'>
                    <input placeholder='Search' />
                    <SearchIcon />
                </div>

                <OutboxIcon />
                <HelpIcon />
            </div>
        </div>
    )
}