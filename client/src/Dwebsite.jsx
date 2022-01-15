import React from 'react';
import {Route,Switch} from "react-router-dom";
import Dhome from "./Dhome";
import Dprofile from "./Dprofile";
import Dchat from "./Dchat";
import Dreliever from "./Dreliever";
import Drelieverchat from "./Drelieverchat";
import Dselfhealing from "./Dselfhealing";
import Dcontribution from "./Dcontribution";
import Dstory from "./Dstory";
import Dbuy from "./Dbuy";
import Dcart from "./Dcart";
import Dsignin from "./Dsignin";
import Dlogin from "./Dlogin";
import Dsetting from "./Dsetting";
import Dhomenew from "./Dhomenew";
import Haider2 from "./Haider2";
import Dhealthstatus from './Dhealthstatus';
import Notfound from "./Notfound";
import Dtest from './Dtest';
const Dwebsite=()=>{
	return(<>
		<Switch>
			<Route exact path="/" component={Dhomenew}/>
			<Route exact path="/profile" component={Dprofile}/>
			<Route exact path="/chat" component={Dchat}/>
			<Route exact path="/reliever" component={Dreliever}/>
			<Route exact path="/relieverchat" component={Drelieverchat}/>
			<Route exact path="/selfhealing" component={Dselfhealing}/>
			<Route exact path="/contribution" component={Dcontribution}/>
			<Route exact path="/story" component={Dstory}/>
			<Route exact path="/buy" component={Dbuy}/>
			<Route exact path="/cart" component={Dcart}/>
			<Route exact path="/signup" component={Dsignin}/>
			<Route exact path="/login" component={Dlogin}/>
			<Route exact path="/setting" component={Dsetting}/>
			<Route exact path="/healthstatus" component={Dhealthstatus}/>
			<Route exact path="/test" component={Dtest}/>
			<Route path="" component={Notfound} />


		</Switch>
	</>);
}

export default Dwebsite;
