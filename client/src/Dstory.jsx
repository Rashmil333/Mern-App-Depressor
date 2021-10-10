import React,{useState,useEffect} from "react";
import Dnavbar from "./Dnavbar";
import Dfooter from "./Dfooter";
import Dstoryphoto from "./Dstoryphoto";
import Button from '@material-ui/core/Button';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Dcontributiondata from "./Dcontributiondata";
import Dcardstory from "./Dcardstory";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
const Dstory=()=>{
	
	const [category,setcategory]=useState("");
	const [depressors,setdepressors]=useState([]);
	const [relievers,setrelievers]=useState([]);
	const [imgdepressor,set_imgdepressor]=useState();
	var temma="";
	
	const [stories,setstories]=useState([]);

		 const getalldata=async()=>{

  
    const email="allusers@gmail.com"
    const res=await fetch("/getalldata",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email
      })
    });

   
     const data=await res.json();
     console.log(data);
     console.log("the dep is ",data.depressors);
     setdepressors(data.depressors);
     setrelievers(data.relievers);
     setstories(data.stories);
     
    



    
  }

  const postdata=async()=>{
  	toggle1();

  	const img_depressor=imgdepressor;

  	const db_email="allusers@gmail.com";
   
    const {email,story,photoo}=note;
 
    const res=await fetch("/addstory",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
       email,photoo,img_depressor,db_email,story,category
      })
    });

    const data=await res.json();


    
  }

	const validation=()=>{
		var email=document.getElementById('email').value;
		var story=document.getElementById('story').value;
		if(story==""){
		alert("Please enter the story!!!");
		return(0);
		}
		else if(email==""){
		alert("Please enter the email!!!");
		return(0);
		}
		return(1);
	}

	

	const changephoto=(image)=>{
		setphoto(image)

	}
	

	const [modal, setModal] = useState(false);

  	const toggle = () => setModal(!modal);

  	const [modal1, setModal1] = useState(false);

  	const toggle1 = () => setModal1(!modal1);

  	const [photo,setphoto]=useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcvn-muwijozSYdMHcjf7a_7WB8jYqKHT1q40_w9uZ6QVp-1xmbKtJikfZVfvPO-rjgdY&usqp=CAU");
  	const [expand,setexpand]=useState(false);

  	const [note,setnote]=useState({
		story:'',
		email:'',
		photoo:'',
		dep_img:''
	});
	const inputevent=(event)=>{
		const {name,value}=event.target;
		setnote((olddata)=>{
			return{
				...olddata,
				[name]:value,
				photoo:photo,
				dep_img:imgdepressor
			};
		});
		getdata();
		console.log(note);
	}
	const [additem,setadditem]=useState([]);
	const addnote=()=>{
	var valid=validation();
	if(valid==1){
		
				var markedCheckbox = document.getElementsByName('check');
							for (var checkbox of markedCheckbox) {
    								if (checkbox.checked)
      										{temma=temma+" "+"#"+checkbox.value;
      										 setcategory(temma);}
  								}
	

	setadditem((oldata)=>{
		return[...oldata,note];
	});
	console.log(note);
	console.log(temma);
		toggle1();
	}
	
	
}

const expanddiv=()=>{
	setexpand(!expand);
}

