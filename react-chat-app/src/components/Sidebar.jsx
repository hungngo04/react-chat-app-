import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chat from './Chat'
import Chats from './Chats'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Navbar />
        <Search />
        <Chats />
    </div>
  )
}

export default Sidebar