import React, { useState, useEffect } from 'react';
import Dnavbar from "../Components/Navbar/Dnavbar";
import Button from '@material-ui/core/Button';
import Dcartitem from "./CartItem/Dcartitem";
import Dfooter from "../Components/Footer/Dfooter";
import Dorderitem from "./Dorderitem";
import { get, getuserData } from '../constant';

const Dcart = () => {
	const [state, setstate] = useState("one");
	const [cart_item, setcart_item] = useState([]);
	const [orders, setorders] = useState([]);
	const changediv = (id) => {
		getdata();
		setstate(id);
		console.log(state);

	}

	const getdata = async () => {


		const res = await fetch(getuserData, get());
		const data = await res.json();
		console.log(data.cart);
		setcart_item(data.cart);
		setorders(data.orders)




	}

	useEffect(() => {
		getdata();
	}, [])

	const filter = (id) => {
		setcart_item((olddata) => {
			return (olddata.filter((arrelem, index) => {
				return (index != id)
			}))
		})

	}

	const filter_order = (id) => {
		alert("Your Order is Cancelled!!!")
		setorders((oldata) => {
			return (oldata.filter((arrelem, index) => {
				return (index != id)
			}))
		})
	}





	return (<>
		<Dnavbar />
		<div className="container" style={{ marginTop: "7%" }}>
			<div className="row">

				<h1 id="text_pink" style={{ fontSize: '60px' }}>Cart</h1><br />
				<div style={{ border: '1px solid white', backgroundColor: '#2b0014', marginLeft: '5px', marginRight: '5px' }} className="container">
					<div className="row">
						<div className="col-xl-3 col-lg-3 col-md-4 col-sm-3 col-3">
							<Button style={{ backgroundColor: '#570029', marginLeft: '8px', marginTop: '8px' }} id="text_white" onClick={e => changediv('one')}>Items</Button>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-4 col-sm-3 col-3">
							<Button style={{ backgroundColor: '#570029', marginLeft: '8px', marginTop: '8px' }} id="text_white" onClick={e => changediv('two')}>Balance</Button>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
							sdgsgsgsd
							<Button style={{ backgroundColor: '#570029', marginLeft: '8px', marginTop: '8px' }} id="text_white" onClick={e => changediv('three')}>Gift Cards</Button>

						</div>
						<div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">

							<Button style={{ backgroundColor: '#570029', marginLeft: '8px', marginTop: '8px' }} id="text_white" onClick={e => changediv('four')}>Orders</Button>

						</div>
					</div>
				</div><br />
				{state == "one" ? <div style={{ marginLeft: '5px', marginRight: '5px' }} >
					<Dcartitem img="https://cdn10.montecarlo.in/images/ProductImages/medium/2-kIf-113908-pA7.JPG" type="Monte carlo marron Tshirt" cost="1,270.00" />
					<Dcartitem img="https://cdn10.montecarlo.in/images/ProductImages/medium/2-sUT-061747-pW2.JPG" type="Monte carlo Blue Tshirt" cost="975.00" />
					{cart_item.map((cvalue, index) => {
						return (<Dcartitem img={cvalue.img} filto={filter} id={index} type={cvalue.product_name} cost={cvalue.cost} />)
					})}


				</div> : state == "two" ? <div style={{ border: '1px solid white', height: '150px', backgroundColor: '#2b0014', marginTop: '10px', textAlign: 'center', marginLeft: '5px', marginRight: '5px' }} className="container">
					<div className="row" >
						<h1 style={{ marginTop: '5%', marginLeft: '10%' }} id="text_pink">0 Rs</h1>
					</div>
				</div> :
					state == "three" ?
						<div style={{ border: '1px solid white', height: '150px', backgroundColor: '#2b0014', marginTop: '10px', textAlign: 'center', marginLeft: '5px', marginRight: '5px' }} className="container">
							<div className="row">
								<h1 style={{ marginTop: '5%' }} id="text_pink">No Gift Cards.</h1>
							</div>
						</div> :
						state == "four" ? <>
							<div style={{ border: '1px solid white', width: '100%', backgroundColor: '#2b0014', marginTop: '10px', textAlign: 'center', marginLeft: '5px', marginRight: '5px' }}>

								<img style={{ width: '150px', float: 'left' }} src="https://cdn10.montecarlo.in/images/ProductImages/large/1-oHk-121233-Dxc.JPG" />
								<div className="container">
									<span id="text_white" style={{ marginTop: '60px' }}>monte carlo shirt<br />
										67688</span>

								</div>

								<Button style={{ backgroundColor: '#16000a', marginLeft: '8px', marginTop: '8px' }} id="text_white">Cancel order</Button>

							</div>
							{orders.map((cvalue, index) => {
								return (<Dorderitem img={cvalue.img} id={index} filto={filter_order} type={cvalue.product_name} cost={cvalue.cost} phone={cvalue.Mobile_no} address={cvalue.delivery_add} />)
							})}
						</> :
							null}

			</div>
		</div><br />
		<Dfooter />

	</>)
}

export default Dcart;

