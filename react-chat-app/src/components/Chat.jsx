import React from 'react'
import '../style.scss'
import cam from '../img/cam.png'
import add from '../img/add.png'
import more from '../img/more.png'


export const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Hung</span>
        <div className="chatIcons">
          <img src={cam} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Chat 