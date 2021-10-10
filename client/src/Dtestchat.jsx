import React,{useState,useEffect} from "react";
import io from "socket.io-client";
import openSocket from 'socket.io-client';


let socket;

const CONNECTION_PORT=openSocket('http://localhost:3002', {transports: ['websocket']});

const Dtestchat=()=>{
const [room,setRoom]=useState();
const [text,settext]=useState('');
const [all,setall]=useState([]);
const changeinput=(e)=>{
	settext(e.target.value);
	
}



const sendchat=async()=>{
	
	socket.emit("join_room", 2496746307410117000000);
    await socket.emit("chat message",{room:2496746307410117000000,content:text,sender:'123456@'});

}

useEffect(()=>{
	},[]);
	useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, [CONNECTION_PORT]);

   useEffect(() => {
    socket.on("chat message", (data) => {
    setall([...all,data]);
  
      
    });
  });
  const connectToRoom = () => {
    socket.emit("join_room", 2496746307410117000000);
  };

	return(<>
	<h1 style={{color:'white'}}>hello from the test side</h1>
	<input type="text" name="chat" value={text} onChange={changeinput}/>
	<button className="btn btn-primary" onClick={connectToRoom}> connect to room</button>
	<button className="btn btn-primary" onClick={sendchat}> Send</button>
	{all.map((cvalue)=>{
	return(<h1 style={{color:'white'}}>{cvalue.content}</h1>)
	})}


	</>)
}

export default Dtestchat;