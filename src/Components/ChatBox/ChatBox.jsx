import React from 'react'
import './ChatBox.css'
import assets from '../../assets/assets'

const ChatBox = () => {
  return (
    <div className='chat-box'>
      <div className="chat-user">
        <img src={assets.profile_img} alt="" />
        <p>Fcukard <img src={assets.green_dot} alt="" /></p>
        <img src={assets.help_icon} className='help' />
      </div>
      
    </div>
  )
}

export default ChatBox
