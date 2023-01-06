import React,{useState} from "react";
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";
import { post, profile_update } from "../constant";

const Dprofilesown=(props)=>{


const history=useHistory();
	const [hobbies,sethobbies]=useState();
	const [work,setwork]=useState();
	const [category,setcategory]=useState();
	const [state,setstate]=useState({
    		img:"",description:"",age:"",mobile_no:"",name_d:""
  			});

	 let name,value;
  const inputevent=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setstate({...state,[name]:value});
    console.log(state)
  }
  const postdata=async()=>{
  	var url=document.getElementById('img_url').value;
  	var description=document.getElementById('description').value;
  	var age_n =document.getElementById('age').value;
  	var name_n =document.getElementById('name').value;
  	var phone_n =document.getElementById('phone').value;
  	var code_n =document.getElementById('code').value;
  	if(name_n===""){
  		alert("Please enter the name please.!!!");
  	}
  	else if(url===""){
  	alert("please give the url of your profile image. ")
  	}
  	else if(description===""){
  	alert("Please tell us about yourself")
  	}
  	else if(age_n===""){
  	alert("Please enter the image");
  	}
  	else if(code_n===""){
  	alert("Please enter the code. Without code the data is not updated properly.");
  	}
  	else{
  		   const {img,description,age,name_d,mobile_no}=state;
    const type="update";
	const variables={ name_d,mobile_no,hobbies,work,category,img,age,description,type};
    const res=await fetch(profile_update,post(variables));    

    console.log(res.status)
    if(res.status===200){
    	alert("Your profile is updated successfully.")
    	window.location.reload();
    }


  	}
 	
 
    
  }

   const check_f=()=>{
  	const val_work=document.getElementById('what_doing').value;
  	const val_category=document.getElementById('category').value;
  	const val_hobbies=document.getElementById('hobbies').value;
  	console.log(val_work);
  	setwork(val_work);
  	setcategory(val_category);
  	sethobbies(val_hobbies);
  }

	const validation=()=>{
	var url=document.getElementById('img_url').value;
  	var description=document.getElementById('description').value;
  	var age_n =document.getElementById('age').value;
  	var name_n =document.getElementById('name').value;
  	var phone_n =document.getElementById('phone').value;
  	var code_n =document.getElementById('code').value;
  	if(name_n===""){
  		alert("Please enter the name please.!!!");
  	}
  	else if(url===""){
  	alert("please give the url of your profile image. ")
  	}
  	else if(description===""){
  	alert("Please tell us about yourself")
  	}
  	else if(age_n===""){
  	alert("Please enter the image");
  	}
  	else if(code_n===""){
  	alert("Please enter the code. Without code the data is not updated properly.");
  	}
		
	}

	

	
	const [show,setshow]=useState(false);

	const setvalues=()=>{
			const val_work=document.getElementById('what_doing').value;
  			const val_category=document.getElementById('category').value;
  			const val_hobbies=document.getElementById('hobbies').value;
  			console.log(val_work);
  			setwork(val_work);
  			setcategory(val_category);
  			sethobbies(val_hobbies);


	}

	const edit=()=>{
		setshow(!show);
	}
	return(<>
	<p id="text_white">{work}{category}{hobbies}</p>
	{show===false?
	<div>
		<br/><br/>
		<div className="container" id="text_white">
			<div className="row">
				<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
					<img style={{width:'300px',height:'300px',borderRadius:'50%'}} src={props.img}/>

				</div>
				<div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
				 <div className="row">

					<div className="col-xl-3 col-lg-3 col-md-6 col-sm-3 col-3">
						<h6> <span id="text_pink"><i>Name</i> </span></h6>
						<h6> <span id="text_pink"><i>Email</i> </span></h6>
						<h6> <span id="text_pink"><i>Phone No</i> </span></h6>
						<h6> <span id="text_pink"><i>Age</i> </span></h6>
						<h6> <span id="text_pink"><i>Type</i> </span></h6>
						<h6> <span id="text_pink"><i>Hobbies</i> </span></h6>
						<h6> <span id="text_pink"><i>Work</i> </span></h6>
						<h6> <span id="text_pink"><i>Description</i> </span></h6>
						

					</div>
					<div className="col-xl-4 col-lg-4 col-md-6 col-sm-5 col-5">
					<h6>  <span>{props.name}</span></h6>
					<h6>  <span>{props.email}</span></h6>
					<h6>  <span>{props.phone}</span></h6>
					<h6>  <span>{props.age}</span></h6>
					<h6>  <span>{props.type}</span></h6>
					<h6>  <span>{props.hobbies}</span></h6>
					<h6>  <span>{props.work}</span></h6>
					<h6>  <span>~{props.description}~</span></h6>

					</div>
				 </div>
						<Button style={{backgroundColor:'pink'}} onClick={edit}>Edit</Button>


				</div>
			</div>
			
		</div>
	</div>:
	<div>
		<br/><br/>
		<div className="container" id="text_white">
			<div className="row">
				<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
					<img style={{width:'300px',height:'300px',borderRadius:'50%'}} src={props.img}/>

				</div>
				<div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
				 <div className="row">

				
					<div className="col-xl-4 col-lg-4 col-md-6 col-sm-5 col-5">
			    
			      	 <label id="text_pink"><i><b>Img url</b></i> </label>
					<input id="img_url"  type="text" placeholder="http://imgurl.png" className="profile_input" name="img" value={state.img} onChange={inputevent}/><br/><br/>
					<label id="text_pink"><i><b>Name</b></i> </label>
					<input id="name"  type="text" placeholder={props.name} className="profile_input" name="name_d" value={state.name_d} onChange={inputevent}/>
					<label id="text_pink"><i><b>Phone</b></i> </label>
					<input id="phone" type="number" placeholder={props.phone} className="profile_input"name="mobile_no" value={state.mobile_no} onChange={inputevent}/><br/>
					<label id="text_pink"><i><b>Age</b></i> </label>
					<h6>  <input id="age" className="profile_input" type="text" name="age" placeholder={props.age} onChange={inputevent}/></h6>
					<label id="text_pink"><i><b>Category</b></i> </label>
					<select id="category"  className="letus_select">
							<option value="Depressor">Depressor</option>
							<option value="Reliever">Reliever</option>
							<option value="Both">Both</option>
					</select>
					<label id="text_pink"><i><b>Hobbies</b></i> </label>
					<select id="hobbies" className="letus_select">
							<option value="Singing and Dancing">Singing and Dancing</option>
							<option value="Reading and Writing">Reading and Writing</option>
							<option value="Sports and Yoga">Sports and Yoga</option>
							<option value="Movies and Documentories">Movies and Documentories</option>
					</select>
					<label id="text_pink"><i><b>Work</b></i> </label>
					<select id="what_doing" className="letus_select">
							<option value="School Student">School Student</option>
							<option value="College Student">College Student</option>
							<option value="Emplpoyed but not married">Emplpoyed but not married</option>
							<option value="Employed and married">Employed and married</option>
					</select><br/>
					<label id="text_pink"><i><b>Description</b></i> </label>
					<h6>  ~<textArea id="description" style={{width:'500',height:'100px'}} className="profile_input" type="text" placeholder={props.description} name="description" value={state.description} onChange={inputevent}/>~</h6>
					<label id="text_pink"><i><b>Write code Col@ft</b></i> </label>
					<input id="code" className="profile_input" type="text" placeholder="Write the code" onChange={setvalues}/><br/><br/>
						<div className="container">
							<div className="row">
								<div className="col-xl-6 col-md-6 col-lg-6 col-sm-6 col-6">
										<Button style={{backgroundColor:'pink'}} onClick={edit}>Back</Button>
								</div>
								<div className="col-xl-6 col-md-6 col-lg-6 col-sm-6 col-6">
									<Button  style={{backgroundColor:'pink',marginLeft:'40px'}} onClick={postdata}  >Update</Button>
								</div>
							</div>
						</div>

					
						
			
					


					</div>
				 </div>
						


				</div>
			</div>
			
		</div>
	</div>}

	</>)
}

export default Dprofilesown;