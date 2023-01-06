import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Dnavbar from "../Components/Navbar/Dnavbar";
import io from "socket.io-client";
// import openSocket from 'socket.io-client';
import BuildIcon from '@material-ui/icons/Build';
import Button from '@material-ui/core/Button';
import Ddatadepress from "../Chat/Ddatadepress";
import Ddatastress from "../Chat/Ddatastress";
import Ddataanxiety from "../Chat/Ddataanxiety";
import Ddatatension from "../Chat/Ddatatension";
import Ddatasucide from "../Chat/Ddatasucide";
import Dlibutton from "../Components/DliButton/Dlibutton";
import Demoji from "../Chat/Demoji";
import MessageIcon from '@material-ui/icons/Message';
import CategoryIcon from '@material-ui/icons/Category';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import BrushIcon from '@material-ui/icons/Brush';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import FaceIcon from '@material-ui/icons/Face';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SendIcon from '@material-ui/icons/Send';
import UndoIcon from '@material-ui/icons/Undo';
import Dchatbutton from "../Chat/ChatButton/Dchatbutton";
import Dlifamilymembers from "../Components/DlifamilyMembers/Dlifamilymembers";
import DeleteIcon from '@material-ui/icons/Delete';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Progress } from 'reactstrap';
import { NavLink } from "reactstrap";
import { deletchatsAll, deletchatsLast, get, getuserData, post, SLTEST, updateChats } from '../constant';


// let socket;

// const CONNECTION_PORT = openSocket('https://mern-app-depressor.onrender.com', { transports: ['websocket'] });

export const Socketio = io('https://mern-app-depressor.onrender.com', {
	transports: ['websocket', 'polling'],
	autoConnect: false,
	reconnection: true,
  });
  if (localStorage.getItem('authorization')) {
	Socketio.open();
  }

  Socketio.on("connect", () => {
	console.log('>>>>',Socketio.connected); // true
  });

