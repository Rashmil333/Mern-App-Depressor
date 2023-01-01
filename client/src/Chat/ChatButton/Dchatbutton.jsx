import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { deletechats, post } from '../../constant';

const Dchatbutton=(props)=>{
	const [delsender,setdelsender]=useState(1);
	const [delreceive,setdelreceive]=useState(1);
	const [sender_name,setsender_name]=useState();
	const [mess,setmess]=useState();
	const delitemreceive=()=>{
		setdelreceive(delreceive+1);
		

	}

	const delitemsender=()=>{
		setdelsender(delsender+1);
		

	}
	const deletemessage=()=>{
		props.outdelete(props.id);

	}
	const deletechat_send=async()=>{
	props.outdelete(props.id);

    const chat=props.text;
    const type="send"
	const variables={chat,type};
    const res=await fetch(deletechats,post(variables));
	}

	const deletechat_received=async()=>{
	props.outdelete(props.id);

    const chat=props.text;
    const type="receive"
	const variables={  chat,type};
    const res=await fetch(deletechats,post(variables));
	}

	const text=()=>{
		var i=0;
		var string="";
		if(props.text==undefined){

		}
		else if(props.text.length==0){

		}
		else{
				const len=props.text.length;
		while(i<len){
			if(props.text[i]==":"){
				break;
			}
			else{
				string=string+props.text[i];
			}
			i+=1;
		}

		setsender_name(string);
		setmess(props.text.slice(i+1,len));

		}
		


	}

	useEffect(()=>{
		text();
	},[])


	return(<>{delsender%2==0?<Button style={{float:'right',color:'crimson'}} onClick={deletechat_send}><DeleteForeverIcon/></Button>:null}
	{props.types=="send"?<div>
	<Button style={{float:'right',borderRadius:'10px 0px 10px 10px',marginRight:'10px'}} id="Dchatmessage" class="memess" onClick={delitemsender}>{props.text}</Button><br/><br/><br/>
	</div>:
	props.types=="socketmessage"?
	<div><Button id="Dchatmessage" style={{marginLeft:'10px',borderRadius:'0px 10px 10px 10px'}} onClick={delitemreceive}><span class="leafymess">{props.sender}</span>{props.text}</Button>
	{delreceive%2==0?<Button style={{float:'left',color:'crimson'}} onClick={deletechat_received}><DeleteForeverIcon/></Button>
	:null}
	<br/><br/></div>
	:<div><Button id="Dchatmessage" style={{borderRadius:'0px 10px 10px 10px',marginLeft:'10px'}} onClick={delitemreceive}><span class="leafymess">{sender_name}</span>{mess}</Button><br/>
	{delreceive%2==0?<Button style={{float:'left',color:'crimson'}} onClick={deletechat_received}><DeleteForeverIcon/></Button>
	:null}
	<br/><br/></div>
	}
	</>);
}

export default Dchatbutton;