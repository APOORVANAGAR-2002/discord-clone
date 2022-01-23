import ChatHeader from './ChatHeader'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifBoxIcon from '@mui/icons-material/GifBox';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import './Chat.css'
import Message from './Message';

export default function Chat() {
    return (
        <div className='chat'>
            <ChatHeader />

            <div className='chat_messages'>
                <Message />
            </div>

            <div className='chat_input'>
                <AddCircleIcon />
                <form>
                    <input placeholder='Message #channel-name' />
                </form>
                <button className='chat_inputButton'></button>
                <div className='chat_inputIcons'>
                    <CardGiftcardIcon />
                    <GifBoxIcon />
                    <EmojiEmotionsIcon />
                    <InsertDriveFileIcon />
                </div>
            </div>
        </div>
    )
}