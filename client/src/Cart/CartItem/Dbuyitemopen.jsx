import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { placeOrder, post } from '../../constant';


const Dbuyitemopen=(props)=>{

	 const [modal, setModal] = useState(false);
  	 const toggle = () => setModal(!modal);

  	const [q,setq]=useState(1);

	const callgoback=()=>{
		props.backo();
	}

	 const [state,setstate]=useState({
    name:"",phoneno:"",address:"",quantity:""
  });

  let name,value;
  const inputevent=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setstate({...state,[name]:value});
    console.log(state)
  }
  const place_order=async()=>{
  	validation();
  	toggle();

   
    const {name,phoneno,address,quantity}=state;
    const email="allusers@gmail.com";
    const product_name=props.type;
    const cost=props.cost;
    const img=props.img;
	const variables={ name,phoneno,address,email,cost,product_name,img,quantity};
    const res=await fetch(placeOrder,post(variables));
   

   
    console.log(res.status);
    if(res.status==200){
    setstate([]);
    }


    
  }

	const validation=()=>{
		var name=document.getElementById('name').value;
		var phoneno=document.getElementById('phoneno').value;
		var address=document.getElementById('Dcomment').value;
		if(name==""){
		alert("Please enter the name!!!");
		}
		else if(phoneno==""){
		alert("Please enter the phone no!!!");
		}

		else if(address==""){
		alert("Please enter the address!!!");
		}
		

	}
	return(<>
		<div className="container">
			<div className="row">
				
				<div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
					
					{props.img_size=="small"?<img id="cart_img_s"   src={props.img}/>:
					<img src={props.img}/>}
					
					

				</div>
				<div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12" id="text_white">
				  <form method="POST">
					<label>Customer Name</label><br/>
					<input id="name"  type="text" placeholder="Full name" name="name" value={state.name} onChange={inputevent}/><br/>
					<label>Mobile Number</label><br/>
					<input id="phoneno" type="number" placeholder="digit" name="phoneno" value={state.phoneno} onChange={inputevent}/><br/>
						<label>Quantity</label><br/>
					<input id="phoneno" type="number" placeholder="digit" name="quantity" value={state.Quantity} onChange={inputevent}/><br/>
					<label>Address</label><br/>

					<textArea type="text" placeholder="Colony,Pincode,City,State" id="Dcomment"
					name="address" value={state.address } onChange={inputevent}/><br/>
					<p id="text_white"><b>{props.type}<br/>Rs {props.cost}</b></p>
					<Button style={{backgroundColor:'pink'}} id="text_pink" onClick={place_order}>Buy</Button>
					<Button style={{backgroundColor:'pink',marginLeft:'20px'}} id="text_pink" onClick={callgoback}>Go Back</Button>
				 </form>

				</div>
			</div>
		</div>


		  <div>
     
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Thanks for buying item from our little shop.</ModalHeader>
        <ModalBody>
         <h3>Your order is placed.</h3>
        </ModalBody>
      </Modal>
    </div>
			
		</>)
}

export default Dbuyitemopen;