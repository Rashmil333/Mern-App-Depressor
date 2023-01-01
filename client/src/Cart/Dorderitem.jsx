import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { deleteorder, post } from '../constant';


const Dorderitem=(props)=>{ 
		

	 const [modal, setModal] = useState(false);
  	 const toggle = () => setModal(!modal);

	
	
	const cancel_order=async()=>{
		props.filto(props.id);
  	toggle();
    const img=props.img;
    const product_name=props.type;
    const cost=props.cost;
    const phone=props.phone;
    const address=props.address;
    const variables={	product_name,cost,img,phone,address};
    const res=await fetch(deleteorder,post(variables));

    const data=await res.json();


    
  }




	
	return(<>


			<div style={{border:'1px solid white',width:'100%',backgroundColor:'#2b0014',marginTop:'10px',textAlign:'center'}}>
					
					<img style={{width:'150px',float:'left'}} src={props.img}/>
					<div className="container">
						<span id="text_white" style={{marginTop:'60px'}}>{props.type}<br/>
						{props.cost}</span>

					</div>
					
					<Button style={{backgroundColor:'#16000a',marginLeft:'8px',marginTop:'8px'}} id="text_white" onClick={cancel_order}>Cancel order</Button>
					
				</div>

				  <div>
     
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>We try to ensure the better product for you next time</ModalHeader>
        <ModalBody>
         <h3>Your order is Cancelled.</h3>
        </ModalBody>
      </Modal>
    </div>
			
				

		</>);
}

export default Dorderitem;