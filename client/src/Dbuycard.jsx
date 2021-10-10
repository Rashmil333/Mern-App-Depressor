import React,{useState} from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import {useDispatch} from "react-redux";
import addtocart from "./actions/Addtocart";




const Dbuycard =(props)=>{

	const [statement,setstatement]=useState();
	const [show,setshow]=useState(true);
	const dispatch=useDispatch();
	const add_item=async(e)=>{
		setshow(false);
		dispatch(addtocart());
    e.preventDefault();
    setstatement("Added to cart.")
    const img=props.img;
    const product_name=props.type;
    const cost=props.cost;
    const res=await fetch("/addtocart",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
      	product_name,cost,img,
      })
    });

    const data=await res.json();


    
  }



	const call=()=>{
		props.callitem(props.img,props.type,props.cost);
	}
	


	return(<>
				<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
	  				<div className="card"  style={{border:'none',width:'300px',marginLeft:'18px',marginTop:'40px'}}  >
	  					<img style={{height:'400px',width:'300px'}} src={props.img} className="card-img"/>
						<div className="card-body">
							<b style={{color:'black'}}>{props.type}<br/>
							Rs {props.cost}</b><Button onClick={call}> Buy</Button>
							{show==true?<Button onClick={add_item}><AddIcon/>cart</Button>:<Button><AddIcon/>cart</Button>}<br/>
							{statement}
						

							
						</div>
					</div>
				</div>
		</>);
}

export default Dbuycard;