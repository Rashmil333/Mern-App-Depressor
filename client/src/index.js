import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Dwebsite from "./Dwebsite";

import store from "./store";
import { Provider } from "react-redux";

import './fonts/Orbitronio.ttf';
import './fonts/Eurostile/EuroStyle Normal.ttf';
import './fonts/Spaceman/Spaceman.TTF';

store.subscribe(() => console.log(store.getState()));
// <BrowserRouter>
// 	<Dwebsite/>
// </BrowserRouter>

// <Dtest/>

// <Provider store={store}>
// 	<Dreduxcalculator/>
// </Provider>
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
