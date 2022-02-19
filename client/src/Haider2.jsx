import React,{useState} from "react";
import Haider from "./Haider";
import Sentiment from 'sentiment'
const Haider2=()=>{
	const 	sentiment=new Sentiment();
	const [text,setText]=useState();
	const analyzing=(e)=>{
			const result=sentiment.analyze(e.target.value);
			console.log(result);
	}
	return(<>
		<Haider/>

		<input type="text" placeholder="type some text" onChange={(e)=>analyzing(e)}/>
		

		</>)



}
export default Haider2;