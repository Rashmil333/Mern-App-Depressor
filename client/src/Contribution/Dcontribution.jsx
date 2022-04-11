import React, { useState, useEffect } from 'react';
import Dnavbar from "../Components/Navbar/Dnavbar";
import Button from '@material-ui/core/Button';
import Dfooter from "../Components/Footer/Dfooter";
import Dcontributeprobdiv from "./Dcontributeprobdiv";
import Dcontributiondata from "./Dcontributiondata";


const Dcontribution = () => {

	const [state, setstate] = useState({
		email: "", name: "", phoneno: "", img: "", bank_acc: "", problem: "", address: "", nearest_res: ""
	});

	const [problems, setproblems] = useState([]);

	let name, value;
	const inputevent = (e) => {

		name = e.target.name;
		value = e.target.value;
		setstate({ ...state, [name]: value });
		console.log(state)
	}
	const postdata = async (e) => {


		validation();
		e.preventDefault();
		const { email, name, phoneno, img, bank_acc, problem, address, nearest_res } = state;
		const email_sender = "allusers@gmail.com"

		const res = await fetch("/updateproblem", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email_sender, email, name, phoneno, img, bank_acc, problem, address, nearest_res
			})
		});
		console.log(res.status);
		if (res.status === 200) {
			alert('Problem is posted!')
			window.location.reload();
		}
		else {
			alert('Sorry try again!');
		}

	}

	const getalldata = async () => {
		const email = "allusers@gmail.com"
		const res = await fetch("/getalldata", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email
			})
		});
		const data = await res.json();
		setproblems(data.user_problems);
	}


	const validation = () => {
		var problem_s = document.getElementById('Dcomment').value;
		var img_s = document.getElementById('img').value;
		var phone_s = document.getElementById('phone').value;
		var bank_s = document.getElementById('bank').value;
		var address_s = document.getElementById('address').value;
		var res_s = document.getElementById('res').value;
		var name_s = document.getElementById('name').value;
		var email_s = document.getElementById('email').value;
		if (problem_s === "") {
			alert("Please enter the problem");
		}
		else if (img_s === "") {
			alert("please enter the image url");
		}
		else if (phone_s === "") {
			alert("please enter the image url");
		}
		else if (bank_s === "") {
			alert("please enter the image url");
		}
		else if (address_s === "") {
			alert("please enter the image url");
		}
		else if (res_s === "") {
			alert("please enter the image url");
		}
		else if (name_s === "") {
			alert("please enter the image url");
		}
		else if (email_s === "") {
			alert("please enter the email")
		}
	}

	useEffect(() => {
		getalldata();
	}, [])

	return (<>
		<Dnavbar />
		<h1 id="text_pink" style={{ textAlign: 'center' }}>People Who need help</h1><br /><br />
		{/* <a style={{marginLeft:'20%',color:'white',textDecoration:'none'}} href="#skip">Ask a Problem<ArrowDownwardIcon/></a><br/><br/> */}
		<div id="contribute_div" style={{ backgroundColor: '#171717' }}>
			<div className="row" >
				<div style={{}} id="contributionprob">

					{Dcontributiondata.map((cvalue) => {
						return (<Dcontributeprobdiv name={cvalue.name} text={cvalue.text} img={cvalue.img} />);
					})}
					{problems.map((cvalue) => {
						return (<Dcontributeprobdiv name={cvalue.name} text={cvalue.problem} img={cvalue.img} img={cvalue.img} banko={cvalue.bank_acc}
							phono={cvalue.phone} addresso={cvalue.address} reso={cvalue.nearest_restaurent} emailo={cvalue.email} />)
					})}

				</div>
				{/* <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
						<div style={{width:'300px',height:'300px',backgroundColor:'#252837'
						,marginTop:'10px',borderRadius:'13px'}}>
							<p style={{marginTop:'20px',marginLeft:'10px'}}>Trending Problems</p>
							<br/>
							<div style={{display:'flex',marginTop:'10px'}}>
								<div style={{marginLeft:'30px'}}>
											<img  src="https://images.unsplash.com/photo-1530490125459-847a6d437825?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVscGluZyUyMHRoZSUyMG5lZWR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" id="contributephoto"/>
										<p style={{textAlign:'center'}}>Tsunami</p>
								</div>
									<div style={{marginLeft:'30px'}}>
											<img  src="https://images.unsplash.com/photo-1530490125459-847a6d437825?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVscGluZyUyMHRoZSUyMG5lZWR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" id="contributephoto"/>
										<p style={{textAlign:'center'}}>Starvation</p>
								</div>
									<div style={{marginLeft:'30px'}}>
											<img  src="https://images.unsplash.com/photo-1530490125459-847a6d437825?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVscGluZyUyMHRoZSUyMG5lZWR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" id="contributephoto"/>
										<p style={{textAlign:'center'}}>Tsunami</p>
								</div>
		
							</div>

								<div style={{display:'flex',marginTop:'10px'}}>
								<div style={{marginLeft:'30px'}}>
											<img  src="https://images.unsplash.com/photo-1530490125459-847a6d437825?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVscGluZyUyMHRoZSUyMG5lZWR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" id="contributephoto"/>
										<p style={{textAlign:'center'}}>Tsunami</p>
								</div>
									<div style={{marginLeft:'30px'}}>
											<img  src="https://images.unsplash.com/photo-1530490125459-847a6d437825?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVscGluZyUyMHRoZSUyMG5lZWR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" id="contributephoto"/>
										<p style={{textAlign:'center'}}>Starvation</p>
								</div>
									<div style={{marginLeft:'30px'}}>
											<img  src="https://images.unsplash.com/photo-1530490125459-847a6d437825?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVscGluZyUyMHRoZSUyMG5lZWR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" id="contributephoto"/>
										<p style={{textAlign:'center'}}>Tsunami</p>
								</div>
		
							</div>
					
							
						</div>
						
					</div> */}

			</div>
			<div id="skip" style={{ textAlign: 'center' }}>
				<h1 id="text_pink">More Contribute More <span >Peace</span></h1>
				<p id="text_pink">We are for you so ask freely for any kind of help.
					<br />Whether it is financial help or any other product base help.
					This is your family!!!</p><br /><br />
				<form method="POST">
					<textArea id="Dcomment" class="blackinput" type="text" placeholder="Ask for help" style={{ height: '140px' }} name="problem" value={state.problem} onChange={inputevent} /><br /><br />

					<input id="img" className="blackinput2" type="text" placeholder="Give the url of your image.It can be random image." name="img" value={state.img} onChange={inputevent} /><br />

					<input id="bank" className="blackinput2" type="text" placeholder="Bank Account No." name="bank_acc" value={state.bank_acc} onChange={inputevent} /><br />

					<input id="res" className="blackinput2" type="text" placeholder="Address of nearest restaurent." name="nearest_res" value={state.nearest_res} onChange={inputevent} /><br />

					<input id="address" className="blackinput2" type="text" placeholder="Your Address" name="address" value={state.address} onChange={inputevent} /><br />

					<input id="name" className="blackinput2" type="text" placeholder="Name" name="name" value={state.name} onChange={inputevent} /><br />

					<input id="phone" className="blackinput2" type="text" placeholder="Your phone no" name="phoneno" value={state.phoneno} onChange={inputevent} /><br />


					<input id="email" className="blackinput2" type="text" placeholder="email" name="email" value={state.email} onChange={inputevent} /><br />
					<br />

					<Button type="submit" id="Dsendbut" onClick={postdata}>Send</Button>
				</form>
				<br /><br />
				<p id="text_pink">1: You can contribute money.<br />

					<a href="https://paytm.com/offers/bhimupi.html"><img src="https://image01.realme.net/general/20190821/1566357380566.jpg" style={{ width: '40%' }} alt='pic' /></a><br />
					2: You can contribute a gift for
					someone via amazon,flipkart etc</p>
				<a href="https://www.amazon.in/"><img style={{ width: '40%' }} alt='pic' src="https://www.visionmate.se/en/wp-content/uploads/sites/2/2020/09/wiXtq4NPpGbNf6PEHTT4hg.jpg" /></a>
				<a href="https://www.flipkart.com/"><img style={{ width: '40%', marginLeft: '15px' }} alt='pic' src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/06/flipkart-1591698402.jpg" /></a>
			</div>
			<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style={{ textAlign: 'center' }}>
				<h1 id="text_pink">Contribute by downloading the Apps by us.Check these</h1>
				<img id="contributeapp" style={{ width: '40%' }} src="http://allaboutwindowsphone.com/images/flow/apps/weather/weather1.jpg" alt='pic' />
				<img id="contributeapp" style={{ width: '40%', height: '38%', marginLeft: '10px' }} src="https://i.pinimg.com/originals/11/2d/d1/112dd1b57e9ec023f60eb37d4db116bf.png" alt='pic' /><br /><br /><br />
				<img id="contributeapp" style={{ width: '40%' }} src="https://i.pinimg.com/originals/1f/3f/4c/1f3f4ce973d946578567f190e2773709.png" alt='pic' />
				<img id="contributeapp" style={{ width: '40%', height: '19%', marginLeft: '10px', marginTop: '6px' }} src="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1451970261/c3wxrwtvwokmz7l7ptqu.png" alt='pic' />

			</div>
		</div>

		<Dfooter />

	</>)
}

export default Dcontribution;