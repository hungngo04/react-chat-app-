import React from 'react'
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Message from './Message'

export const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    })

    return () => {
      unsub();
    }
  }, [data.chatId]);

  return (
    <div className="messages">
      {messages.map(m => (
       <Message message={m} key={m.id}/>
      ))}
    </div>
  )
}

export default Messages
