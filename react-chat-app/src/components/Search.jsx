import React, { useState } from 'react'
import {
    collection,
    query,
    where,
    getDocs,
    setDoc,
    doc,
    updateDoc,
    serverTimestamp,
    getDoc,
  } from "firebase/firestore";
  import { db } from "../firebase";
import { useContext } from 'react';
import { AuthContext } from "../context/AuthContext";

const Search = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false); 

    const {currentUser} = useContext(AuthContext);

    const handleSearch = async () => {
        const q = query(
            collection(db, "users"), 
            where("displayName", "==", username)
        );

        try{
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data())
            });
        } catch (err){
            setErr(true);
        }        
    }

    const handleKey = e => {
        e.code === 'Enter' && handleSearch();
    };

    const handleSelect = async () => {
        //check if a chat is already existed
        const combineId = 
            currentUser.uid > user.uid
                ? currentUser.uid + user.uid
                : user.uid + currentUser.uid;
                try{
                    const res = await getDoc(doc(db, "chats", combineId));
                    
                    if(!res.exist()){
                        //create new chat
                        await setDoc(doc(db, "chats", combineId), { messsage: [] });

                        //create user chat 
                        userChats:{

                        }
                    }
                } catch(err){}
                setUser(null);
                setUsername("");
        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
            [combineId+".userInfo"] : {
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL
            },
            [combineId+".userDate"] : serverTimestamp()
        });

        await updateDoc(doc(db, "userChats", user.uid), {
            [combineId+".userInfo"] : {
                uid: currentUser.uid,
                displayName: currentUser.displayName,
                photoURL: currentUser.photoURL
            },
            [combineId+".userDate"] : serverTimestamp()
        });
    }

    return (
        <div className="search">
            <div className="searchForm">
                <input 
                    type="text" 
                    placeholder='Search messages or users' 
                    onKeyDown={handleKey} 
                    onChange={e=>setUsername(e.target.value)}
                    value={username}
                />
            </div>
            <div className='recent'>
                <p>Recents</p>
            </div>
            {err && <span>User not found</span>}
            {user && <div className="userChat" onClick={handleSelect}>
                <img src={user.photoURL} alt="" />
                <div className="userChatInfo">
                    <span><b>{user.displayName}</b></span>
                </div>
            </div> }
        </div>
    )
}

export default Search