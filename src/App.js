import React, {useState, useEffect} from 'react'
import './App.css'
import SearchIcon from '@material-ui/icons/Search';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import ChatIntro from './components/chatIntro/ChatIntro'
import ChatListItem from './components/chat/ChatListItem' 
import ChatWindow from './components/chatWindow/ChatWindow';

export default () => {

  const [chatList, setChatList] = useState([
    {chatId: 1, title: 'Leticia', image: 'https://img.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg?size=338&ext=jpg'},
    {chatId: 2, title: 'Haku', image: 'https://img.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg?size=338&ext=jpg'},
    {chatId: 3, title: 'Chihiro', image: 'https://img.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg?size=338&ext=jpg'},
    {chatId: 4, title: '???', image: 'https://img.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg?size=338&ext=jpg'},
  ]);  
  const [activeChat, setActiveChat] = useState({})

  return(
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img className="header-avatar" src='https://img.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg?size=338&ext=jpg' alt='' />
          <div className="header-buttons">
            <div className="header-btn">
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>
            <div className="header-btn">
              <ChatIcon style={{ color: '#919191' }} />
            </div>
            <div className="header-btn">
              <MoreVertIcon style={{ color: '#919191' }} />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" style={{color: '#919191'}} /> 
            <input type="search" placeholder="Procurar ou começar uma nova conversa"/>
          </div>
        </div>

        <div className="chatList">
        {chatList.map((item,key)=>(
          <ChatListItem 
            key={key}
            data={item}
            active={activeChat.chatId === chatList[key].chatId } // <- Fazendo com que abra o chat de conversa ao clicar no contato
            onClick={() => setActiveChat(chatList[key])}
          />
        ))}
        </div>

      </div>

      <div className="content-area">
        {activeChat.chatId !== undefined &&
          <ChatWindow />
          }
          {activeChat.chatId === undefined &&
          <ChatIntro /> }
          
      </div>
    </div>
  );
}