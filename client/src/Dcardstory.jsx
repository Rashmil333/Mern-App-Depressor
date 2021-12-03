import React from 'react';
import Dstoryphoto from "./Dstoryphoto";
import { Progress } from 'reactstrap';


const Dcardstory=(props)=>{
	return(<>
		
		<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" style={{marginTop:'60px'}}>
		
					<div className="card"  id="cardstory" >
					
						<div className="card-body">
						<div>
								<div style={{textAlign:'center',marginTop:'-40px'}}>
									<Dstoryphoto img={props.depressor_img} name={props.name}/>
									<p id="text_white3">Story {props.category}</p>
								</div>
								

							</div>
							
							{props.Image==''?
								null:
								<img src={props.Image} style={{width:'100%'}}/>
							}

							<p id="text_white2">{props.story}
							<hr style={{backgroundColor:'black'}}/>
							{props.email}~~<br/></p>
							<div style={{display:'flex'}}>
							<span style={{marginTop:'10px'}}>Thanks to </span>
							<div style={{marginLeft:'50px'}}>
										<Dstoryphoto img={props.imgr} />
								</div>
								
							</div>
							
							<br/>
							<button class="storybutton">Accept Family</button>
							




							
							
						
							
						</div>
					</div>
		
		</div>
							
				 
	

		</>)
}

export default Dcardstory;