useEffect(()=>{
	getalldata();
},[]);
   const getdata=async()=>{
    
    
    const res=await fetch("/getdata",{
      method:"GET",
       headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
     
    });
    const data=await res.json();
    console.log(data);
   
    console.log(data.profile[0].img);
    set_imgdepressor(data.profile[0].img);
    console.log(imgdepressor);
   
    


   }
	

	return(<>
		<Dnavbar/><br/>
		 <a style={{marginLeft:'25%',color:'white',textDecoration:'none'}} href="#skip">Share your story<ArrowDownwardIcon/></a><br/><br/>
		<p id="text_white">{category}</p>
		<div className="container" style={{marginTop:'20px'}}>
			<div className="row">
			 <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12" >
			 	<div className="container">
			 		<div className="row">
			 		<Dcardstory story="From some weeks i was in Rough Conditions.Frankly speaking I was suffering from
			 		 depresssion ,anxiety.But now i am fine.Thanks to relievers.Relievers are supportive.They even
			 		 called me twice a week. It looks like i Got a new family." email="lily333@gmail.com" name="Harry" imgr="https://st.focusedcollection.com/18590116/i/650/focused_227260878-stock-photo-close-man-posing-selfie.jpg" category="#depression #anxiety"/>
			 			{additem.map((val)=>{
				return(<Dcardstory 
				story={val.story}
				email={val.email}
				imgr={val.photoo}
				depressor_img={val.dep_img}

				/>);
			
				})}
					{stories.map((cvalue)=>{
					return(<Dcardstory story={cvalue.story} email={cvalue.email} imgr={cvalue.img_reliever} category={cvalue.category} depressor_img={cvalue.img_depressor}/>)
				})}

			 		</div>
			 	</div>
				
			</div>
					

				
				<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12"  id="skip" style={{marginTop:'20px',color:'white'}}>

					<textArea id="story" onClick={expanddiv} name="story" value={note.story} onChange={inputevent} type="text"placeholder="Write your story"/><br/><hr style={{backgroundColor:'pink'}}/>
					{expand==true?<div>
					
					<label>Choose your favourite Reliever</label><br/>
					<Button onClick={toggle} id="text_pink"> Choose</Button><Dstoryphoto img={photo}/>
					<label>Email</label><br/>
					<input id="email" name="email" value={note.email} onChange={inputevent}type="email" placeholder="lily333@gmail.com"/><br/><hr style={{backgroundColor:'pink'}}/>

					<label>Category</label><br/>

					<label>Depression</label>
					<input  style={{marginLeft:'20px',float:'right'}}type="checkbox" name="check" value="depression"/><br/>
					<label>Stress</label>
					<input style={{marginLeft:'20px',float:'right'}}type="checkbox" name="check" value="stress"/><br/>
					<label>Anxiety</label>
					<input style={{marginLeft:'20px',float:'right'}}type="checkbox" name="check" value="anxiety"/><br/>
					<label>Tension</label>
					<input style={{marginLeft:'20px',float:'right'}}type="checkbox" name="check" value="tension"/><br/>
					<label>Sucidial</label>
					<input style={{marginLeft:'20px',float:'right'}}type="checkbox" name="check" value="sucidial"/><br/>
					<br/><hr style={{backgroundColor:'pink'}}/>
					<Button id="Dsendbut"onClick={addnote} >SEND</Button>
					</div>
					:null}


				</div>
			</div>
		</div>
		 <div>
      
      <Modal className="modal-dialog-centered" isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        {Dcontributiondata.map((cvalue)=>{
        return( <Dstoryphoto img={cvalue.img} name={cvalue.name} text="Select" outshow={changephoto}/>)
        })}

         {depressors.map((cvalue)=>{
        return( <Dstoryphoto img={cvalue.img} name={cvalue.name} text="Select" outshow={changephoto}/>)
        })}

         {relievers.map((cvalue)=>{
        return( <Dstoryphoto img={cvalue.img} name={cvalue.name} text="Select" outshow={changephoto}/>)
        })}
        
        </ModalBody>
        <ModalFooter>
        
        </ModalFooter>
      </Modal>
    </div>

    <div>
      
      <Modal className="modal-dialog-centered" isOpen={modal1} toggle={toggle1} >
        <ModalHeader toggle={toggle1}>After posting your story you cannot change it.</ModalHeader>
        <ModalBody>
       		<h3> Are you sure want to post the story!!!</h3><br/>
       		<button id="story_modal_button" onClick={postdata}>Yes</button>	<button id="story_modal_button" onClick={toggle1}>No</button>
        
        </ModalBody>
        <ModalFooter>
        
        </ModalFooter>
      </Modal>
    </div>
    <Dfooter/>
	</>)
}

export default Dstory;