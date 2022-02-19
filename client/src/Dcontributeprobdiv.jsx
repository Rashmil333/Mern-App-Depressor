import React,{useState} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Button from '@material-ui/core/Button';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import CallIcon from '@material-ui/icons/Call';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Dcontributeprobdiv=(props)=>{

	const [modal1, setModal1] = useState(false);
	const toggle1 = () => setModal1(!modal1);
	const [modal2, setModal2] = useState(false);
	const toggle2 = () => setModal2(!modal2);
	const [modal3, setModal3] = useState(false);
	const toggle3 = () => setModal3(!modal3);
	const [modal4, setModal4] = useState(false);
	const toggle4 = () => setModal4(!modal4);


  	

	const [expand,setexpand]=useState(false);
	const call=()=>{
		
		setexpand(!expand);
	}
 

	 
	return(<>
				<div style={{backgroundColor:'#252837',padding:'13px',borderRadius:'30px',width:'100%'
				,marginTop:'20px'}}>
				<div className="container">
					<div className="row">
						<div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
						
								

						<div className="contributevideo">
							<span class="videodiv1">
								7 min
							</span>
							
					
							
						</div>
						
							{/*<img onClick={call} id={expand==true?"contributephotoexpand":"photo3"} src={props.img}/>*/}
						</div>
						<div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
								
			
				
				{props.text}<br/>
		
				<Button style={{color:'#626574',borderRadius:'20px'}}  onClick={toggle1}><MonetizationOnIcon/></Button>
				<Button style={{color:'#626574',borderRadius:'20px'}}><CardGiftcardIcon onClick={toggle2}/></Button>
				<Button style={{color:'#626574',borderRadius:'20px'}}><RestaurantIcon onClick={toggle3}/></Button>
				<Button style={{color:'#626574',borderRadius:'20px'}}><CallIcon onClick={toggle4}/></Button>
				<br/>
				<div style={{display:"flex",marginTop:'20px'}}>
					<RemoveRedEyeIcon style={{color:'#828493'}}/><span style={{marginLeft:'10px',color:'#828493'}}>1000 views	</span>
					<FavoriteIcon style={{color:'#828493',marginLeft:'30px'}}/><span style={{marginLeft:'10px',color:'#828493'}}> 3k people helped 	</span>
				</div>
				<div style={{display:'flex',marginTop:'20px'}}>
				<img src={props.img} id="contributephoto"/>
				<div style={{display:'block',marginLeft:'20px'}}>
					<b >{props.name}</b><br/>
					<b style={{color:'#626574'}}>2 days ago</b><br/>
				</div>
					
					
				</div>
				
						</div>
						
					</div>
					
				</div>
				
			


				</div>
				<hr style={{backgroundColor:'pink'}}/>

							
     				 <div>
      					<Modal isOpen={modal1} toggle={toggle1} className="modal-dialog-centered">
        					<ModalHeader toggle={toggle1}>Bank Account Number</ModalHeader>
        					<ModalBody>
        						<h1 id="text_pink">
          							You can send money to account no:<span style={{color:'blue'}}>{props.banko}</span></h1>
        					</ModalBody>
                        </Modal>
    				</div>

    				 <div>
      					<Modal isOpen={modal2} toggle={toggle2} className="modal-dialog-centered">
        					<ModalHeader toggle={toggle2}>Gift Card to email</ModalHeader>
        					<ModalBody>
        						<h1 id="text_pink">
          							You can send amazon or flipkart voucher no to this email:<p style={{color:'blue'}}>{props.emailo}</p></h1>
        					</ModalBody>
                        </Modal>
    				</div>

    				 <div>
      					<Modal isOpen={modal3} toggle={toggle3} className="modal-dialog-centered">
        					<ModalHeader toggle={toggle3}>Take a look</ModalHeader>
        					<ModalBody>
        						<h1 id="text_pink">
          							You can visit to nearest restaurent: <span style={{color:'blue'}}>{props.reso}</span></h1>
        					</ModalBody>
                        </Modal>
    				</div>

    				 <div>
      					<Modal isOpen={modal4} toggle={toggle4} className="modal-dialog-centered">
        					<ModalHeader toggle={toggle4}>Call</ModalHeader>
        					<ModalBody>
        						<h1 id="text_pink">
          							Phone no: <span style={{color:'blue'}}>{props.phono}</span></h1>
        					</ModalBody>
                        </Modal>
    				</div>


		</>)
}

export default Dcontributeprobdiv;