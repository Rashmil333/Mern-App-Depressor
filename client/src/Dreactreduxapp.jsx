import React from "react";
import store from "./store";
import {useSelector,useDispatch} from "react-redux"
import {incNumber,decNumber} from "./actions/index";



const Dreactreduxapp=()=>{
const mystate=useSelector((state)=>state.changeTheNumber);
const dispatch=useDispatch();
	return(<>
		<div className="container" style={{textAlign:'center',marginTop:'15%'}}>
			<h1 style={{color:'grey'}}>Increment/Decrement counter</h1>
			<h3 style={{color:'grey'}}>using React and Redux</h3><br/><br/>
			<div style={{backgroundColor:'powderblue',width:'160px',height:'42px',marginLeft:'45%',borderRadius:'10px'}} >
				<button onClick={()=>dispatch(decNumber(5))} className="btn" style={{display:'inline',float:'left',marginTop:'2px'}} >-</button>
				<button className="btn" style={{display:'inline',marginTop:'2px',backgroundColor:'white',width:'60px'}} >{mystate}</button>
				<button onClick={()=>dispatch(incNumber(5))} className="btn" style={{display:'inline',float:'right',marginTop:'2px'}}>+</button>
			</div>

		</div>
	</>)
}

export default Dreactreduxapp;