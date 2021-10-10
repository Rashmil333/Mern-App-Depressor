import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Dbuyitemopen from "./Dbuyitemopen";
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {useDispatch} from "react-redux";
import Removecart from "./actions/Removecart";

const Dcarditem=(props)=>{
	
	const [show_buy,setshow_buy]=useState(false);


	 const [modal, setModal] = useState(false);
  	 const toggle = () => setModal(!modal);

  	 const dispatch=useDispatch();


	const delete_item=async(e)=>{
		props.filto(props.id);
		dispatch(Removecart());
    e.preventDefault();
    toggle();
    const img=props.img;
    const product_name=props.type;
    const cost=props.cost;
    const res=await fetch("/deletetocart",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
      	product_name,cost,img
      })
    });

    console.log(res.status);
    if(res.status==200){
    	// window.location.reload();
    }


    
  }
  const buy_final=()=>{
  		setshow_buy(!show_buy);
  }



	
	return(<>
				{show_buy==true?<Dbuyitemopen img={props.img} cost={props.cost} type={props.type} backo={buy_final} img_size="small"/>:
				
									<div style={{border:'1px solid white',backgroundColor:'#2b0014',marginTop:'10px'}} className="container" >
					<div className="row">
						<div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4">
								<img style={{width:'100px'}} src={props.img}/>
						</div>
						<div className="col-xl-5 col-lg-5 col-md-5 col-sm-3 col-3">
								<b id="text_white">{props.type}<br/>Rs {props.cost}</b>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
								<Button style={{backgroundColor:'#16000a',marginLeft:'8px',marginTop:'8px'}} id="text_white" onClick={buy_final}>Buy</Button>
								<Button style={{backgroundColor:'#16000a',marginLeft:'8px',marginTop:'8px'}} id="text_white" onClick={delete_item}>Remove</Button>

						</div>
					</div>
				</div>



				}
			
				  <div>
     
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Remove Item</ModalHeader>
        <ModalBody>
         <h3>Your item is deleted.</h3>
        </ModalBody>
      </Modal>
    </div>

		</>);
}

export default Dcarditem;