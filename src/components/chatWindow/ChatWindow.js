import React, {useState} from 'react';
import './ChatWindow.css'
import EmojiPicker from 'emoji-picker-react';
import BgWpp from './bg-wpp.png'

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import CloseIcon from '@material-ui/icons/Close'
import SendIcon from '@material-ui/icons/Send'
import MicIcon from '@material-ui/icons/Mic'

export default () => {


  const [emojiOpen, setEmojiOpen] = useState(false);

  const handleEmojiClick = () => { 
    
   }

  return(
    <div className="ChatWindow">
      <div className="ChatWindow-header">

          <div className="ChatWindow-headerinfo">
              <img className="ChatWindow-avatar" src="https://img.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg?size=338&ext=jpg" alt="" />
              <div className="ChatWindow-name"> Edu </div>
          </div>

          <div className="ChatWindow-headerbuttons">

            <div className="ChatWindow-btn">
                <SearchIcon style={{ color: '#919191'}}/>
            </div>

            <div className="ChatWindow-btn">
                <AttachFileIcon style={{ color: '#919191'}}/>
            </div>

            <div className="ChatWindow-btn">
                <MoreVertIcon style={{ color: '#919191'}}/>
            </div>

          </div>

      </div>
      <div className="ChatWindow-body">

      </div>

      <div className="ChatWindow-emojiarea" 
      style={{height: emojiOpen ? '200px' : '0px'}}
      >
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </div>
      <div className="ChatWindow-footer">

          <div className="ChatWindow-pre">

          <div className='ChatWindow-btn'>
                <CloseIcon  style={{color:' #919191'}}/>
               </div>
            <div className='ChatWindow-btn'>
                <InsertEmoticonIcon  style={{color:' #919191'}}/>
               </div>

          </div>

          <div className="ChatWindow-inputarea">
            <input
             type="text" 
             className="ChatWindow-input"
             placeholder="Envie uma mensagem"
             />
          </div>

          <div className="ChatWindow-pos">
          <div className='ChatWindow-btn'>
                <SendIcon  style={{color:' #919191'}}/>
               </div>
          </div>

      </div>
    </div>
  );
}