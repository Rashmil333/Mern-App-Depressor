import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Dwebsite from "./Dwebsite";

import store from "./store";
<<<<<<< HEAD
import { Provider } from "react-redux";

=======
import {Provider} from "react-redux";
import Dtodobyreactredux from "./Dtodobyreactredux";
import Dreduxcalculator from "./Dreduxcalculator";
import Dtest from "./Dtest";
import Dnavbartest from "./Dnavbartest";
import Shome from "./Shome";
import Swebsite from "./Swebsite";
>>>>>>> ca0a22cab1be5d7ee1a9003121732729ce2d3489
import './fonts/Orbitronio.ttf';
import './fonts/Eurostile/EuroStyle Normal.ttf';
import './fonts/Spaceman/Spaceman.TTF';

<<<<<<< HEAD
store.subscribe(() => console.log(store.getState()));
// <BrowserRouter>
// 	<Dwebsite/>
// </BrowserRouter>

// <Dtest/>

// <Provider store={store}>
// 	<Dreduxcalculator/>
// </Provider>
=======
store.subscribe(()=>console.log(store.getState()));
	// <BrowserRouter>
	// 	<Dwebsite/>
	// </BrowserRouter>

	// <Dtest/>

	// <Provider store={store}>
	// 	<Dreduxcalculator/>
	// </Provider>
>>>>>>> ca0a22cab1be5d7ee1a9003121732729ce2d3489
ReactDOM.render(<>

	<Provider store={store}>
		<BrowserRouter>
			<Dwebsite />
		</BrowserRouter>
	</Provider>

</>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
