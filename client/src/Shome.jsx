import React from "react";
import {Route,Switch} from "react-router-dom";
import Sprofile from "./Sprofile";
import Ssetting from "./Ssetting";
import Schat from "./Schat";
const Shome=()=>{

	  const postdata=async(e)=>{
    
    e.preventDefault();
    
    const res=await fetch("https://testmern42.herokuapp.com/sltest",{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      },
     
    });


   }
	return(<>

	<h1 id="text_pink">hello from the home side.</h1>
	<a href="/chat" id="text_white">chat</a><br/>
	<a href="/profile" id="text_white">profile</a><br/>
	<a href="/setting" id="text_white">setting</a><br/>
	<button onClick={postdata}>Check</button>

		</>)
}

export default Shome;