import React from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat.js'
import './Imessage.css'
function Imessage() {
    return (
        <div className="imessage">
            {/* <h1>i am i message</h1> */}
            <Sidebar/>
            <Chat/>
        </div>
    )
}

export default Imessage
