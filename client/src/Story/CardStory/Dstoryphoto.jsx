import React,{useState} from 'react';
import Button from '@material-ui/core/Button';

const Dstoryphoto=(props)=>{

	const [expand,setexpand]=useState(false);
	const call=()=>{
		
		setexpand(!expand);
	}

	const callstory=()=>{
	props.outshow(props.img)
	}

	
	return(<>
				<div><img onClick={call} id={expand===true?"contributephotoexpand":"contributephoto"} src={props.img} alt=''/>
				<b>{props.name}</b><br/>
				<Button onClick={callstory}>{props.text}</Button>
				
			
		
		


				</div><hr style={{backgroundColor:'pink'}}/>
		</>)
}

export default Dstoryphoto;