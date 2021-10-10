import React,{useState} from "react";
import SettingsIcon from '@material-ui/icons/Settings';
import Dnavbar from "./Dnavbar";
import Button from '@material-ui/core/Button';
import Dfooter from "./Dfooter";

const Dsetting=()=>{

	const [pass,setpass]=useState();
	const [repass,setrepass]=useState();

	const changepass=async()=>{
		 const res=await fetch("/update_password",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        pass,repass
      })
    });
		 setpass("");
		 setrepass("");
		 if(res.status==200){
		 	alert("Password is Changed Successfully!!")
		 }
		 else{
		 	alert("Sorry!!")
		 }

		console.log(res.status);

	}

	const [show,setshow]=useState(false);
	return(<>
		<Dnavbar/>	
		<div class="setting_div">
			<div class="setting_div_center">
					<div style={{display:'flex'}}>
						<SettingsIcon style={{width:'60px',height:'60px',position:'absolute',left:'-90%',top:'-20px',color:'pink'}} id="setting"/>						<button  id="setting_button" onClick={()=>setshow(!show)}>Change Password</button>
						
					</div>
						
				<div >
				<input class="password_input" type="password" placeholder="Enter new password" value={pass} onChange={(e)=>setpass(e.target.value)}/><br/><br/>
				<input class="password_input" type="password" placeholder="Renter the Password" value={repass} onChange={(e)=>setrepass(e.target.value)}/>
				<br/><br/>
				<Button style={{color:'white',backgroundColor:'red',marginLeft:'40px'}} onClick={changepass}>Change</Button>
							
			</div>

				
			</div>
			
			
		</div>
		<Dfooter/>

	
	</>)
}

export default Dsetting;