import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Style.css';



const Maincard = (props) => {
  const[username, setUsername] = useState();
  // const[getid, setGetid] = useState("");
  const navigate = useNavigate();
  function handleChange(event){ 
    setUsername(event.target.value)
  }

 function handleClick(){
  navigate(`/${username}`)
}

 return (
<div style={{boxSizing:"border-box", display:"block", textAlign:"center"}}>    
      <form > 
      <input type="text" placeholder='Github user id'
       value={username} onChange={handleChange}/>
       <button onClick={handleClick}>submit</button>
      </form>
      <h1 style={{color:"red"}}>{username}</h1>
      <h1>Confirm your github login-id</h1>
      {/* <p>{getid ? getid : "Click submit after entering the id"}</p>
      <button onClick={handleClick}>
        Confirm 
      </button>        */}
    </div>
 )
};
export default Maincard;
