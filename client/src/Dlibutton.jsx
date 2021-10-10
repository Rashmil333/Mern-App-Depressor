import React from "react";
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const Dlibutton=(props)=>{

	const sendchat=async()=>{
	props.show(props.text);
    const chat=props.text;
    const member=props.memberss;
    const res=await fetch("/updatechats",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        chat,member
      })
    });

   }

	const callchat=()=>{
		props.show(props.text);
	}

  const callchat_li=()=>{
    props.show(props.text);
  }
	return(<>
		<Button onClick={callchat_li} id="text_white"><SendIcon/>{props.text}</Button><br/>
	</>)
}

export default Dlibutton;