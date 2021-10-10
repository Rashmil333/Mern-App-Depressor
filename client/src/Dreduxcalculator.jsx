import React,{useState} from "react";
import {calculator} from "./actions/index";
import {useDispatch,useSelector} from "react-redux";

const butto=[{id:'1'},{id:'2'},{id:'3'},{id:'4'},{id:'5'},{id:'6'},{id:'7'},{id:'8'},{id:'9'}

]
const Dreduxcalculator=()=>{

const dispatch=useDispatch();
const evaluated=useSelector((state)=>state.calculator);

const [text,settext]=useState('');

const test=()=>{
	var x=3
	var y="3"
	alert(x+y)
}

	return(<>
		<div className="container">
			<div className="row">
				<div className="col-xl-2">

				</div>
				<div className="col-xl-8" style={{marginTop:'10%'}}>
					<h3 style={{marginLeft:'30px',color:'grey'}} >Simple calculator by Redux</h3><br/>

					<div style={{width:'400px',height:'600px',backgroundColor:'pink',borderRadius:'20px'}}>
					<div >

					<input type="text" onChange={(e)=>settext(e.target.value)} value={text} style={{marginTop:'60px',width:'55%',marginLeft:'9px',height:'45px',fontSize:'30px' ,display:'inline'}}/>
					<p style={{display:'inline'}}>=</p>
					<input type="text"  value={evaluated} style={{marginTop:'60px',width:'30%',marginLeft:'9px',height:'45px',fontSize:'30px', display:'inline'}}/>

					</div>
				
					<br/>
					{butto.map((cvalue,index)=>{
					return(<button onClick={()=>settext(text+cvalue.id)} className="btn btn-danger" style={{marginLeft:'15px',width:'80px',height:'80px',marginTop:'20px'}}>{cvalue.id}</button>)
					})}
					<button  onClick={()=>settext(text+'+')}className="btn btn-primary" style={{marginLeft:'15px',width:'80px',height:'80px',marginTop:'20px'}}>+</button>
					<button onClick={()=>settext(text+'-')} className="btn btn-primary" style={{marginLeft:'15px',width:'80px',height:'80px',marginTop:'20px'}}>-</button>
					<button onClick={()=>settext(text+'*')} className="btn btn-primary" style={{marginLeft:'15px',width:'80px',height:'80px',marginTop:'20px'}}>*</button>
					<button onClick={()=>settext(text+'/')} className="btn btn-primary" style={{marginLeft:'15px',width:'80px',height:'80px',marginTop:'20px'}}>/</button>
					<button onClick={()=>settext('')} className="btn btn-primary" style={{marginLeft:'15px',width:'80px',height:'80px',marginTop:'20px'}}>C</button>
					<button onClick={()=>dispatch(calculator(text))} className="btn btn-primary" style={{marginLeft:'15px',width:'80px',height:'80px',marginTop:'20px'}}>=</button>
					<button className="btn btn-info" onClick={test}>javascript</button>

					</div>

				</div>
				<div className="col-xl-2">

				</div>
			</div>
		</div>
	</>)
}

export default Dreduxcalculator;