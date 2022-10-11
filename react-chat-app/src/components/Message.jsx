import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import Messages from './Message'

export const Message = ({message}) => {
  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  console.log(message);
  return (
    <div className='message owner'>
        {/* <div className="messageInfo">
            <img 
              src= 
              alt="" 
            />
        </div>
        <div className="messageContent">
            <p>Hello</p>
            <img src="https://scontent.fagc2-1.fna.fbcdn.net/v/t39.30808-6/295616638_1885293221661202_2713436079708140835_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Z_URdAkXmN0AX-6j3T9&_nc_ht=scontent.fagc2-1.fna&oh=00_AT-OUnLg5a8BjIyfx7LY6UHNJPOmfMqiauTCoeFLZHoiag&oe=63472D96" alt="" />
        </div> */}
    </div>
  )
}

export default Message;
