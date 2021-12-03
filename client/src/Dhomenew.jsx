import React,{useState,useEffect} from "react";
import {useHistory} from "react-router-dom";
import star2 from "./images/star2.jpg"
import bird1 from "./images/bird1.png"
import bird2 from "./images/bird2.png"
import forest from "./images/forest.png"
import rocks from "./images/rocks.png"
import water from "./images/water.png"

import Dlive from "./Dlive";
import Dfooter from "./Dfooter";
import Dhomenewcomponent from "./Dhomenewcomponent";
const Dhomenew=()=>{
	
	
	
	const history=useHistory();
	
	
	let watera=document.getElementById('water');


	window.addEventListener('scroll',()=>{
		let value=window.scrollY;
		console.log(value)

	})
	const [offset, setOffset] = useState(0);
	useEffect(() => {
    window.onscroll = () => {
     let value=window.scrollY;
      let text=document.getElementById('textp');
      let birda1=document.getElementById('bird1');
      let birda2=document.getElementById('bird2');
      let btna=document.getElementById('btn');
      let rocksa=document.getElementById('rocks');
      let foresta=document.getElementById('forest');
      let headera=document.getElementById('header');
      text.style.top=50+value * -0.5+'%';
      birda1.style.top=value*-1.5+'px';
      birda1.style.left=value*2+'px';

      birda2.style.top=value*-1.5+'px';
      birda2.style.left=value*-5+'px';
      btna.style.marginTop=value*1.5+'px';
      rocksa.style.top=value*-0.12+'px';
      foresta.style.top=value*0.25+'px';
      headera.style.top=value*0.5+'px'
    }
  }, []);

  console.log(offset)

	return(<>
		<div style={{backgroundColor:'white',width:'100vw',overflow:'hidden'}}>
		<div class="header" id="header">
			<div style={{display:'flex'}}>
				<h3 id="text_poppins">Depressor</h3>

				
			</div>

			
			
					</div>
			<div class="section">
				<h2 id="textp"><span>It's time to Fight </span><br/>Live for Others</h2>
				<img src={bird1} id="bird1"/>
				<img src={bird2} id="bird2"/>
				<img src={forest} id="forest"/>
				<a href="/profile"id="btn" >Explore</a>
				<img src={rocks} id="rocks"/>
				<img src={water} id="water"/>

			</div>
			<div class="sec">
				<h2 style={{marginLeft:'30px'}} >What you will learn</h2>
				<div id='fish1' style={{marginTop:'50px'}}>
				<img src="https://i.pinimg.com/originals/60/27/f9/6027f9062950613ce3f1e99c05f39b98.gif"
				style={{width:'140px',height:'100px'}}/>
				</div>
				<br/>
 
					<div id='fish2' style={{marginTop:'30px'}}>
				<img src="http://www.netanimations.net/moving_animated_scuba_fish_swimming4.gif"
				style={{width:'140px',height:'100px'}}/>
				</div>
				<br/>
				<div id='fish2' style={{marginTop:'30px'}}>
				<img src="https://thumbs.gfycat.com/BrilliantDelectableAsiansmallclawedotter-max-1mb.gif"
				style={{width:'140px',height:'100px'}}/>
				</div>
				<br/>
				<div id='fish3' style={{marginTop:'30px'}}>
				<img src="https://i.pinimg.com/originals/11/a6/12/11a61264cdf5996be40aac3679ad2bc3.gif"
				style={{width:'140px',height:'100px'}}/>
				</div>
				<br/>
				<div id='fish4' style={{marginTop:'30px'}}>
				<img src="https://i.pinimg.com/originals/f3/df/30/f3df30eebed6bf16b6365eae64db3bc3.gif"
				style={{width:'140px',height:'100px'}}/>
				</div>
				<br/>

				<div id='fish5' style={{marginTop:'30px'}}>
				<img src="https://thumbs.gfycat.com/EnviousRealElver-max-1mb.gif"
				style={{width:'140px',height:'100px'}}/>
				</div>
				<br/>
				<Dlive/>
				<div id='fish6' style={{marginTop:'30px'}}>
				<img src="https://media0.giphy.com/media/h4NhtIH2IoxYFl8Cjz/giphy.gif?cid=6c09b9522u0kg2ep2byxgsahvyzqqd7j2yi48ltwo7n63qty&rid=giphy.gif&ct=s"
				style={{width:'140px',height:'100px'}}/>
				</div>
				<br/><br/>
				<br/><br/>
				<br/><br/>
		
				<Dhomenewcomponent/>
			
			
			
	</div>		</div>


	
	</>)
}

export default Dhomenew;