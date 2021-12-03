import React,{useState,useEffect,useRef} from "react";
import Dnavbar from "./Dnavbar";
import Dfooter from "./Dfooter";

import Dstoryphoto from "./Dstoryphoto";
import Button from '@material-ui/core/Button';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Dcontributiondata from "./Dcontributiondata";
import Dcardstory from "./Dcardstory";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import	 Dstorymodalcard from "./Dstorymodalcard";

import styled from "styled-components";

import "@tensorflow/tfjs-backend-cpu";
//import "@tensorflow/tfjs-backend-webgl";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

const ObjectDetectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetectorContainer = styled.div`
  min-width: 200px;
  height: 200px;
  border: 3px solid #fff;
  border-radius: 5px;
  display: flex;
   margin-left:100px;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top:30px;

`;

const TargetImg = styled.img`
  height: 100%;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const SelectButton = styled.button`
  padding: 7px 10px;
  border: 2px solid transparent;
  background-color: #fff;
  color: #0a0f22;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  margin-top: 2em;

  cursor: pointer;
  transition: all 260ms ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
  }
`;

const TargetBox = styled.div`
  position: absolute;

  left: ${({ x }) => x + "px"};
  top: ${({ y }) => y + "px"};
  width: ${({ width }) => width + "px"};
  height: ${({ height }) => height + "px"};

  border: 4px solid #1ac71a;
  background-color: transparent;
  z-index: 20;

  &::before {
    content: "${({ classType, score }) => `${classType} ${score.toFixed(1)}%`}";
    color: #1ac71a;
    font-weight: 500;
    font-size: 17px;
    position: absolute;
    top: -1.5em;
    left: -5px;
  }
