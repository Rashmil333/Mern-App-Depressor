import React,{useState} from "react";
import Dcard from "./Dcard";
import Dlivecarddata from "./Dlivecarddata";
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Dsahyog from "./Dsahyog";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {useDispatch} from "react-redux";
import bodychangeaction from "./actions/bodychangeaction";

const image="https://miro.medium.com/max/10708/0*VXd_38sPaQ2G7c6w";
 
const Dlive =()=>{ 
	const [gamma,setgamma]=useState(false);
	const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const dispatch=useDispatch();

	return(<>
		<div className="container" style={{marginTop:'10%'}}>
		 <div className="row">
		   <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
		    <div>
      <Modal isOpen={modal} toggle={toggle}  id="sahyog_modal">
        <ModalHeader toggle={toggle}>Sahyog</ModalHeader>
        <ModalBody>
         <Dsahyog/>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
    </div>
		   <div class="g_panda">
		   		<div class="g_panda_main" onClick={toggle}>
				<div class="g_eye">
					<div class="g_pupil">
					</div>
				</div>
				<div class="g_eyeright">
					<div class="g_pupil2">
					</div>
				</div>
				<div class="g_face">

				</div>
			
		
		</div>
		</div>
		        <h1 id="text_white">What we can Provide?</h1><br/>
		       <p style={{textAlign:'justify', width:'100%'}} id="text_white"><b>Hello guys!!!This is the website we have made for the people who are suffering from depression,anxiety,stress,tensions.We try our best approach to solve your problem. We have a large number of people who are relievers as well as your family.
					The people who joined us are of two types:Depressor and relievers.Depressors are the people who are suffering from these kind of depressions and sucidial thoughts.On the other hand Relievers are the people who cure your depression and suicidial thoughts.</b></p>

		   </div>
		       <Dcard img={image} heading="Don't Think" descript="Feel and create your family"/>
		 </div>
		</div><br/>
		<div className="container">
			<div className="row">
			  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
				<h1 id="text_white">How you can join us?</h1>
				<br/>
				<ul id="text_white">
					<li>Nope you dont have to do any hard work.</li>
					<li>Nope you dont have to think logically.</li>
					<li>Nope you dont have to invest money</li>
					<li>You dont have to think about your past.</li>
					<li>Nope you dont have to fear about your future.</li>
					<li>Simply Create your family.</li>
					<li>Sign in to create your family.</li>
					<li>You can join us as depressor or reliever or both.</li>
					<li>You can contribute Money to the people who need finanacial help.</li>
					<li>You can donate gifts to the depressors.</li>
					<li>You can chat with them to cure them.</li>
					<li>You can also write your story.</li>
				</ul>
				<br/>
				<h1 id="text_white">Check these out:</h1>
			  </div>
			   <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" style={{marginTop:'100px',textAlign:'center'}}>
				<textArea type="text" placeholder="Ask Us" id="Dcomment"/><br/><br/>
				<Button id="Dsendbut">Send</Button>
			  </div>
			</div>
		</div><br/>
		<div className="container" style={{marginTop:'10%'}}>
		 <div className="row">
		 	{Dlivecarddata.map((cvalue)=>{
		 	return( <Dcard img={cvalue.img} heading={cvalue.heading} descript={cvalue.descript}/>)
		 	})}
		 </div>

		</div><br/><br/><br/><br/><br/><br/>

		<div>
				<button id="spirituality_test" onClick={()=>dispatch(bodychangeaction())}>Take the spirituality test</button>
		</div>



	</>);
}

export default Dlive;