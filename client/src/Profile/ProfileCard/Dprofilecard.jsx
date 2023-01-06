import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CallIcon from '@mui/icons-material/Call';
import CakeIcon from '@mui/icons-material/Cake';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { post, updaterelievers } from "../../constant";
const Dprofilecard = (props) => {

	const [set, seta] = useState(true);
	const [relievers, setrelievers] = useState([]);
	const update_rel_dep = async (e) => {

		seta(false);
		const email = props.email;
		const img = props.img;
		const name = props.name;
		const type = props.type
		const phone = props.mobile;
		const variables={email, name, img, phone, type};
		const res = await fetch(updaterelievers, post(variables));

	}

	const [profile, setprofile] = useState(false);
	const expand = () => {
		setprofile(!profile);
	}

	return (<>

		<div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12" id="text_pink">
			<div className="card" id="profile_card">
				<div className="card-body" style={{ textAlign: 'center' }}>

					{props.type ==='Reliever' ?
						<div class="diconr">
							<span style={{ color: '#3e3c17', fontFamily: 'festive	', fontSize: '20px' }}>R</span>

						</div> :
						props.type ==='Both' ?
							<div class="dicon">
								<span style={{ color: '#3e3c17', fontFamily: 'festive	', fontSize: '20px' }}>B</span>

							</div>
							:
							<div class="dicon">
								<span style={{ color: '#3e3c17', fontFamily: 'festive	', fontSize: '20px' }}>D</span>

							</div>

					}

					<div class="profileimage">
						<img id="profile_img" src={props.img} />
					</div>
					<h3 style={{ color: 'white' }}>{props.name}</h3>
					<p style={{ color: '#9b9aac' }}>Web developer</p>
					{set}
					{profile ===true ?
						<Button id="arrowup" onClick={expand}>
							<ExpandMoreIcon />
						</Button>
						:
						profile ===false ?

							<Button id="arrowdown" onClick={expand}>
								<ExpandMoreIcon />
							</Button> : null}


					<p style={{ color: '#736fa0', fontSize: '15px', textTransform: 'uppercase' }}>{props.descript}</p>
					{profile ===true ? <div>


						<p style={{ color: '#a799e2' }}><CallIcon style={{ marginRight: '5px' }} />{props.mobile}</p>
						<p style={{ color: '#a799e2' }}><CakeIcon style={{ marginRight: '5px' }} />{props.age}</p>
						<p style={{ color: '#a799e2' }}><SportsSoccerIcon style={{ marginRight: '5px' }} />{props.hobby}</p>


						{props.hint ===1 ?
							<Button class="button2">
								<span style={{ color: 'white', fontWeight: 'bold' }}>
									Already family member</span></Button> :
							set ===true ?
								<Button class="button3" onClick={update_rel_dep}>
									Accepting as MY{props.type}</Button> :
								<Button class="button2">
									<span style={{ color: 'white', fontWeight: 'bold' }}>
										Already family member</span></Button>
						}

					</div> : null}

				</div>
			</div>

		</div>

	</>)
}

export default Dprofilecard;
