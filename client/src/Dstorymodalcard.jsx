import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import CallIcon from '@material-ui/icons/Call';
const Dstorymodalcard=(props)=>{

	const [expand,setexpand]=useState(false);
	const call=()=>{
		
		setexpand(!expand);
	}
 
	const callstory=()=>{
	props.outshow(props.img)
	}

	
	return(<>
				<div style={{display:'flex'}}>
				<div style={{float:'left',width:'200px'}}>
				<img onClick={call} id={expand==true?"contributephotoexpand":"contributephoto"} src={props.img}/>
				<b id="text_white2" style={{marginLeft:'20px'}}>{props.name}</b><br/>
				</div>
				<div style={{float:'right'}}>
				<Button onClick={callstory} class="modalbutton">{props.text}</Button>
				</div>
				</div><hr style={{backgroundColor:'#373567'}}/>
		</>)
}

export default Dstorymodalcard;