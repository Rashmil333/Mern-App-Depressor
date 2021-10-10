import React from "react";
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";
import {NavLink} from "reactstrap";


const Dcardinreliever=(props)=>{

	const call=()=>{
		props.outshow(props.id);
	}

	const history=useHistory();

	 const sltest=async(e)=>{
    const link=e.target.value;
    e.preventDefault();
    
    const res=await fetch("/sltest",{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
     
    });
    console.log(res.status);
    if(res.status==200){
  
    history.push(link);

    }
    else{
    history.push("/login");
    }


   }
	return(<>
		<div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
			<div className="card"  id="cardreliever">
				<img src={props.img} className="card-img"/>
				<div className="card-body">
					<h4>{props.heading}</h4>
					<h5>{props.descript}</h5><br/><br/>
					<div>
						<div style={{float:'left'}}>
							
							  <NavLink href="/relieverchat"><button className="btn btn-primary" value="/relieverchat" onClick={sltest}>Go</button></NavLink>

						</div>
						<div style={{float:'right'}}>
							<Button style={{backgroundColor:'skyblue',float:'right'}} onClick={call}>Learn</Button>
						</div>
					</div>
					
					

				</div>
			</div>
		</div>

		</>);
}

export default Dcardinreliever;