`;

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
	
const [mlresult,setmlresult]=useState(false);
	 const fileInputRef = useRef();
  const imageRef = useRef();
  const [imgData, setImgData] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const isEmptyPredictions = !predictions || predictions.length === 0;
  console.log(fileInputRef)
  const openFilePicker = () => {
    console.log(fileInputRef)
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const normalizePredictions = (predictions, imgSize) => {
    if (!predictions || !imgSize || !imageRef) return predictions || [];
    return predictions.map((prediction) => {
      const { bbox } = prediction;
      const oldX = bbox[0];
      const oldY = bbox[1];
      const oldWidth = bbox[2];
      const oldHeight = bbox[3];

      const imgWidth = imageRef.current.width;
      const imgHeight = imageRef.current.height;

      const x = (oldX * imgWidth) / imgSize.width;
      const y = (oldY * imgHeight) / imgSize.height;
      const width = (oldWidth * imgWidth) / imgSize.width;
      const height = (oldHeight * imgHeight) / imgSize.height;

      return { ...prediction, bbox: [x, y, width, height] };
    });
  };

  const detectObjectsOnImage = async (imageElement, imgSize) => {
    const model = await cocoSsd.load({});
      const img = document.getElementById('img');
    const predictions = await model.detect(imageElement, 6);
    const normalizedPredictions = normalizePredictions(predictions, imgSize);
    setPredictions(normalizedPredictions);
    console.log("Predictions: ", predictions);
    var persons=0;
    predictions.map((cvalue)=>{
    	if(cvalue.class=='person'){
    		persons+=1
    	}
    })
    if(persons==2){
    	setmlresult(true)
    }
    else{
    	setmlresult(false)
    }
    console.log(persons+mlresult)
   
  };

  const readImage = (file) => {
    return new Promise((rs, rj) => {
      const fileReader = new FileReader();
      fileReader.onload = () => rs(fileReader.result);
      fileReader.onerror = () => rj(fileReader.error);
      fileReader.readAsDataURL(file);
    });
  };

  const onSelectImage = async (e) => {
    setPredictions([]);
    setLoading(true);

    const file = e.target.files[0];
    const imgData = await readImage(file);
    setImgData(imgData);

    const imageElement = document.createElement("img");
    imageElement.src = imgData;

    imageElement.onload = async () => {
      const imgSize = {
        width: imageElement.width,
        height: imageElement.height,
      };
      await detectObjectsOnImage(imageElement, imgSize);
      setLoading(false);
    };
  };

	return(<>
		<Dnavbar/>
		 
		
		<div style={{backgroundColor:'#10182f'}}>
		<br/>
		<p id="text_white">{category}</p>
		<div className="container" >
    <a style={{marginLeft:'25%',color:'white',textDecoration:'none',backgroundColor:'#6564fd'
		 ,padding:'10px',borderRadius:'10px'}} href="#skip">Share your story<ArrowDownwardIcon/></a>
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

					<textArea style={{height:'150px',width:'100%'}} id="story" class="blackinput" onClick={expanddiv} name="story" value={note.story} onChange={inputevent} type="text"placeholder="Write your story"/><br/><hr style={{backgroundColor:'pink'}}/>
					{expand==true?<div>
					
					<label>Choose your favourite Reliever</label><br/>
					<Button onClick={toggle} id="text_pink"> Choose</Button><Dstoryphoto img={photo}/>
					<label>Post a image with your reliever</label><br/>
					<Button style={{
						color:'white',
						border:'2px solid white',
						borderRadius:'10px'
					}}
				 onClick={openFilePicker}
					>
						Select Image
					</Button>
						<input id="email" name="email" class="blackinput" value={note.email} onChange={inputevent} type="text" placeholder="Give the url of image"/><br/><hr style={{backgroundColor:'pink'}}/>
					<br/>	<br/>
					{
						mlresult==true && isLoading==false?
							<p  style={{backgroundColor:'green',color:'white',width:'60px',borderRadius:'10px',textAlign:'center',marginLeft:'50px'}}>Correct</p>
						:
						isLoading==false?
						<p  style={{backgroundColor:'red',color:'white',width:'200px',borderRadius:'10px',textAlign:'center',marginLeft:'50px'}}>Image should contain  two persons.</p>
						:null
					}
					{isLoading==true?
						 <div className="loader">
		 	
		 				</div>
						:null}
						
					<div style={{width:'200px',height:'200px'}}>
				
					
				
						 <ObjectDetectorContainer >
      <DetectorContainer >
        {imgData && <TargetImg src={imgData} ref={imageRef} />}
        {!isEmptyPredictions &&
          predictions.map((prediction, idx) => (
            <TargetBox
              key={idx}
              x={prediction.bbox[0]}
              y={prediction.bbox[1]}
              width={prediction.bbox[2]}
              height={prediction.bbox[3]}
              classType={prediction.class}
              score={prediction.score * 100}
            />
          ))}
      </DetectorContainer>
      <HiddenFileInput
        type="file"
        ref={fileInputRef}
        onChange={onSelectImage}
      />
    
    </ObjectDetectorContainer>
			
						
						
					</div>
					<label style={{marginTop:'40px'}}>Email</label><br/>
					<input id="email" name="email" class="blackinput" value={note.email} onChange={inputevent}type="email" placeholder="lily333@gmail.com"/><br/><hr style={{backgroundColor:'pink'}}/>

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
        <ModalHeader toggle={toggle}>Choose Reliever</ModalHeader>
        <ModalBody style={{backgroundColor:'#1b1b41'}}>
        {Dcontributiondata.map((cvalue)=>{
        return( <Dstorymodalcard img={cvalue.img} name={cvalue.name} text="Select" outshow={changephoto}/>)
        })}

         {depressors.map((cvalue)=>{
        return(  <Dstorymodalcard img={cvalue.img} name={cvalue.name} text="Select" outshow={changephoto}/>)
        })}

         {relievers.map((cvalue)=>{
        return( <Dstorymodalcard  img={cvalue.img} name={cvalue.name} text="Select" outshow={changephoto}/>)
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
    </div>
   
	</>)
}

export default Dstory;