import React from "react";
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { post, updateChats } from "../../constant";

const Dlibutton=(props)=>{

	const sendchat=async()=>{
	props.show(props.text);
    const chat=props.text;
    const member=props.memberss;
    const variables={   chat,member};
    const res=await fetch(updateChats,post(variables));

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