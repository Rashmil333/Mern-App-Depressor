import React, { useState } from 'react';
import Dnavbar from "../Components/Navbar/Dnavbar";
import Button from '@material-ui/core/Button';
import CategoryIcon from '@material-ui/icons/Category';
import BrushIcon from '@material-ui/icons/Brush';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import FaceIcon from '@material-ui/icons/Face';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Dfooter from "../Components/Footer/Dfooter";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Dyogawhat from "./Dyogawhat";
import Dyogahistory from "./Dyogahistory";
import Dyogatypes from "./Dyogatypes";
import Dyogabenefits from "./Dyogabenefits";
import Dyogamyth from "./Dyogamyth";
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import AdjustIcon from '@material-ui/icons/Adjust';
import Dmedibeni from "./Dmedibeni";
import Dmedihow from "./Dmedihow";
import Dmedisci from "./Dmedisci";
import Dmedichit from "./Dmedichit";
import Dboycotthabit from "./Dboycotthabit";
import Dgoodhabit from "./Dgoodhabit";
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';


const Dselfhealing = () => {

	const [toggler, settoggler] = useState(2);
	const [text, settext] = useState(1);
	// const [depress, setdepress] = useState(1);
	// const [stress, setstress] = useState(1);
	// const [anxiety, setanxiety] = useState(1);
	// const [tension, settension] = useState(1);
	// const [suicide, setsuicide] = useState(1);
	const [emoji, setemoji] = useState(1);
	const [theme, settheme] = useState(1);
	const [family, setfamily] = useState(1);
	// const [totalmessages, settotalmessages] = useState(1);
	const [themee, setthemee] = useState("");
	const [div, setdiv] = useState(1);
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
	return (<>

		<Dnavbar />
		<Button onClick={() => settoggler(toggler + 1)} style={{ color: 'white' }}><MenuBookIcon /></Button>
		<div className="row">
			<div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
				{toggler % 2 === 0 ?
					<div style={{ float: 'left', color: 'white', marginLeft: '2px', width: '300px' }}>
						<span id="text_white" style={{ marginLeft: '10px' }}>Kits<hr style={{ width: '200px', height: '2px' }} /></span><br />
						<span id="text_white"><Button id="text_white" onClick={() => settext(text + 1)}><AccessibilityNewIcon id="text_white" />Yoga</Button><hr style={{ width: '200px', height: '2px' }} /></span>
						{text % 2 === 0 ? <ul style={{ listStyleType: 'none' }}>
							<li><Button id="text_white" onClick={() => { setdiv(1); settoggler(toggler + 1); }}><CategoryIcon id="text_white" />What is yoga?</Button>

							</li><hr style={{ width: '200px', height: '2px' }} />
							<li><Button id="text_white" onClick={() => { setdiv(2); settoggler(toggler + 1); }}><CategoryIcon id="text_white" />History of Yoga</Button>

							</li><hr style={{ width: '200px', height: '2px' }} />
							<li><Button id="text_white" onClick={() => { setdiv(3); settoggler(toggler + 1); }}><CategoryIcon id="text_white" />Types of Yoga</Button>

							</li><hr style={{ width: '200px', height: '2px' }} />
							<li><Button id="text_white" onClick={() => { setdiv(5); settoggler(toggler + 1); }}><CategoryIcon id="text_white" />Benefits of Yoga</Button>

							</li><hr style={{ width: '200px', height: '2px' }} />

							<li><Button id="text_white" onClick={() => { setdiv(4); settoggler(toggler + 1); }}><CategoryIcon id="text_white" />Myths about Yoga</Button>

							</li>

						</ul> : null
						}
						<span id="text_white"><Button id="text_white" onClick={() => setemoji(emoji + 1)}><AdjustIcon />Meditation</Button><hr style={{ width: '200px', height: '2px' }} /></span>
						{emoji % 2 === 0 ? <ul id="text_white" style={{ listStyleType: 'none' }}>

							<li><Button id="text_white" onClick={e => { setdiv(6); settoggler(toggler + 1); }}><CategoryIcon />Guided Meditations – Isha Kriya and Chit Shakti</Button></li>
							<li><Button id="text_white" onClick={e => { setdiv(7); settoggler(toggler + 1); }} ><CategoryIcon />Five Amazing Benefits of Meditation</Button></li>
							<li><Button id="text_white" onClick={e => { setdiv(8); settoggler(toggler + 1); }} ><CategoryIcon />How to Meditate</Button></li>
							<li><Button id="text_white" onClick={e => { setdiv(9); settoggler(toggler + 1); }} ><CategoryIcon />Science of Meditation</Button></li>

						</ul> : null
						}
						<span id="text_white"><Button id="text_white" onClick={() => settheme(theme + 1)}><BrushIcon />Themes</Button><hr style={{ width: '200px', height: '2px' }} /></span>
						{theme % 2 === 0 ? <ul id="text_white" style={{ listStyleType: 'none' }}>
							<li><Button style={{ color: 'dodgerblue' }} onClick={e => { changethemee('dodgerblue'); settoggler(toggler + 1); }}><CheckBoxOutlineBlankIcon /></Button></li>
							<li><Button style={{ color: 'blue' }} onClick={e => changethemee('blue')}><CheckBoxOutlineBlankIcon /></Button></li>
							<li><Button style={{ color: 'red' }} onClick={e => changethemee('red')}><CheckBoxOutlineBlankIcon /></Button></li>
							<li><Button style={{ color: 'green' }} onClick={e => changethemee('green')}><CheckBoxOutlineBlankIcon /></Button></li>
							<li><Button style={{ color: 'yellow' }} onClick={e => changethemee('yellow')}><CheckBoxOutlineBlankIcon /></Button></li>

						</ul> : null
						}
						<span id="text_white"><Button id="text_white" onClick={() => setfamily(family + 1)}><FaceIcon />Family Members</Button><hr style={{ width: '200px', height: '2px' }} /></span>
						{family % 2 === 0 ? <ul id="text_white" style={{ listStyleType: 'none' }}>
							<li><Button id="text_white">Harry</Button></li>
							<li><Button id="text_white">Ramesh</Button></li>
							<li><Button id="text_white">Sonia</Button></li>
							<li><Button id="text_white">Diljeet</Button></li>
							<li><Button id="text_white">Tom</Button></li>
						</ul> : null
						}
						<span id="text_white"><Button id="text_white" onClick={e => setdiv(10)}><ClearIcon />Boycott Habits</Button><hr style={{ width: '200px', height: '2px' }} /></span>
						<span id="text_white"><Button id="text_white" onClick={e => setdiv(11)}><AddIcon />Incorporate Good Habits</Button><hr style={{ width: '200px', height: '2px' }} /></span>
						<span id="text_white"><Button id="text_white"><ForumIcon />Peoples Visited:1k</Button><hr style={{ width: '200px', height: '2px' }} /></span>
						<span id="text_white"><Button id="text_white"><ForumIcon />Find Helpful:6k</Button><hr style={{ width: '200px', height: '2px' }} /></span>
						<span id="text_white"><Button id="text_white"><NotificationsIcon />Notifications:0</Button><hr style={{ width: '200px', height: '2px' }} /></span>

					</div> : null
				}

			</div>
			<div className={toggler % 2 === 0 ? "col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12" : "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"}>

				<div className={themee === "red" ? "Dchatredbackground" : themee === "green" ? "Dchatgreenbackground" : themee === "yellow" ? "Dchatbackgroundyellow" : themee === "blue" ?
					"Dchatbackgroundblue" : themee === "dodgerblue" ? "Dchatbackgroundskyblue" : null} style={{ color: 'white', height: '800px'}}>

					{div === 1 ? <Dyogawhat /> : div === 2 ? <Dyogahistory /> : div === 3 ? <Dyogatypes /> : div === 4 ? <Dyogamyth /> : div === 5 ? <Dyogabenefits /> :
						div === 6 ? <Dmedichit /> : div === 7 ? <Dmedibeni /> : div === 8 ? <Dmedihow /> : div === 9 ? <Dmedisci /> : div === 10 ? <Dboycotthabit /> : div === 11 ? <Dgoodhabit /> : null}
				</div>

			</div>
		</div>

		<div>
			<Dfooter />
		</div>
	</>)
}

export default Dselfhealing;