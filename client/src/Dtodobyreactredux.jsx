import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import {addTodo,deletetodo,removeTodo} from "./actions/index";
import {useDispatch,useSelector} from "react-redux";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const Dtodobyreactredux=()=>{

	const [text,settext]=useState('');
	const List=useSelector((state)=>state.todoreducers.list);

	const dispatch=useDispatch();
	const changetext=(e)=>{
	settext(e.target.value)
	}
	const styles={
		width:'50%'
	}
	return(<>
		<div className="container" >
			<div className="row" >
				<div className="col-xl-2">

				</div>
				<div className="col-xl-8">
					<h1>Add your List here</h1><br/>
					<div>
					<input onChange={changetext} value={text} style={{display:'inline'}} type="text" placeholder="Add your Item here" style={styles}/>
					<button onClick={()=>dispatch(addTodo(text),settext(''))}  className="btn" style={{display:'inline',marginLeft:'-50px'}}><AddIcon /></button>
					</div>
					<br/>
					{List.map((cvalue)=>{
					return(<>
						<div style={{backgroundColor:'dodgerblue',width:'360px',borderRadius:'10px',marginTop:'10px'}}>
						<h5 style={{textAlign:'left',paddingLeft:'10px',height:'29px',display:'inline'}}>{cvalue.data}</h5>	
						<button className="btn" onClick={()=>dispatch(deletetodo(cvalue.id))}style={{display:'inline',float:'right',color:'red',marginTop:'-8px'}}><DeleteOutlineIcon /></button> 

					</div>

					</>)
					})}

					<button onClick={()=>dispatch(removeTodo())} style={{marginLeft:'20%',backgroundColor:'pink',marginTop:'30px'}} className="btn" >Clear all</button>
					

				</div>
				<div className="col-xl-2">

				</div>
			</div>
		</div>
	</>)
}

export default Dtodobyreactredux;