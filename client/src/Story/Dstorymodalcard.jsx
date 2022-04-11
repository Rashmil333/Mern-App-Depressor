import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
const Dstorymodalcard = (props) => {

	const [expand, setexpand] = useState(false);
	const call = () => {
		setexpand(!expand);
	}

	const callstory = () => {
		props.outshow(props.img)
	}

	return (<>
		<div style={{ display: 'flex' }}>
			<div style={{ float: 'left', width: '200px' }}>
				<img onClick={call} id={expand === true ? "contributephotoexpand" : "contributephoto"} src={props.img} alt='pic' />
				<b id="text_white2" style={{ marginLeft: '20px' }}>{props.name}</b><br />
			</div>
			<div style={{ float: 'right' }}>
				<Button onClick={callstory} class="modalbutton">{props.text}</Button>
			</div>
		</div><hr style={{ backgroundColor: '#373567' }} />
	</>)
}

export default Dstorymodalcard;