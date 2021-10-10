import React from 'react';
import Dstoryphoto from "./Dstoryphoto";
import { Progress } from 'reactstrap';


const Dcardstory=(props)=>{
	return(<>
		
		<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" style={{marginTop:'10px'}}>
		
					<div className="card" id="card_feel" id="cardstory" >
					
						<div className="card-body">
							<p id="text_pink">Story {props.category}</p>
							<hr style={{color:'black'}}/>

							<p id="text_pink">{props.story}
							<br/>{props.email}~~<br/></p>
							<br/>
							<div>
								<div style={{float:'left'}}>
									<Dstoryphoto img={props.depressor_img} name={props.name}/>
								</div>
								<div style={{float:'right'}}>
										<Dstoryphoto img={props.imgr} />
								</div>
							</div>




							
							
						
							
						</div>
					</div>
		
		</div>
							
				 
	

		</>)
}

export default Dcardstory;