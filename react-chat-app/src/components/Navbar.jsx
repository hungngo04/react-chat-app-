import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Chats</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/13728847/pexels-photo-13728847.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
                <span>Hung</span>
                <button>Log out</button>
            </div>
        </div>
    )
}

export default Navbar