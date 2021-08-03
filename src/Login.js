import React from 'react'
import  {auth ,provider} from './firebase'
import './Login.css'
function Login() {
    const signIn=()=>{
        auth.signInWithPopup(provider).catch((error)=>alert(error.message));
    };
    return (
        <div  className="login">
            <div className="login_logo">
                {/* <h2>i am a logo</h2> */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png" alt="ImessageIcon"/>
                <h1>imessage</h1>
            </div>
            <button onClick={signIn} >Sign In</button>
        </div>
    )
}

export default Login
