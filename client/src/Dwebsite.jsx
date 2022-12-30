import React from 'react';
import { Route, Switch } from "react-router-dom";
import Dprofile from "./Profile/Dprofile";
import Dchat from "./Chat/Dchat";
import Dreliever from "./Reliever/Dreliever";
import Drelieverchat from "./Reliever/Drelieverchat";
import Dselfhealing from "./SelfHeal/Dselfhealing";
import Dcontribution from "./Contribution/Dcontribution";
import Dstory from "./Story/Dstory";
import Dbuy from "./Buy/Dbuy";
import Dcart from "./Cart/Dcart";
import Dsignin from "./SignIn/Dsignin";
import Dlogin from "./Login/Dlogin";
import Dsetting from "./Settings/Dsetting";
import Dhomenew from "./HomeNew/Dhomenew";
import Dhealthstatus from './CheckStatus/Dhealthstatus';
import Notfound from "./NotFound/Notfound";

const Dwebsite = () => {
	return (<>
		<Switch>
			<Route exact path="/" component={Dhomenew} />
			<Route exact path="/profile" component={Dprofile} />
			<Route exact path="/chat" component={Dchat} />
			<Route exact path="/reliever" component={Dreliever} />
			<Route exact path="/relieverchat" component={Drelieverchat} />
			<Route exact path="/selfhealing" component={Dselfhealing} />
			<Route exact path="/contribution" component={Dcontribution} />
			<Route exact path="/story" component={Dstory} />
			<Route exact path="/buy" component={Dbuy} />
			<Route exact path="/cart" component={Dcart} />
			<Route exact path="/signup" component={Dsignin} />
			<Route exact path="/login" component={Dlogin} />
			<Route exact path="/setting" component={Dsetting} />
			<Route exact path="/healthstatus" component={Dhealthstatus} />
			<Route path="" component={Notfound} />
		</Switch>
	</>);
}

export default Dwebsite;
