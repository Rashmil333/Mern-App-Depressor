import React from 'react';
import {useHistory} from "react-router-dom";
import {NavLink,NavItem} from "reactstrap";

const Dcommon=(props)=>{

	 const history=useHistory(); 

	const gotologin=()=>{
		history.push('/signup')
	}
	return(<>
		<div className="container" style={{marginTop:'10%'}}>
		 <div className="row">
		   <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
		        <h1 style={{color:'white',fontWeight:'900'}}>{props.text}</h1>
				<h3 style={{color:'white'}}>{props.description}</h3>
				<h5 style={{color:'powderblue'}}>If you are just passing your life Stop!<br/>Live your life...</h5>
				
					<button class="getstarted" onClick={gotologin}>Get started</button>
			
			
				

		   </div>
		   <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" id="depressor_img">
		       <img style={{width:'300px'}}  src={props.img}/>


		   </div>
		 </div>

		</div>
		
		</>)
}

export default Dcommon;