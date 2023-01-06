import React, { useState } from "react";
import SettingsIcon from '@material-ui/icons/Settings';
import Dnavbar from "../Components/Navbar/Dnavbar";
import Button from '@material-ui/core/Button';
import Dfooter from "../Components/Footer/Dfooter";
import Daboutcard from "./AboutCard/Daboutcard";
import my from "../images/my.jpg"
import { post, update_password } from "../constant";
const Dsetting = () => {

	const [pass, setpass] = useState();
	const [repass, setrepass] = useState();

	const changepass = async () => {
		const variables={pass, repass};
		const res = await fetch(update_password, post(variables));
		setpass("");
		setrepass("");
		if (res.status === 200) {
			alert("Password is Changed Successfully!!")
		}
		else {
			alert("Sorry!!")
		}
		console.log(res.status);
	}

	const [show, setshow] = useState(false);
	return (<>
		<Dnavbar />
		<div class="setting_div">
			<div class="setting_div_center">
				<div style={{ display: 'flex' }}>
					<SettingsIcon style={{ width: '60px', height: '60px', position: 'absolute', left: '-90%', top: '-20px', color: 'pink' }} id="setting" />						<button id="setting_button" onClick={() => setshow(!show)}>Change Password</button>

				</div>

				<div >
					<input class="password_input" type="password" placeholder="Enter new password" value={pass} onChange={(e) => setpass(e.target.value)} /><br /><br />
					<input class="password_input" type="password" placeholder="Renter the Password" value={repass} onChange={(e) => setrepass(e.target.value)} />
					<br /><br />
					<Button style={{ color: 'white', backgroundColor: 'red', marginLeft: '40px' }} onClick={changepass}>Change</Button>

				</div>


			</div>


		</div>
		<div class="containe" style={{ backgroundColor: '#0c112e' }}>
			<div class="row" style={{ margin: '10px' }}>
				<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
					<h2 style={{ color: '#abacac', textAlign: 'center' }}>About US</h2>
					<h3 style={{ color: '#fdfeff', fontWeight: 'bold' }}>Purpose of making this website</h3>
					<p style={{ color: '#abacac	' }}>
						We have designed this website to just make the people give a platform
						to reduce bad phases of the life.
						You can imagine us a NGO working for the people of every phase of life
						suffering from these kind of depressions,stress,anxiety,tensions,sucidial thoughts.
						We have designed this website to just make the people give a platform
						to reduce bad phases of the life.
						You can imagine us a NGO working for the people of every phase of life
						suffering from these kind of depressions,stress,anxiety,tensions,sucidial thoughts.
						We have designed this website to just make the people give a platform
						to reduce bad phases of the life.
						You can imagine us a NGO working for the people of every phase of life
						suffering from these kind of depressions,stress,anxiety,tensions,sucidial thoughts.
						We have designed this website to just make the people give a platform
						to reduce bad phases of the life.
						You can imagine us a NGO working for the people of every phase of life
						suffering from these kind of depressions,stress,anxiety,tensions,sucidial thoughts.
						We have designed this website to just make the people give a platform
						to reduce bad phases of the life.
						You can imagine us a NGO working for the people of every phase of life
						suffering from these kind of depressions,stress,anxiety,tensions,sucidial thoughts.
					</p>

				</div>
				<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" >
					<img src="https://images.unsplash.com/photo-1501770118606-b1d640526693?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VwcG9ydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
						style={{ width: '90%', height: '100%', marginTop: '20px', borderRadius: '10px', marginLeft: '5%' }} alt='pic' />
				</div>
				<h2 style={{ color: '#fdfeff', marginTop: '200px', fontWeight: 'bold', marginLeft: '40%' }}>Founders</h2>
				<br />


			</div>
			<div class="row">
				<div class='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
					<Daboutcard image={my} name="Rashmil Rajpoot" age="22" experience='2' email='rashmilrajpoot333@gmail.com' phone="8601279470" />
				</div>

				<div class='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
					<Daboutcard name="Haider Ali" age="23" experience='2' email='haidervns@gmail.com' phone="8318495069" />
				</div>

				<div class='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
					<Daboutcard name="Ram Avtar" age="24" experience='2' email='ram29avtar@gmail.com' phone="9452814442" />
				</div>
			</div>

			<div style={{ marginTop: '20%' }} >

				<h1 style={{ color: 'white', fontFamily: 'Fredoka One', textAlign: 'center' }}>Hope you liked it</h1>
				<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
				<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
			</div>

		</div>
		<Dfooter />


	</>)
}

export default Dsetting;