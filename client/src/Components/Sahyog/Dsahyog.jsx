import React, { useState, useEffect, useRef } from "react";
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { useHistory } from "react-router-dom";
import { getAllData, post, sahyog_memory } from "../../constant";
const Dsahyog = (props) => {


	const history = useHistory();
	const [micstate, setmicstate] = useState(false);
	var memory_get = false;
	const [chat, setchat] = useState([
		{
			mess: 'Namaste!',
			pos: 'left'
		},


	]);
	const exclamatory = { 'amazing': 1, 'wow': 1, 'hurrah': 1, 'shit': -1, 'oops': -1, 'amazing': 1, 'brilliant': 1, 'jesus': 1, 'fantastic': 1, 'awesome': 1, 'genius': 1, 'smart': 1, 'smarty': 1 }
	const intero = ['has', 'have', 'had', 'was', 'did', 'does', 'do', 'who', 'can', 'how', 'what', 'when', 'where', 'whose', 'what', 'why', 'is', 'had', 'was', 'if', 'have', 'has', 'are', 'am']
	const user_itself = ['i ', 'me', 'we', 'us', 'I']
	const to_sahyog = ['you', 'they', 'there', 'sir']
	const preposition = [
		'about', 'with', 'during', 'instead', 'while', 'without', 'an', 'and', 'it', 'they', 'in', 'a', 'onto', 'into', 'my', 'me'
	]
	const pos_words = [
		'Adaptable',
		'Adventurous',
		'Amazing',
		'Amiable',
		'Beautiful',
		'Becoming',
		'Beloved',
		'Blessed',
		'Blissful',
		'Brotherly',
		'Calming',
		'Captivating',
		'Charming',
		'Cherished',
		'Comforting',
		'Compelling',
		'Considerable',
		'Credible',
		'Dapper',
		'Darling',
		'Delicious',
		'Delightful',
		'Dependable',
		'Desirable',
		'Dreamy',
		'Durable',
		'Elegant',
		'Empowering',
		'Enchanting',
		'Endearing',
		'Energising',
		'Enjoyable',
		'Enlightening',
		'Exceptional',
		'Fabulous',
		'Fancy',
		'Fantastic',
		'Fashionable',
		'Faultless',
		'Fetching',
		'Flourishing',
		'Formidable',
		'Fulfilling',
		'Funny',
		'Generous',
		'Gifted',
		'Glamorous',
		'Gleaming',
		'Glowing',
		'Godly',
		'Gracious',
		'Gratifying',
		'Happening',
		'Harmonious',
		'Heavenly',
		'Honourable',
		'Ideal',
		'Important',
		'Incredible',
		'Indispensable',
		'Indisputable',
		'Influential',
		'Inspiring',
		'Interesting',
		'Irresistible',
		'Joyful',
		'Jolly',
		'Jovial',
		'Kindly',
		'Kingly',
		'Leading',
		'Legendary',
		'Liberating',
		'Likeable',
		'Lordly',
		'Lovable',
		'Luscious',
		'Luxurious',
		'Magical',
		'Majestic',
		'Memorable',
		'Mesmerizing',
		'Mighty',
		'Miraculous',
		'Motivational',
		'Nifty',
		'Obliging',
		'Optimal',
		'Original',
		'Out of this world',
		'Outgoing',
		'Palatable',
		'Paramount',
		'Peaceful',
		'Peachy',
		'Perfect',
		'Phenomenal',
		'Picturesque',
		'Pleasant',
		'Pleasing',
		'Pleasurable',
		'Positive',
		'Powerful',
		'Praiseworthy',
		'Precious',
		'Prestigious',
		'Prizewinning',
		'Promising',
		'Quality',
		'Radiant',
		'Reasonable',
		'Refreshing',
		'Reliable',
		'Respectable',
		'Revolutionary',
		'Rewarding',
		'Rousing',
		'Saintly',
		'Salubrious',
		'Satisfying',
		'Scrumptious',
		'Sensational',
		'Shiny',
		'Showy',
		'Smashing',
		'Soothing',
		'Sought-after',
		'Spectacular',
		'Spiffy',
		'Stimulating',
		'Striking',
		'Stunning',
		'Stupendous',
		'Superb',
		'Supreme',
		'Swanky',
		'Tasteful',
		'Tasty',
		'Terrific',
		'Thrilling',
		'Titillating',
		'Tremendous',
		'Trusty',
		'Ultimate',
		'Unbelievable',
		'Uplifting',
		'Useful',
		'Valuable',
		'Vibrant',
		'yes',
		'ok',
		'amazing',
		'teekh hai',
		'good',
		'fine',
		'amazing', 'cool', 'wow', 'hurrah', 'shit', 'oops', 'amazing', 'brilliant', 'jesus', 'fantastic', 'awesome', 'genius', 'smart', 'smarty']

	const neg_words = [
		'not',
		'depression', 'depressed', 'selfish', 'sad', 'fail', 'failed', 'tired', 'sick', 'sad', 'stress', 'anxiety', 'tension', 'lose', 'fool', 'ugly', 'dirty', 'slow', 'idiot', 'duffer', 'foolish', 'aggresion', 'aggresive', 'anger'
	]
	const possible_action = ['know', 'do', 'create', 'add', 'find', 'place', 'read', 'write']
	const impossible_action = ['buy', 'dance', 'fly', 'drink', 'cry', 'play', 'eat', 'sleep', 'walk', 'jump', 'run', 'bath', 'meet', 'wear']
	const greeting_words = ['ok', 'fine', 'good', 'alright', 'well', 'working', 'hi', 'hii', 'hiii', 'hiiii', 'hello', 'hiiiiiii',
		'hiiiiiiiiiiiii', 'hey', 'bye']
	const related_info = ['depressor', 'reliever', 'depressors', 'relievers']
	const objects = ['pen', 'tablet', 'phone', 'camera', 'tree', 'keyboard', 'mouse', 'paper', 'milk', 'drink', 'book', 'train',
		'board', 'cooler', 'ac', 'shop', 'restaurent', 'bed', 'chocolate']

	const [memory, setmemory] = useState([
		{
			key: '',
			value: ''
		}
	]);
	const reply_ability = [
		'i think you can do',
		'Just try',
		'It is depend on your ability',
		'i suppose you can if you try',
		'You should try',
		'Dont think just do if there is no harm in doing that',
		'You know better than me',
		'You can do everything just try and learn and practice',
		'I think you should ask for your friends to join you. Team work is great',
		'Check for precautions before doing that'
	]


	const positive_vibe = [
		'I think you should believe yourself.',
		'Dont be sad everything will be fine',
		'Everything is gonna ok',
		'Believe in god',
		'Dont worry.Just do what you can',
		'Just Relax if possible',
		'I think you should take break for sometime',
		'Well it happens sometimes',
		'Forget it.And be positive', ,
		'Opening You tube for you....Just Relax..'


	]

	const reply_yes_action = [
		'Yes sir i can do',
		'I think i can',
		'Absolutely',
		'Dont worry i can',
		'its my pleasure',
		'ofcourse',
		'sure sir',
		'hmmm',
		'i can try',
		'i can do that for you',
		'yes i can do that without any problem'
	]
	const reply_no_action = [
		'Sorry sir but i cannot',
		'i think i cannot do that',
		'i am not designed for that',
		'i dont have physical body to do that',
		'at present i cannot but in future i can',
		'unable to do that',
		'no',
		'I cannot but i hope you like to do that',
		'no but one day it may be possible',
		'never ever'
	]

	const glad_greeting = [
		'okay sir!',
		'I am glad about that sir.',
		'I got it',
		'I understand',
		'ok!!!',
		'Hmmm',
		'Thanks for telling me.',
		'I wish you best of luck!',
		'Alright sir!!!',
		'Hi Sir what can i do for you.',
		'Hiii I got it.',
		'Welcome sir.'
	]

	const reply_greeting = [
		'Doing well',
		'Yes  sir i am working fine',
		'i am doing great',
		'perfect sir',
		'Untill electricity is not gone. # i am fine.',
		'Still working fine sir',
		'yup!',
		'yes  sir',
		'i am fine',
		'yes i am fine  i hope you too!'
	]

	const [modal, setModal] = useState(false);

	const getalldata = async (e) => {

		const email = "allusers@gmail.com";
		const variables={email};
		const res = await fetch(getAllData, post(variables));


		const data = await res.json();
		setmemory(data.memory);

	}

	const toggle = () => setModal(!modal);
	const [text, settext] = useState();
	const myRef = useRef(null);
	const addchat = (message, position) => {
		setchat((olddata) => {
			return ([...olddata, {
				mess: message,
				pos: position
			}])
		})


	}

	useEffect(() => {
		if (listening) {
			settext(transcript)
		}
	})

	const scrollToBottom = () => {
		myRef.current.scrollIntoView({ behavior: "smooth" });
	};
	useEffect(scrollToBottom);
	useEffect(() => {

		getalldata();

	}, [])

	const sendchat = async () => {
		if (text ===undefined || text ==='') {
			return
		}

		// alert(text);
		addchat(text, 'right');
		// myRef.current.scrollIntoView();
		scrollToBottom();

		var text_ = text.toLowerCase();
		text_ = text_.replace(/[^a-zA-Z ]/g, "")
		settext('');
		// alert(text_)
		var info = false;
		for (let i = 0; i < related_info.length; i++) {
			if (text_.includes(related_info[i])) {
				info = related_info[i]
			}
		}
		const first_word = text_.split(' ')[0];
		const texta = text_.split(" ");
		var negation = text_.includes('not');
		var subject = false
		for (let i = 0; i < to_sahyog.length; i++) {
			if (text_.includes(to_sahyog[i])) {
				subject = true
				break;
			}

		}
		for (let i = 0; i < user_itself.length; i++) {
			if (text_.includes(user_itself[i])) {
				subject = 'user_itself'
				console.log(user_itself[i] + "--------------------->")
				break;
			}

		}


		var pos_act = false
		var impos_act = false
		for (let i = 0; i < possible_action.length; i++) {
			if (text_.includes(possible_action[i])) {
				pos_act = possible_action[i];
				pos_act = possible_action[i];
				break;
			}
		}

		for (let i = 0; i < impossible_action.length; i++) {
			if (text_.includes(impossible_action[i])) {
				impos_act = impossible_action[i];
				break;
			}
		}

		var pos_weight = 0
		var neg_weight = 0
		for (let i = 0; i < pos_words.length; i++) {
			if (texta.includes(pos_words[i])) {
				pos_weight += 1
			}
		}

		for (let i = 0; i < neg_words.length; i++) {
			if (texta.includes(neg_words[i])) {
				neg_weight -= 1
			}
		}

		var greeting = false
		for (let i = 0; i < greeting_words.length; i++) {
			if (text_.includes(greeting_words[i])) {
				greeting = greeting_words[i];
				break;
			}
		}





		var obj = 'ok';
		var unidentified_word = false;
		for (let i = 0; i < texta.length; i++) {
			if (intero.includes(texta[i])) {

			}
			else if (to_sahyog.includes(texta[i])) {

			}

			else if (user_itself.includes(texta[i])) {

			}

			else if (possible_action.includes(texta[i])) {

			}

			else if (impossible_action.includes(texta[i])) {

			}
			else if (pos_words.includes(texta[i])) {

			}

			else if (neg_words.includes(texta[i])) {

			}
			else if (greeting_words.includes(texta[i])) {

			}
			else if (preposition.includes(texta[i])) {

			}
			else if (objects.includes(texta[i])) {
				obj = texta[i];
				break;

			}

			else {
				var state = false;
				memory.map((cvalue) => {
					console.log(cvalue.key + "--->" + texta[i].slice(0))
					if (cvalue.key ===texta[i].slice(0)) {
						obj = texta[i].slice(0)
						state = true
						memory_get = true

					}
				})
				if (state ===false) {
					unidentified_word = texta[i]
					break

				}



			}
		}

		var excl = false
		console.log(subject)
		for (var key in exclamatory) {
			if (first_word ===key) {
				console.log(key)
				excl = key;
				break;
			}
			else {
				console.log(key)
			}
		}
		// alert(exclamatory.length)
		var first_letter = text_[0];
		// alert(first_word)
		if (first_letter ==='#' || first_word ==='learn') {

			var stringa = texta[0].slice(1);
			var splita = text_.split(" ");
			var key;
			splita.shift();
			console.log(stringa)
			console.log(splita);
			if (first_word ==='learn') {
				key = texta[1]
			}
			else {
				key = stringa
				splita.shift();
			}

			var valua = texta.slice(2, texta.length)
			alert(valua + "....");
			var value = valua.join(" ")
			alert(key + value)
			setmemory((oldata) => {
				return ([...oldata, {
					key: key,
					value: value
				}])
			});


			setTimeout(() => {
				addchat('I will keep that in mind.', 'left')
			}, 1000)





			const variables={key, value};
			const res = await fetch(sahyog_memory,post(variables));





			unidentified_word = false
			console.log(memory)


		}
		else if (intero.includes(first_word)) {
			if (subject ===true) {
				if (pos_act != false) {
					// alert(`yes sir i can do ${pos_act}`)
					// alert(reply_yes_action[Math.floor(Math.random()*10)])
					setTimeout(() => {
						addchat(reply_yes_action[Math.floor(Math.random() * 10)], 'left')
					}, 1000);
					if (memory_get ===true) {
						setTimeout(() => {
							var answer = '';
							memory.map((cvalue) => {
								if (cvalue.key ===obj) {
									answer = cvalue.value

								}
							})
							console.log(obj)
							addchat(`${obj} ${answer}`, 'left')
						}, 2000)
					}

				}
				else {
					if (text_ ==='how are you' || text_.includes('how are you')) {
						// alert('i am fine sir.')
						setTimeout(() => {
							addchat(reply_greeting[Math.floor(Math.random() * 10)], 'left')
						}, 1000)
					}
					else if (obj ==='ok' && pos_act ===false && impos_act ===false && greeting ===false) {
						// alert('I am Sahyog. assistant of depressor.')
						setTimeout(() => {
							addchat('I am Sahyog. assistant of depressor.', 'left');
						}, 1000)
					}

					else if (greeting ===false) {
						// alert(`Sorry sir but i am not designed for ${impos_act}--->${obj} ${impos_act} ${subject} ${first_word}`)

						// alert(reply_no_action[Math.floor(Math.random()*10)]+`  #${impos_act}`)
						setTimeout(() => {
							addchat(reply_no_action[Math.floor(Math.random() * 10)] + `  #${impos_act}`, 'left')
						}, 1000)
					}
					else {
						// alert('Doing Well! sir.')
						// alert(reply_greeting[Math.floor(Math.random()*10)])
						setTimeout(() => {
							addchat(reply_greeting[Math.floor(Math.random() * 10)], 'left')

						}, 1000)
					}

				}
			}
			else if (subject ==='user_itself') {
				// alert(reply_ability[Math.floor(Math.random()*10)])
				setTimeout(() => {
					addchat(reply_ability[Math.floor(Math.random() * 10)], 'left')
					alert(subject)
				}, 1000)
			}

			else {
				if (info ==='depressor' || info ==='depressors') {
					// alert("Depressor is a social platform which connects people who are suffering from depression,stress,anxiety,tension,sucidial.We help people to comeback on the right track of life.")
					setTimeout(() => {
						addchat("Depressor is a social platform which connects people who are suffering from depression,stress,anxiety,tension,sucidial.We help people to comeback on the right track of life.", 'left')
					}, 1000)
				}
				else if (info ==='relievers' || info ==='relievers') {
					// alert('Relievers are the family memebers who will care you and act as a doctor to cure you mental health by giving love,happiness,hope,help')
					setTimeout(() => {
						addchat('Relievers are the family memebers who will care you and act as a doctor to cure you mental health by giving love,happiness,hope,help', 'left')
					}, 1000)
				}
				else if (obj != 'ok' && unidentified_word ===false) {
					setTimeout(() => {
						var answer = '';
						memory.map((cvalue) => {
							if (cvalue.key ===obj) {
								answer = cvalue.value

							}
						})
						console.log(obj)
						addchat(`${obj} ${answer}`, 'left')
					}, 1000)
				}
				else if (info ===false) {
					// alert('I yhink you should viit the depressor or you can do google search!')
					setTimeout(() => {
						console.log(obj + "--------->" + unidentified_word + memory)
						addchat('I think you should visit the depressor or you can do google search!', 'left')
					}, 1000)

				}

			}
		}

		else if (excl != false) {
			if (exclamatory[excl] ===1) {
				// alert("congratulations sir!!!");
				setTimeout(() => {
					addchat("congratulations sir!!!", 'left')
				}, 1000)
			}
			else {
				// alert("sorry i hope you are ok!!");
				setTimeout(() => {
					addchat("sorry i hope you are ok!!", 'left')
				}, 1000)
			}

		}
		else {
			if (subject ===true) {
				if (pos_weight + neg_weight >= 0) {
					// alert("Thanks sir!!!")
					setTimeout(() => {
						addchat("Thanks sir!!!", 'left')
					}, 1000)
				}
				else {
					// alert("I will try to improve sir!!! ")
					setTimeout(() => {
						addchat("I will try to improve sir!!! ", 'left')
					}, 1000)
				}
			}

			else {
				if (neg_weight < 0) {
					// alert("Sir everything will be fine....")
					setTimeout(() => {
						addchat("Sir everything will be fine....", 'left')
					}, 1000)
					setTimeout(() => {
						var index = Math.floor(Math.random() * 10)
						// alert(index)
						if (index ===9) {
							addchat(positive_vibe[index], 'left')
							setTimeout(() => {
								window.location.href = 'https://www.youtube.com/watch?v=j2QX6Vyj1jI'
							}, 3000);

						}
						else {
							addchat(positive_vibe[index], 'left')

						}

					}, 2000)

				}
				else {
					// alert("I am glad about that is sir.")
					setTimeout(() => {
						addchat(glad_greeting[Math.floor(Math.random() * 10)], 'left')
					}, 1000);

					// alert(memory_get)
					if (memory_get ===true) {
						setTimeout(() => {
							var answer = '';
							memory.map((cvalue) => {
								if (cvalue.key ===obj) {
									answer = cvalue.value

								}
							})
							console.log(obj)
							addchat(`${obj} ${answer}`, 'left')
						}, 2000)
					}

				}
			}
		}


		if (unidentified_word != false && info ===false && unidentified_word != 'i') {
			setTimeout(() => {
				addchat(`What is ${unidentified_word} sir?`, 'left');
				addchat(`Please write #/learn ${unidentified_word} is a...... or you can ignore it..`, 'left')

			}, 2000)

		}
	}


	const {
		transcript,
		listening,
		resetTranscript,
		browserSupportsSpeechRecognition
	} = useSpeechRecognition();
	if (!browserSupportsSpeechRecognition) {
		return <span>Browser doesn't support speech recognition.</span>;
	}

	const gamma = () => {
		setModal(!modal);
		props.closeTongue();

	}

	console.log('>>', chat);
	return (<>




		{listening ?
			<div class="mic">
				<MicIcon style={{ width: '60px', height: '60px', position: 'absolute', top: '40%', left: '40%' }} />
			</div> :
			null}

		<div class="overflowchat">
			<div>
				{/*<p>Microphone: {listening ? 'on' : 'off'}</p>*/}


				{/*<button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>*/}
				{/*<p>{transcript}</p>*/}
			</div>
			{chat.map((cvalue) => {
				if (cvalue.pos ==='left') {
					return (<><span ref={myRef} id="sahyog_left_mess">{cvalue.mess}</span><br /><br /></>)
				}
				else {
					return (<><span ref={myRef} id="sahyog_right_mess">{cvalue.mess}</span><br /><br /></>)
				}
			})}

		</div>

		<div style={{ display: 'flex' }}>
			{listening ?
				<input type="text" placeholder="What can i do for you" style={{ width: '100%' }} value={transcript} />
				:
				<input type="text" placeholder="What can i do for you" style={{ width: '100%' }} value={text} onChange={(e) => settext(e.target.value)} />

			}

			{micstate ===false ?
				<button style={{ outline: 'none', border: 'none', boxShadow: '3px 5px 2px grey' }} onClick={() => setmicstate(!micstate)}>
					<MicIcon onClick={SpeechRecognition.startListening} />
				</button>
				:
				<button style={{ outline: 'none', border: 'none', boxShadow: '3px 5px 2px grey', color: 'red' }} onClick={() => setmicstate(!micstate)} >
					<MicIcon onClick={SpeechRecognition.stopListening} />
				</button>
			}


			<button style={{ outline: 'none', border: 'none', boxShadow: '3px 5px 2px grey', marginLeft: '10px' }} onClick={sendchat}><SendIcon /></button>

		</div>


	</>)
}

export default Dsahyog;

