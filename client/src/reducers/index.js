import  changeTheNumber from "./updown";
import todoreducers from "./todoreducers";
import {combineReducers} from "redux";
import calculator from "./calculator";
import Addcart from "./Addcart";
import changebody from "./changebody";
const rootReducer=combineReducers({
	changeTheNumber:changeTheNumber,
	todoreducers:todoreducers,
	calculator:calculator,
	Addcart:Addcart,
	changebody:changebody
});

export default rootReducer;