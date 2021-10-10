import React from "react";
import {Route,Switch} from "react-router-dom";
import Sprofile from "./Sprofile";
import Ssetting from "./Ssetting";
import Schat from "./Schat";
import Shome from "./Shome";
const Swebsite=()=>{
	return(<>

		<Switch>
			<Route exact path="/" component={Shome}/>
			<Route exact path="/profile" component={Sprofile}/>
			<Route exact path="/chat" component={Schat}/>
			<Route exact path="/setting" component={Ssetting}/>

		</Switch>
		</>)
}

export default Swebsite;