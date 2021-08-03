import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './Sidebar.css';
import SearchIcon from "@material-ui/icons/Search"
import SidebarChat from './SidebarChat'
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined"
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, { auth } from './firebase';
function Sidebar() {
    const user = useSelector(selectUser);
    const [chats, setChats] = useState([]);

    useEffect(() => {
        db.collection('chats').onSnapshot((snapshot) =>
            setChats(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        )
    }, []);


    const addChat = () => {
        const chatName = prompt("enter your good name please");
        if (chatName) {
            db.collection('chats').add({
                chatName: chatName,

            })
        }

    };

    return (
        <div className="sidebar">
            {/* <h2>i am sidebar</h2> */}
            <div className="sidebar_header">
                <Avatar src={user.photo}
                    onClick={() => auth.signOut()}
                    className="sidebar_avtar" />
                <div className="sidebar_input">
                    <SearchIcon />
                    <input placeholder="Search" />
                </div>
              
                <RateReviewOutlinedIcon onClick={addChat} className="sidebar_input_chat" />
               

            </div>
            <div className="sidebar_chat">
                {chats.map(({ id, data: { chatName } }) => (
                    <SidebarChat key={id} id={id} chatName={chatName} />
                ))}
                {/* <SidebarChat />
<SidebarChat />
<SidebarChat />
<SidebarChat />
<SidebarChat />
<SidebarChat />
<SidebarChat />
<SidebarChat />
<SidebarChat /> */}
            </div>
        </div>
    )
}

export default Sidebar
