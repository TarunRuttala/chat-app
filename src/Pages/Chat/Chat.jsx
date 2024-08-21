import React from 'react'
import './Chat.css'
import LeftSideBar from '../../Components/LeftSidebar/LeftSideBar'
import ChatBox from '../../Components/ChatBox/ChatBox'
import RightSideBar from '../../Components/RightSidebar/RightSideBar'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-container">
        <LeftSideBar />
        <ChatBox />
        <RightSideBar />
      </div>
    </div>
  )
}

export default Chat