const Dchat = () => {
	// const [chatss, setchatss] = useState();
	const [member, setmember] = useState("harry333@gmail.com");
	const [state, setstate] = useState({
		chat: ""
	});

	const history = useHistory();

	let name, value;
	const sendchat = async (e) => {
		setprogress(progress + 1);
		setchats((olditem) => {
			return [...olditem, { type: "send", message: inputlist }];
		});
		console.log(chats);
		setinputlist("");
		let messageContent = {
			room: room,
			content: {
				sender: `${firstname}:`,
				message: inputlist,
			},
		};

		await Socketio.emit("send_message", messageContent);

		setinputlist("");


		e.preventDefault();
		const { chat } = state;
		const variables={chat, member};
		const res = await fetch(updateChats, post(variables));
		console.log(res);
	}

	const sendchatforli = async (id) => {
		setprogress(progress + 1)
		setchats((olditem) => {
			return [...olditem, { type: "send", message: id }];
		});
		console.log(chats);
		setinputlist("");
		let messageContent = {
			room: room,
			content: {
				sender: firstname,
				message: id,
			},
		};

		await Socketio.emit("send_message", messageContent);

		setinputlist("");



		const chat = id;
		const variables={chat, member};
		const res = await fetch(updateChats,post(variables));
		console.log(res);
	}
	const getdata = async () => {
		const res = await fetch(getuserData, get());
		const data = await res.json();
		if (data.mydepressor_status === 1) {
			console.log(data.mydepressor[0].email)

			setdepressor(data.mydepressor);
		}
		if (data.myreliever_status === 1) {
			setreliever(data.myreliever);
		}

		console.log(depressor);
		console.log(data.email);
		setchats(data.mychats);
		setreceived_chats(data.recievedchats);
		setmess_send(data.total_messages);
		console.log(chats);
		console.log(received_chats);
		console.log("firstname:" + data.firstname);
		setfirstname(data.firstname);
		setphone_me(data.phone);
		console.log(phone_me);





	}
	const sltest = async (e) => {
		const link = e.target.value;
		e.preventDefault();

		const res = await fetch(SLTEST,get());



		history.push(link);




	}



	const [toggler, settoggler] = useState(1);
	const [text, settext] = useState(1);
	const [depress, setdepress] = useState(1);
	const [stress, setstress] = useState(1);
	const [anxiety, setanxiety] = useState(1);
	const [tension, settension] = useState(1);
	const [suicide, setsuicide] = useState(1);
	const [emoji, setemoji] = useState(1);
	const [theme, settheme] = useState(1);
	const [family, setfamily] = useState(1);
	const [totalmessages, settotalmessages] = useState(1);
	const [chats, setchats] = useState([]);
	const [inputlist, setinputlist] = useState();
	const [themee, setthemee] = useState("normal");
	const [depressor, setdepressor] = useState([]);
	const [reliever, setreliever] = useState([]);
	const [member_name, setmember_name] = useState();
	const [received_chats, setreceived_chats] = useState([]);
	const [mychats, setmychats] = useState([]);
	const [mess_send, setmess_send] = useState();
	const [firstname, setfirstname] = useState("");
	const [phone_me, setphone_me] = useState();
	const [room_connect, setroom_connect] = useState();
	const [live, setlive] = useState([]);
	const [progress, setprogress] = useState(0);

	const changemember = (newemail, newname, phone_rec) => {
		setlive((olditem) => {
			return [...olditem, newname];
		});
		console.log("the live is", live)
		setmember(newemail);
		setmember_name(newname);
		console.log("the new member is" + newemail);
		const add = (phone_me + phone_rec).toString();
		const sub = (phone_me + phone_rec).toString();
		const mult = (phone_me * phone_rec).toString();
		const room_code = add + sub + mult;
		console.log("The room code is", room_code)
		setroom_connect(room_code);

		console.log("conection is established at room " + room_connect);
		connectToRoom(room_code);


	}

	const changeinput = (event) => {
		setinputlist(event.target.value);
		console.log(inputlist);
		name = event.target.name;
		value = event.target.value;
		setstate({ ...state, [name]: value });
		console.log(state);
	}

	// const createemojibutton = (id) => {
	// 	var btn = document.createElement("BUTTON");
	// 	var t = document.createTextNode('&times;');

	// 	btn.appendChild(t);
	// 	document.getElementById('para').appendChild(btn);



	// }

	const changethemee = (id) => {
		if (id === 'red') {
			setthemee("red");
		}
		else if (id === 'green') {
			setthemee("green");
		}
		else if (id === 'yellow') {
			setthemee("yellow");
		}
		else if (id === 'dodgerblue') {
			setthemee("dodgerblue");
		}
		else if (id === 'blue') {
			setthemee("blue");
		}

	}
	const deletechatsall = async () => {
		setchats([]);
		const res = await fetch(deletchatsAll, post({}));
	}

	const deletechatslast = async () => {
		var lastindex = (chats.length) - 1;
		setchats((olditem) => {
			return olditem.filter((arrelem, index) => {
				return index !== lastindex;
			})
		})

		const res = await fetch(deletchatsLast, post());
		console.log(res);
	}

	const displaymessage = async () => {

		setchats((olditem) => {
			return [...olditem, { type: "send", message: inputlist }];
		});

		console.log(chats);
		let messageContent = {
			room: room,
			content: {
				message: inputlist,
			},
		};

		await Socketio.emit("send_message", messageContent);

		setinputlist("");

	}
	const displaymessageforli = (id) => {
		setchats((olditem) => {
			return [...olditem, { type: "send", message: id }];
		});
		console.log(chats);
		setinputlist("");

	}
	const undomessage = () => {
		var lastindex = (chats.length) - 1;
		setchats((olditem) => {
			return olditem.filter((arrelem, index) => {
				return index !== lastindex;
			})
		})
	}

	const deletebutton = (id) => {
		setchats((olddata) =>
			olddata.filter((cuurdata, indx) => {
				return indx !== id;
			})
		)
	}

	const deleteall = () => {
		setchats([]);

	}
	useEffect(() => {
		getdata();
	}, []);
	// useEffect(() => {
	// 	socket = io(CONNECTION_PORT);
	// }, [CONNECTION_PORT]);
	const [loggedIn, setLoggedIn] = useState(false);
	const [room, setRoom] = useState("");
	const [userName, setUserName] = useState("");

	// After Login
	const [message, setMessage] = useState("");
	const [messageList, setMessageList] = useState([]);

	useEffect(() => {
		Socketio.on("receive_message", (data) => {
			setchats([...chats, data]);

		});
	});
	const connectToRoom = (value) => {
		setRoom(value);
		console.log(room)
		setLoggedIn(true);
		Socketio.emit("join_room", room);
	};

	const sendMessage = async () => {
		let messageContent = {
			room: room,
			content: {
				author: userName,
				message: message,
			},
		};

		await Socketio.emit("send_message", messageContent);
		setMessageList([...messageList, messageContent.content]);
		setMessage("");
	};
	return (<>

		<Dnavbar />

		<Button onClick={() => settoggler(toggler + 1)} style={{ color: 'white' }}><BuildIcon /></Button>
		<div >
			{toggler % 2 === 0 ?
				<div style={{ float: 'left', color: 'white', marginLeft: '2px', width: '300px' }}>
					<span id="text_white" style={{ marginLeft: '10px' }}>Tools<hr style={{ width: '200px', height: '2px' }} /></span><br />
					<span id="text_white"><Button id="text_white" onClick={() => settext(text + 1)}><MessageIcon id="text_white" />Messages</Button><hr style={{ width: '200px', height: '2px' }} /></span>
					{text % 2 === 0 ? <ul style={{ listStyleType: 'none' }}>
						<li><Button id="text_white" onClick={() => setdepress(depress + 1)}><CategoryIcon id="text_white" />Depression</Button>
							{depress % 2 === 0 ?
								<ul>
									{Ddatadepress.map((cvalue, index) => { return (<Dlibutton text={cvalue.text} show={sendchatforli} id={index} memberss={member} />); })}
								</ul> : null
							}
						</li><hr style={{ width: '200px', height: '2px' }} />
						<li><Button id="text_white" onClick={() => setstress(stress + 1)}><CategoryIcon id="text_white" />Stress</Button>
							{stress % 2 === 0 ?
								<ul>
									{Ddatastress.map((cvalue, index) => { return (<Dlibutton text={cvalue.text} show={sendchatforli} id={index} memberss={member} />); })}
								</ul> : null
							}
						</li><hr style={{ width: '200px', height: '2px' }} />
						<li><Button id="text_white" onClick={() => settension(tension + 1)}><CategoryIcon id="text_white" />Tension</Button>
							{tension % 2 === 0 ?
								<ul>
									{Ddatatension.map((cvalue, index) => { return (<Dlibutton text={cvalue.text} show={sendchatforli} id={index} memberss={member} />); })}
								</ul> : null
							}
						</li><hr style={{ width: '200px', height: '2px' }} />
						<li><Button id="text_white" onClick={() => setanxiety(anxiety + 1)}><CategoryIcon id="text_white" />Anxiety</Button>
							{anxiety % 2 === 0 ?
								<ul>
									{Ddataanxiety.map((cvalue, index) => { return (<Dlibutton text={cvalue.text} show={sendchatforli} id={index} memberss={member} />); })}
								</ul> : null
							}
						</li><hr style={{ width: '200px', height: '2px' }} />

						<li><Button id="text_white" onClick={() => setsuicide(suicide + 1)}><CategoryIcon id="text_white" />Suicidial Thoughts</Button>
							{suicide % 2 === 0 ?
								<ul>
									{Ddatasucide.map((cvalue, index) => { return (<Dlibutton text={cvalue.text} show={sendchatforli} id={index} memberss={member} />); })}
								</ul> : null
							}
						</li>

					</ul> : null
					}
					<span id="text_white"><Button id="text_white" onClick={() => setemoji(emoji + 1)}><EmojiEmotionsIcon />Emojis</Button><hr style={{ width: '200px', height: '2px' }} /></span>
					{emoji % 2 === 0 ? <div>{
						Demoji.map((cvalue, index) => {
							return (<Dlibutton text={cvalue.text} show={sendchatforli} id={index} memberss={member} />)
						})
					}</div> : null
					}
					<span id="text_white"><Button id="text_white" onClick={() => settheme(theme + 1)}><BrushIcon />Themes</Button><hr style={{ width: '200px', height: '2px' }} /></span>
					{theme % 2 === 0 ? <ul id="text_white" style={{ listStyleType: 'none' }}>
						<li><Button style={{ color: 'dodgerblue' }} onClick={e => changethemee('dodgerblue')}><CheckBoxOutlineBlankIcon /></Button></li>
						<li><Button style={{ color: 'blue' }} onClick={e => changethemee('blue')}><CheckBoxOutlineBlankIcon /></Button></li>
						<li><Button style={{ color: 'red' }} onClick={e => changethemee('red')}><CheckBoxOutlineBlankIcon /></Button></li>
						<li><Button style={{ color: 'green' }} onClick={e => changethemee('green')}><CheckBoxOutlineBlankIcon /></Button></li>
						<li><Button style={{ color: 'yellow' }} onClick={e => changethemee('yellow')}><CheckBoxOutlineBlankIcon /></Button></li>

					</ul> : null
					}
					<span id="text_white"><Button id="text_white" onClick={() => setfamily(family + 1)}><FaceIcon />Family Members</Button><hr style={{ width: '200px', height: '2px' }} /></span>
					{family % 2 === 0 ? <ul id="text_white" style={{ listStyleType: 'none' }}>
						<p id="text_pink">Depressors</p><hr style={{ backgroundColor: 'white' }} />
						<Dlifamilymembers name="Harry" />
						{depressor.map((cvalue) => {
							return (<Dlifamilymembers name={cvalue.name} img={cvalue.img} emails={cvalue.email} change={changemember} mobile_receiver={cvalue.phone_no} />)
						})}<hr style={{ backgroundColor: 'white' }} />
						<p id="text_pink">Relievers</p>
						{reliever.map((cvalue) => {
							return (<Dlifamilymembers name={cvalue.name} img={cvalue.img} emails={cvalue.email} change={changemember} mobile_receiver={cvalue.phone_no} />)
						})}
					</ul> : null
					}
					<span id="text_white"><Button id="text_white" onClick={getdata}><ForumIcon />Messages Send:{mess_send}</Button><hr style={{ width: '200px', height: '2px' }} /></span>

					<span id="text_white"><Button id="text_white"><NotificationsIcon />Notifications:0</Button><hr style={{ width: '200px', height: '2px' }} /></span>

				</div> : null
			}
			<div className={themee === "red" ? "Dchatredbackground" : themee === "green" ? "Dchatgreenbackground" : themee === "yellow" ? "Dchatbackgroundyellow" : themee === "blue" ?
				"Dchatbackgroundblue" : themee === "dodgerblue" ? "Dchatbackgroundskyblue" :
					themee === "normal" ? "Dchatbackgroundnormal" : null} style={{ color: 'white', height: '800px', color: 'grey', }}>
				<div>
					<div style={{ float: 'left' }}>

						<Progress value={progress} style={{ width: '350px', marginLeft: '10px' }} />

					</div>
					<div style={{ float: 'right' }}>
						<NavLink href="/reliever"><button className="btn btn-primary" value="/reliever" onClick={sltest}><ArrowBackIcon /></button></NavLink>


					</div>
				</div>	 <br />
				<RadioButtonCheckedIcon style={{ color: 'green' }} /> <span style={{ color: 'green' }}>Sending message to</span> {member_name}
				{live ==="" ? <>
					<span></span>
					<span id="text_white">Start by selecting family member...</span>
					<img src="https://media1.giphy.com/media/QZVECOeNpquEqnxzi3/giphy.gif" style={{ width: '150px' }} alt='pic' />

				</>


					: live[live.length - 1] ===live[live.length - 2] ?
						<img src="https://lh3.googleusercontent.com/proxy/G3Nad0G4hmU_0-Vjd2YMT3rumji8G3E0VjsEiTLYEv9_tFvVdHo1g_vaKPqIUUy3RsQJasN78BGgqN98ey3kTU9gtrWE6GAs9lHTZOcbdZH7oJfWR6vLTck-b_CCYQ" style={{ width: '150px' }} alt='' /> : <>
							<span>......</span>
							<span id="text_white">OOps!!Your family member is not live but still you can send
								<img src="https://i.pinimg.com/originals/49/27/84/4927849d453932ff05aba4fe7a06dd12.gif" style={{ width: '150px' }} />  to him.He will seeeee.. it later.</span>
							<img src="https://media3.giphy.com/media/l4FGrHErakgV8GRO0/giphy.gif" style={{ width: '150px' }} />
						</>
				}
				<Button id="text_white" style={{ float: 'right' }} onClick={deletechatsall}><DeleteIcon /></Button><br /><br />
				{chats.map((cvalue, index) => {
					return (<Dchatbutton text={cvalue.message} sender={cvalue.sender} types={cvalue.type} id={index} outdelete={deletebutton} />);
				})}
				<Dchatbutton text="..." id="401" outdelete={deletebutton} type="recieve" /><br /><br />
				<form  >
					<input id="Dchatinput" type="text" placeholder="Type Message" value={inputlist} onChange={changeinput} name="chat" />



					<Button id="Dchatbutton" style={{ position: 'fixed', bottom: '0', right: '0', color: 'green', backgroundColor: 'white', marginLeft: '10px' }} onClick={deletechatslast}><UndoIcon /></Button>
					<Button id="Dchatbutton" style={{ position: 'fixed', bottom: '0', marginLeft: '65%', color: 'green', backgroundColor: 'pink' }} onClick={sendchat}><SendIcon /></Button>
				</form>

			</div>

		</div>

	</>)
}

export default Dchat;