import React from 'react'

const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder='Search messages or users'/>
            </div>
            <div className='recent'>
                <p>Recents</p>
            </div>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/13728847/pexels-photo-13728847.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
                <div className="userChatInfo">
                    <span><b>Hung</b></span>
                </div>
            </div>
        </div>
    )
}

export default Search