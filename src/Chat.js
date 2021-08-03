import React, { useEffect, useState } from 'react'
import './Chat.css'
import MicNoneIcon from "@material-ui/icons/MicNone"
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectChatId, selectChatName } from './features/chatSlice';
import db from './firebase';
import firebase from 'firebase';
import { selectUser } from './features/userSlice';
function Chat() {
    const user=useSelector(selectUser);
    const [input, setInput] = useState("");
    
    const chatName=useSelector(selectChatName);
    const chatId=useSelector(selectChatId);
    const [messages,setMessages]=useState([]);
 
    useEffect(() => {
      if(chatId){
          db.collection("chats")
          .doc(chatId)
          .collection("messages")
          .orderBy("timestamp","desc")
          .onSnapshot((snapshot)=>
          setMessages(
              snapshot.docs.map((doc)=>({
                  Id:doc.Id,
                  data:doc.data(),
              })))
          )
      }
    }, [chatId])


//     const sendMessage = (e) => {
//         e.preventDefult();
//         //firebase work
// db.collection("chats").doc(chatId).collection("messages").add({
//     timestamp:firebase.firestore.FieldValue.serverTimestamp(),
//     message:input,
// })
//         setInput = ("");
//     };

const sendMessage=(e)=>{
    e.preventDefault();
    console.log(input,chatId);
    db.collection("chats").doc(chatId).collection("messages").add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            message:input,
            uid:user.uid,
           
            email:user.email,
            displayName:user.displayName,
        })
        setInput("");
    }
    return (
        <div className="chat" >
            <div className="chat_header" >
                <h4>To:
                    <span className="chat_name">{chatName}</span>
                </h4>
                <strong>Details</strong>
            </div>
            <div className="chatMessage">
                {messages.map(({id,data})=>(
                    <Message key={id} contents={data} />
                ))}
                {/* <Message/>
                <Message/>
                <Message/> */}
{/* <h2>i am a chat message bkjn</h2>
<h2>i am a chat message</h2>
<h2>i am a chat message</h2>
<h2>i am a chat message</h2>
<h2>i am a chat message</h2> */}
            </div>
            <div className="chat_input">
                <form onSubmit={sendMessage} >
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        placeholder="Imessage"
                    >
                    </input >
                    <button className="btn" >Send message</button>
                </form>
                <MicNoneIcon/>
            </div>
        </div>
    )
}

export default Chat
