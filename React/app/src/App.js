import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {useState} from 'react';

function App() {
  let firstname = "Bhavesh";
  const [email,setEmail] = useState('youremail');
  const [mobile,setMobile] = useState('yourmobile');
  function ValiditeState(){
    if(email == ""){
        alert("E-mail is Empty")
    }else if(mobile == ""){
      alert("Mobile is Empty")
    }else{
      alert("Everything is Fine")
    }
  }
  return (
    <div className="App"> 
      <h1>This Is React App </h1>
      {firstname} <br/>
      {email} <br/>
      {mobile} <br/>
      <Home/>
      <input type="text" onChange={(e) => setEmail(e.target.value)}/> <br/>
      <input type="text" onChange={(e) => setMobile(e.target.value)}/> <br/>
      <button onClick={() => ValiditeState()}>Click</button>
    </div>

  );
}

export default App;
