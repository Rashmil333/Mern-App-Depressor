import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from "react-redux";
import addtocart from "../../actions/Addtocart";
import { addtoCart, post } from "../../constant";




const Dbuycard = (props) => {

	const [statement, setstatement] = useState();
	const [show, setshow] = useState(true);
	const dispatch = useDispatch();
	const add_item = async (e) => {
		setshow(false);
		dispatch(addtocart());
		e.preventDefault();
		setstatement("Added to cart.")
		const img = props.img;
		const product_name = props.type;
		const cost = props.cost;
		const variables={product_name, cost, img};
		const res = await fetch(addtoCart, post(variables));

		const data = await res.json();



	}



	const call = () => {
		props.callitem(props.img, props.type, props.cost);
	}



	return (<>
		<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
			<div className="card" id="buycard" style={{ border: 'none', width: '300px', marginLeft: '9%', borderRadius: '30px', marginTop: '40px', height: '550px', overflow: 'hidden' }}  >
				<img style={{ height: '257px', width: '300px' }} src={props.img} className="card-img" />
				<div className="card-body" id="buycard" style={{ backgroundColor: '#2a292e', borderRadius: '20px' }}>
					<b style={{ color: 'white' }}>{props.type}<br />
						Rs {props.cost}</b><br />
					<Button onClick={call} class="button7"> Buy</Button>
					{show == true ? <Button class="button7" onClick={add_item}><AddIcon />cart</Button> : <Button class="button7"><AddIcon />cart</Button>}<br />
					{statement}
					<br /><br />
					<div style={{ display: 'flex' }}>
						<div>
							<p id="text_white" style={{ fontSize: '14px' }}>DETAIL</p>
							<p id="text_white" style={{ fontSize: '14px' }}>Style-2210100819-2</p>
							<p id="text_white" style={{ fontSize: '14px' }}>Colour - Grey</p>
							<p id="text_white" style={{ fontSize: '14px' }}>Brand - Rock.it</p>
							<p id="text_white" style={{ fontSize: '14px' }}>Fabric - Polyester</p>
							<p id="text_white" style={{ fontSize: '14px' }}>Fit - Smart</p>
							<p id="text_white" style={{ fontSize: '14px' }}>Pattern - Printed</p>
							<p id="text_white" style={{ fontSize: '14px' }}>Trend - Fashion</p>
							<p id="text_white" style={{ fontSize: '14px' }}>Sleeve - Half Sleeve</p>
							<p id="text_white" style={{ fontSize: '14px' }}>Occassion - Casual</p>
						</div>
						<div style={{ marginLeft: '10px', borderLeft: '2px solid #17d09f' }}>

						</div>
						<div style={{ marginLeft: '10px' }}>

							<p id="text_white" style={{ fontSize: '14px' }}>Neck - Round Neck</p>
							<p id="text_white" style={{ fontSize: '14px' }}>Unit - 1</p>
							<p id="text_white" style={{ fontSize: '14px' }}>Commodity - T-Shirt</p>
							<p id="text_white" style={{ fontSize: '14px' }}>Net Quantity   1 N</p>
							<p id="text_white" style={{ fontSize: '14px' }}>MRP -  {props.cost}</p>
							<p id="text_white" style={{ fontSize: '14px' }}>Material - Polyester</p>

						</div>

					</div>


				</div>
			</div>
		</div>
	</>);
}

export default Dbuycard;