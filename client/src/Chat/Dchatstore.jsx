import React, {useSate, useState ,useEffect} from 'react';
import {useHistory} from "react-router-dom";
import Dnavbar from "./Dnavbar";
import BuildIcon from '@material-ui/icons/Build';
import Button from '@material-ui/core/Button';
import Ddatadepress from "./Ddatadepress";
import Ddatastress from "./Ddatastress";
import Ddataanxiety from "./Ddataanxiety";
import Ddatatension from "./Ddatatension";
import Ddatasucide from "./Ddatasucide";
import Dlibutton from "./Dlibutton";
import Demoji from "./Demoji";
import MessageIcon from '@material-ui/icons/Message';
import CategoryIcon from '@material-ui/icons/Category';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import BrushIcon from '@material-ui/icons/Brush';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import FaceIcon from '@material-ui/icons/Face';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SendIcon from '@material-ui/icons/Send';
import UndoIcon from '@material-ui/icons/Undo';
import Dchatbutton from "./Dchatbutton";
import Dfooter from "./Dfooter";
import Dlifamilymembers from "./Dlifamilymembers";
import DeleteIcon from '@material-ui/icons/Delete';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import { deletchatsAll, deletchatsLast, get, getuserData, post, updatechats } from '../constant';




const Dchat=()=>{
	const [chatss,setchatss]=useState();
	const[member,setmember]=useState("harry333@gmail.com");
	 const [state,setstate]=useState({
    chat:""
  });

  let name,value;
	const sendchat=async(e)=>{
	  		setchats((olditem)=>{
			return[...olditem,{type:"send",message:inputlist}];
		});
		console.log(chats);
		setinputlist("");

  
    e.preventDefault();
    const {chat}=state;
	const variables={chat,member};
    const res=await fetch(updatechats,post(variables));

   
    



    
  }
  const getdata=async()=>{
    
    
    const res=await fetch(getuserData,get());
    const data=await res.json();
    if(data.mydepressor_status==1){
    	 console.log(data.mydepressor[0].email)
    
    	setdepressor(data.mydepressor);
    }
   	if(data.myreliever_status==1){
   		 setreliever(data.myreliever);
   	}
   
    console.log(depressor);
    console.log(data.email);
    setmychats(data.mychats);
    setchats(data.mychats);
    setreceived_chats(data.recievedchats);
    setmess_send(data.total_messages);
    console.log(chats);
    console.log(received_chats);

  
    


   }

	

	const [toggler,settoggler]=useState(2);
	const [text,settext]=useState(1);
	const [depress,setdepress]=useState(1);
	const [stress,setstress]=useState(1);
	const [anxiety,setanxiety]=useState(1);
	const [tension,settension]=useState(1);
	const [suicide,setsuicide]=useState(1);
	const [emoji,setemoji]=useState(1);
	const [theme,settheme]=useState(1);
	const [family,setfamily]=useState(1);
	const [totalmessages,settotalmessages]=useState(1);
	const [chats,setchats]=useState([]);
	const [inputlist,setinputlist]=useState();
	const [themee,setthemee]=useState("");
	const [depressor,setdepressor]=useState([]);
	const [reliever,setreliever]=useState([]);
	const [member_name,setmember_name]=useState();
	const [received_chats,setreceived_chats]=useState([]);
	const [mychats,setmychats]=useState([]);
	const [mess_send,setmess_send]=useState();

	const changemember=(newemail,newname)=>{
		setmember(newemail);
		setmember_name(newname);
		console.log("the new member is"+newemail);
	}

	const changeinput=(event)=>{
		setinputlist(event.target.value);
		console.log(inputlist);
		name=event.target.name;
    	value=event.target.value;
    	setstate({...state,[name]:value});
    	console.log(state);
	}

	const createemojibutton=(id)=>{
		var btn=document.createElement("BUTTON");
		var t=document.createTextNode('&times;');

		btn.appendChild(t);
		document.getElementById('para').appendChild(btn);



	}

	const changethemee=(id)=>{
		if(id=='red'){
			setthemee("red");
		}
		else if(id=='green'){
			setthemee("green");
		}
		else if(id=='yellow'){
			setthemee("yellow");
		}
		else if(id=='dodgerblue'){
			setthemee("dodgerblue");
		}
		else if(id=='blue'){
			setthemee("blue");
		}

	}
	const deletechatsall=async()=>{
	setchats([]);
    const res=await fetch(deletchatsAll,post({}));
	}

	const deletechatslast=async()=>{
		var lastindex=(chats.length)-1;
		setchats((olditem)=>{
			return olditem.filter((arrelem,index)=>{
				return index!==lastindex;
			})
		})
	
    const res=await fetch(deletchatsLast,post({}));
	}

	const displaymessage=()=>{
			
			setchats((olditem)=>{
			return[...olditem,{type:"send",message:inputlist}];
		});
		console.log(chats);
		setinputlist("");

	}
	const displaymessageforli=(id)=>{
			setchats((olditem)=>{
			return[...olditem,{type:"send",message:id}];
		});
		console.log(chats);
		setinputlist("");

	}
	const undomessage=()=>{
		var lastindex=(chats.length)-1;
		setchats((olditem)=>{
			return olditem.filter((arrelem,index)=>{
				return index!==lastindex;
			})
		})
	}

	const deletebutton=(id)=>{
		setchats((olddata)=>
		olddata.filter((cuurdata,indx)=>{
			return indx !==id;
		})
	)
	}

	const deleteall=()=>{
		setchats([]);

	}
	useEffect(()=>{
	getdata();
	},[])
	return(<>
		
				<Dnavbar/>
				<Button onClick={()=>settoggler(toggler+1)} style={{color:'white'}}><BuildIcon/></Button>
				<div >
				{toggler%2==0?
					<div style={{float:'left',color:'white',marginLeft:'2px',width:'300px'}}>
						<span id="text_white" style={{marginLeft:'10px'}}>Tools<hr style={{width:'200px',height:'2px'}}/></span><br/>
						<span id="text_white"><Button id="text_white" onClick={()=>settext(text+1)}><MessageIcon id="text_white"/>Messages</Button><hr style={{width:'200px',height:'2px'}}/></span>
							{text%2==0?<ul style={{listStyleType:'none'}}>
								<li><Button id="text_white" onClick={()=>setdepress(depress+1)}><CategoryIcon id="text_white"/>Depression</Button>
								  {depress%2==0?
									<ul>
										{Ddatadepress.map((cvalue,index)=>{return(<Dlibutton text={cvalue.text} show={displaymessageforli} id={index} memberss={member}/>);})}
									</ul>:null
								   }
								</li><hr style={{width:'200px',height:'2px'}}/>
								<li><Button id="text_white" onClick={()=>setstress(stress+1)}><CategoryIcon id="text_white"/>Stress</Button>
									 {stress%2==0?
									<ul>
										{Ddatastress.map((cvalue,index)=>{return(<Dlibutton text={cvalue.text} show={displaymessageforli} id={index} memberss={member}/>);})}
									</ul>:null
								   }
								  </li><hr style={{width:'200px',height:'2px'}}/>
								<li><Button id="text_white"onClick={()=>settension(tension+1)}><CategoryIcon id="text_white"/>Tension</Button>
									 {tension%2==0?
									<ul>
										{Ddatatension.map((cvalue,index)=>{return(<Dlibutton text={cvalue.text} show={displaymessageforli} id={index} memberss={member}/>);})}
									</ul>:null
								   }
								  </li><hr style={{width:'200px',height:'2px'}}/>
								<li><Button id="text_white" onClick={()=>setanxiety(anxiety+1)}><CategoryIcon id="text_white"/>Anxiety</Button>
									 {anxiety%2==0?
									<ul>
										{Ddataanxiety.map((cvalue,index)=>{return(<Dlibutton text={cvalue.text} show={displaymessageforli} id={index} memberss={member}/>);})}
									</ul>:null
								   }
								  </li><hr style={{width:'200px',height:'2px'}}/>

								<li><Button id="text_white"onClick={()=>setsuicide(suicide+1)}><CategoryIcon id="text_white"/>Suicidial Thoughts</Button>
									 {suicide%2==0?
									<ul>
										{Ddatasucide.map((cvalue,index)=>{return(<Dlibutton text={cvalue.text} show={displaymessageforli} id={index} memberss={member}/>);})}
									</ul>:null
								   }
								 </li>

							</ul>:null
						}
						<span id="text_white"><Button id="text_white"onClick={()=>setemoji(emoji+1)}><EmojiEmotionsIcon/>Emojis</Button><hr style={{width:'200px',height:'2px'}}/></span>
							{emoji%2==0?<div>{
								Demoji.map((cvalue,index)=>{
								return(<Dlibutton text={cvalue.text} show={displaymessageforli} id={index} memberss={member}/>)
								})
							}</div>:null
						    }
						<span id="text_white"><Button id="text_white"onClick={()=>settheme(theme+1)}><BrushIcon/>Themes</Button><hr style={{width:'200px',height:'2px'}}/></span>
							{theme%2==0?<ul id="text_white" style={{listStyleType:'none'}}>
							<li><Button style={{color:'dodgerblue'}} onClick={e=>changethemee('dodgerblue')}><CheckBoxOutlineBlankIcon/></Button></li>
							<li><Button style={{color:'blue'}}onClick={e=>changethemee('blue')}><CheckBoxOutlineBlankIcon/></Button></li>
							<li><Button style={{color:'red'}}onClick={e=>changethemee('red')}><CheckBoxOutlineBlankIcon/></Button></li>
							<li><Button style={{color:'green'}}onClick={e=>changethemee('green')}><CheckBoxOutlineBlankIcon/></Button></li>
							<li><Button style={{color:'yellow'}}onClick={e=>changethemee('yellow')}><CheckBoxOutlineBlankIcon/></Button></li>

							</ul>:null
						    }
						<span id="text_white"><Button id="text_white"onClick={()=>setfamily(family+1)}><FaceIcon/>Family Members</Button><hr style={{width:'200px',height:'2px'}}/></span>
							{family%2==0?<ul id="text_white" style={{listStyleType:'none'}}>
							<p id="text_pink">Depressors</p><hr style={{backgroundColor:'white'}}/>
							<Dlifamilymembers name="Harry"/>
							{depressor.map((cvalue)=>{
								return(<Dlifamilymembers name={cvalue.name} img={cvalue.img} emails={cvalue.email} change={changemember}/>)
							})}<hr style={{backgroundColor:'white'}}/>
							<p id="text_pink">Relievers</p>
							{reliever.map((cvalue)=>{
								return(<Dlifamilymembers name={cvalue.name} img={cvalue.img} emails={cvalue.email} change={changemember}/>)
							})}
							</ul>:null
						    }
						<span id="text_white"><Button id="text_white" onClick={getdata}><ForumIcon/>Messages Send:{mess_send}</Button><hr style={{width:'200px',height:'2px'}}/></span>
						
						<span id="text_white"><Button id="text_white"><NotificationsIcon/>Notifications:0</Button><hr style={{width:'200px',height:'2px'}}/></span>
							
				</div>:null
				}
				<div className={themee ==="red" ? "Dchatredbackground" : themee ==="green" ? "Dchatgreenbackground":themee=="yellow"? "Dchatbackgroundyellow":themee=="blue"?
				"Dchatbackgroundblue":themee=="dodgerblue"?"Dchatbackgroundskyblue" : null} style={{color:'white',height:'800px',color:'grey',}}>
					<RadioButtonCheckedIcon style={{color:'green'}}/> <span style={{color:'green'}}>Sending message to</span> {member_name}
					<Button id="text_white" style={{float:'right'}} onClick={deletechatsall}><DeleteIcon/></Button><br/><br/>
					{chats.map((cvalue,index)=>{
						return(<Dchatbutton text={cvalue.message} types={cvalue.type} id={index} outdelete={deletebutton}/>);
					})}
					<Dchatbutton text="hi" id="401" outdelete={deletebutton} type="recieve"/>
				 <form  method="POST">
					<input id="Dchatinput" type="text" placeholder="Type Message" value={inputlist}  onChange={changeinput} name="chat"/>

					
						
					<Button id="Dchatbutton" style={{position:'fixed',bottom:'0',right:'0',color:'green',backgroundColor:'white',marginLeft:'10px'}} onClick={deletechatslast}><UndoIcon/></Button>
					<Button type="submit "id="Dchatbutton" style={{position:'fixed',bottom:'0',marginLeft:'65%',color:'green',backgroundColor:'pink'}} onClick={sendchat}><SendIcon/></Button>
			     </form>
				
				</div>

				</div>
				<Dfooter/>
		</>)
}

export default Dchat;