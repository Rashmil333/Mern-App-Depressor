import React from "react"
import CakeIcon from '@mui/icons-material/Cake';
import StarIcon from '@mui/icons-material/Star';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
const Daboutcard=(props)=>{
	return(<>
			<div style={{backgroundColor:'#2b3566',borderRadius:'50px',marginTop:'20%',padding:'80px'
				,textAlign:'center',height:'550px',width:'340px',marginLeft:'10px'}}>

					<div class="aboutphoto">
					<img src="https://media.springernature.com/full/springer-cms/rest/v1/img/18893370/v1/height/320"
					style={{width:'150px',height:'150px',borderRadius:'50%',}}/>
					</div>
					<p style={{color:"#cdd5eb",fontWeight:'bold',fontSize:'20px',textAlign:'center'}}>{props.name}</p>\
					<span style={{color:'#55669b',textAlign:'center'}}>Web and Android Developer</span>
					<div style={{display:'flex'}}>
						<div style={{backgroundColor:'#694afe',width:'70px',height:'70px',textAlign:'center',borderRadius:'50%',paddingTop:'20px',}}>
							<CakeIcon/>
							<br/>
							<p style={{color:'white',marginTop:'60%',fontSize:'25px'}}>{props.age}</p>

						</div>
						<div style={{borderLeft:'0.5px solid #2a5776',marginLeft:'20px'}}>
							
						</div>
							<div style={{backgroundColor:'#43d4c3',width:'70px',height:'70px',textAlign:'center',borderRadius:'50%',paddingTop:'20px',marginLeft:'20px'}}>
							<StarIcon/>
								<br/>
							<p style={{color:'white',marginTop:'60%',fontSize:'25px'}}>{props.experience}</p>
						</div>
						
					</div>
					<hr style={{backgroundColor:'#2a5776',marginTop:'40%',width:'100%'}}/>
				<div style={{color:'#2b8493',marginTop:'10px',display:'flex',marginLeft:'20px'}}>
				<CallIcon/>
				<p style={{marginLeft:'10px'}}> {props.phone}</p>
				</div>
					<div style={{color:'#2b8493',display:'flex',marginLeft:'2px'}}>
				<EmailIcon/>
				<p style={{marginLeft:'7px'}}>{props.email} </p>
				</div>

				</div>
	</>)
}
export default Daboutcard