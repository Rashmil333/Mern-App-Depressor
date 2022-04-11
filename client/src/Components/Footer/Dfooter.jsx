import React from "react";
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';

const Dfooter =()=>{
	return(<>
		<div className="contaier" style={{marginLeft:'0px',marginTop:'20%',backgroundColor:'#2e3233',paddingLeft:'10px',paddingTop:'10%'}}>
			<div className="row">
				<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" id="text_white">

					<p>Terms and conditions</p><br/>
					<ul>
						<li>Deletion of account in case of abusing behaviour.</li>
						<li>After contributing gifts,money.Forcing the depressor to return back is not allowed.</li>
						<li>Deletion of account in case of Sexual comments.</li>
						<li>Any disrespectfull comment is not allowed.Especially for females.</li>
						<li>Your identity is kept secret to the other people unless you allow us.</li>
						<li>Demotivating the depressor is not allowed.</li>
						<li>You cannot see others identity unless they are your family members.</li>
						
					</ul>

				</div><br/>
				<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" id="text_white">
					<p>Explore </p>
					<br/>
					<Button><FacebookIcon/></Button>
					<Button><TwitterIcon/></Button>
					<Button><WhatsAppIcon/></Button>
					<Button><YouTubeIcon/></Button>
					<Button><PinterestIcon/></Button>



				</div><br/>
				<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" id="text_white">
					<p>Address</p><br/>
					<p>Madhav Eye Hospital, Awadhpuri,208024,Kanpur,<br/>UttarPradesh,India</p>
					
					<p>Contact No:8601279470</p>
				</div>
			</div>


		</div>
	</>)
}

export default Dfooter;