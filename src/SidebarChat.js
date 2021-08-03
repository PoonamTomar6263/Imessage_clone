import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setChat } from './features/chatSlice'
import db from './firebase'
import './SidebarChat.css'
function SidebarChat({ id, chatName }) {
    const [chatInfo, setChatInfo] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        db.collection('chats').doc(id).collection('messages').orderBy("timestamp", "desc").onSnapshot((snapshot) => {
            setChatInfo(snapshot.docs.map((doc) => doc.data()))
            console.log(snapshot.docs.map((doc) => doc.data()))
        }


        );

    }, [id])

    console.log(chatInfo);

    return (
        <div onClick={() =>
            dispatch(
                setChat({
                    chatId: id,
                    chatName: chatName,
                })
            )
        }
            className="sidebarChat">

            <Avatar src={chatInfo[0]?.photo} />
            <div className="sidebarChat_info">
                <div className="first">
                <h3>{chatName}</h3>
                <p>{chatInfo[0]?.message}</p>
                </div>
                <div className="second">
                    <small >{new Date(chatInfo[0]?.timestamp?.toDate()).toLocaleString()}</small>
                </div>


            </div>
        </div>

    )
}

export default SidebarChat
