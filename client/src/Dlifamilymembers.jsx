import React,{useState} from "react";
import Button from '@material-ui/core/Button';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import DoneIcon from '@material-ui/icons/Done';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteIcon from '@material-ui/icons/Delete';
   

const Dlifamilymembers=(props)=>{

	 const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

   const postdata=async(e)=>{
   	 props.filto(props.id,props.type,props.mobile_receiver)
    e.preventDefault();
    handleClose();
    const member_email=props.emails
    const res=await fetch("/deletemy_members",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        member_email
      })
    });
    console.log(res.status)
   
  }

	const [tick,settick]=useState(0);
	const [expand,setexpand]=useState(false);

	const callchat=()=>{
		props.change(props.emails,props.name,props.mobile_receiver);
		settick(tick+1);

		
	
	}
	const call=()=>{
		
		setexpand(!expand);
	}
	const open_del=()=>{

	}
	return(<>	
			<div>
				<div style={{float:'left'}}>
					<img onClick={call} id={expand==true?"contributephotoexpand":"contributephoto"} src={props.img}/>
				</div>
				<div>
					<li><Button id="text_white" onClick={callchat}>{props.name}
					{tick==0?null:tick%2==0?<DoneAllIcon/>:<DoneIcon/>}</Button>
					<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} id="text_white" style={{float:'right'}}><MoreVertIcon/></Button></li>
					
				</div>
			</div><br/>

			  <div>
     
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={postdata}>Thanks for your time.Bye Bye.<DeleteIcon/></MenuItem>
      </Menu>
    </div>
			
			
	</>);
}

export default  Dlifamilymembers;