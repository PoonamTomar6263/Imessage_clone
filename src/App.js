import React ,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser,login,logOut } from './features/userSlice';

//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
import Imessage from './Imessage';
import Login from './Login';
import { auth } from './firebase';

function App() {
const user=useSelector(selectUser);
const dispatch =useDispatch();
useEffect (()=>{
  auth.onAuthStateChanged(authUser=>{
    if(authUser){
dispatch(login({
  uid:authUser.uid,
  photo:authUser.photo,
  email:authUser.email,
  displayName:authUser.displayName,
}))
    }else{
dispatch(logOut());
    }
  })
},[]);
  return (
    <div className="App">
      {user?(
 <Imessage/>
      ):(
        // <h2>you need to log in</h2>
        <Login/>
         
      )}
      
    </div>
  );
}

export default App;
