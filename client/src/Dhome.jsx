import React,{useState} from "react";
import Dnavbar from "./Dnavbar";
import Dcommon from "./Dcommon";
import Dlive from "./Dlive";
import Dfooter from "./Dfooter";
import {useSelector} from "react-redux";
import b3 from "./images/b3.jpg"

const Dhome=()=>{

	const state=useSelector((state)=>state.changebody);
	const [select,setselect]=useState(false);
	const [q,setq]=useState(1);

	const gamma=()=>{
		if(select==false){
			alert("Please select an option")
		}
		else{
			setq(q+1);
		}
	}
	return(<>
	<Dnavbar/>
	{state==true?
		<div class="spirituality_div">
		<div style={{display:'flex'}}>
			<div class="spirituality_test_cursor" onClick={gamma}>
				
				
			</div>
			<div  id="spiritual_question_div">	
			
			<p id="text_white">{select}</p>
			{q==1?<>
				<label id="text_white"> I am devotee of Lord krishna</label><br/>
			{select=='1'?
				<p id="text_white" class="option_select" onClick={()=>setselect(1)}> Since my childhood</p>
				:
				<p id="text_white" class="option_hover" onClick={()=>setselect(1)}> Since my childhood</p>}
			{select=='2'?
				<p id="text_white" class="option_select" onClick={()=>setselect(2)}> From few years Ago</p>
				:
				<p id="text_white" class="option_hover" onClick={()=>setselect(2)}> From few years Ago</p>}
			{select=='3'?
				<p id="text_white" class="option_select" onClick={()=>setselect(3)}> Recently i consider myself the devotee of krishna</p>
				:
				<p id="text_white" class="option_hover" onClick={()=>setselect(3)}> Recently i consider myself the devotee of krishna</p>}
			{select=='4'?
				<p id="text_white" class="option_select" onClick={()=>setselect(4)}>  I am interested and wants to explore</p>
				:
				<p id="text_white" class="option_hover" onClick={()=>setselect(4)}>  I am interested and wants to explore</p>}
			</>:
			q==2?
			<>
			<label id="text_white">Tell me about the spirituality</label><br/>
			{select=='1'?
				<p id="text_white" class="option_select" onClick={()=>setselect(1)}> I am extremely spiritual</p>
				:
				<p id="text_white" class="option_hover" onClick={()=>setselect(1)}> I am extremely spiritual</p>}
			{select=='2'?
				<p id="text_white" class="option_select" onClick={()=>setselect(2)}> I am trying to explore it</p>
				:
				<p id="text_white" class="option_hover" onClick={()=>setselect(2)}> I am trying to explore it</p>}
			{select=='3'?
				<p id="text_white" class="option_select" onClick={()=>setselect(3)}> I dont have a feel about spiritualityi</p>
				:
				<p id="text_white" class="option_hover" onClick={()=>setselect(3)}> I dont have a feel about spiritualityi</p>}
			{select=='4'?
				<p id="text_white" class="option_select" onClick={()=>setselect(4)}>  Recently dont know what it is but seeking it.</p>
				:
				<p id="text_white" class="option_hover" onClick={()=>setselect(4)}>  Recently dont know what it is but seeking it.</p>}
			</>:
			q==3?
			<>
			<label id="text_white">How much do you excited to learn spirituality</label><br/>
			{select=='1'?
				<p id="text_white" class="option_select" onClick={()=>setselect(1)}> Extremely</p>
				:
				<p id="text_white" class="option_hover" onClick={()=>setselect(1)}> Extremely</p>}
			{select=='2'?
				<p id="text_white" class="option_select" onClick={()=>setselect(2)}> Very Interested</p>
				:
				<p id="text_white" class="option_hover" onClick={()=>setselect(2)}> Very Interested</p>}
			{select=='3'?
				<p id="text_white" class="option_select" onClick={()=>setselect(3)}> Finding time to explore it</p>
				:
				<p id="text_white" class="option_hover" onClick={()=>setselect(3)}> Finding time to explore it</p>}
			{select=='4'?
				<p id="text_white" class="option_select" onClick={()=>setselect(4)}> Just trying to explore what it is.</p>
				:
				<p id="text_white" class="option_hover" onClick={()=>setselect(4)}> Just trying to explore what it is.</p>}
			</>:
			<>
			<p id="text_white">Thanks for your time!</p>
			<button onClick={()=>window.location.reload()}>Reload</button>
			</>}	

		
			</div>
		</div>

			

		</div>

		:
		<>
		<div class="homediv"  >
	<Dcommon class="dcommon" img="https://i.ibb.co/xHcKk79/output-onlinegiftools-1.gif" text="Depressor" description="It provides family to the alone"/>
	</div>
	<Dlive/>
	<Dfooter/>
		</>}
	
	


	</>);
}

export default Dhome;