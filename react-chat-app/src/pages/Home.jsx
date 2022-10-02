import React from 'react'
import {SidebarLeft} from '../components/SidebarLeft'
import { Sidebar } from '../components/Sidebar'
import { Chat } from '../components/Chat'
import { Chats } from '../components/Chats'

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <SidebarLeft></SidebarLeft>
                <Sidebar></Sidebar>
                <Chat></Chat>
            </div>
        </div>
    )
}

export default Home
