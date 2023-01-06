import React, { useState } from 'react';
import Dstoryphoto from "./Dstoryphoto";
import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './storyCard.css'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Sentiment from 'sentiment';
import Heart from '../../Components/HeartComponent/Heart';
import { findstorygetdata, post, postCommentStory } from '../../constant';


const Dcardstory = (props) => {
	const [modal, setModal] = useState(false);
	const [inputVal, setInputVal] = useState('');
	const toggle = () => setModal(!modal);
	const [commentsData, setCommentsData] = useState([]);
	const [loveState, setLoveState] = useState(0);
	const MyData = useSelector((state) => state.MyInfoData);
	const sentiment = new Sentiment();
	// console.log('>>>>', MyData[0].name)
	const PostComment = async (e) => {
		e.preventDefault();
		if (inputVal === '') {
			alert('Blank Comment is not allowed')
		}
		else {
			const comment = inputVal;
			setInputVal('');
			const variables={ID: props.story_id, Comment: comment, Commentor: MyData[0].name, Commentor_img: MyData[0].profile_img};
			const res = await fetch(postCommentStory, post(variables));
			setInputVal('')
			console.log(res.status);
		}
	}

	const getAllComments = async () => {
		toggle();
		const variables={ID: props.story_id};
		const res = await fetch(findstorygetdata, post(variables));
		const data = await res.json();
		console.log('>>>>', data.Comments);
		setCommentsData(data.Comments);
		var COMMENTSCORE = 0;
		data.Comments.forEach((item) => {
			const result = sentiment.analyze(item.comment);
			COMMENTSCORE = COMMENTSCORE + result.positive.length - result.negative.length;
		});
		console.log('>>>>', COMMENTSCORE);
		setLoveState(COMMENTSCORE);
	}


	// const Senti = (e) => {
	// 	setInputVal(e.target.value);
	// 	const result = sentiment.analyze(e.target.value);
	// 	console.log('>>>>', result);

	// }

	// useEffect(() => {
	// 	getAllComments();
	// }, [])
	return (<>
		<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" style={{ marginTop: '60px' }}>
			<div className="card" id="cardstory" >

				<div className="card-body storyCard">
					<div>
						<div style={{ textAlign: 'center', marginTop: '-40px' }}>
							<Dstoryphoto img={props.depressor_img} name={props.name} />
							<p id="text_white3">Story {props.category}</p>
						</div>
					</div>
					<p id="text_white2">{props.story}
						<hr style={{ backgroundColor: 'black' }} />
						{props.email}~~<br /></p>
					<div style={{ display: 'flex' }}>
						<span style={{ marginTop: '10px' }}>Thanks to </span>
						<div style={{ marginLeft: '50px' }}>
							<Dstoryphoto img={props.imgr} />
						</div>
					</div>
					<br />
					<button class="storybutton" onClick={() => getAllComments()}>Details
						<ExpandMoreIcon />
					</button>
					<div>

					</div>
				</div>
			</div>
		</div>

		<Modal className="modal-dialog modal-dialog-centered" isOpen={modal} toggle={toggle} size="xl" >
			<ModalHeader className='modalBackgroundHeader' toggle={() => {
				toggle();
			}}>Details and Comment
				<span className='heartcomponent' ><Heart speed={loveState} /></span>
			</ModalHeader>
			<ModalBody className='modalBackground'>


				<div className='CommentInputDiv'>
					<input type='text' placeholder='Type Comment...' className='blackinput' style={{ width: '100%' }} value={inputVal}
						onChange={(e) => setInputVal(e.target.value)} />
					<button className='CommentButton' onClick={(e) => PostComment(e)}>Comment</button>
				</div>

				<div className='CommentSection'>
					{commentsData.map((cvalue, index) => {
						return (<>
							<div className='CommentDiv'>
								<img src={cvalue.commentor_img} className='CommentImg' alt='' />
								<p className='CommentAuthor'>{cvalue.commentor}</p>
								<p className='Comment'>{cvalue.comment}</p>
								<p className='Datetext'>{cvalue.Date}</p>
							</div>
						</>)

					})}

				</div>
			</ModalBody>
		</Modal>
	</>)
};
export default Dcardstory;