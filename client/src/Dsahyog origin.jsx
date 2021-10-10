{listening?
			<input type="text" placeholder="What can i do for you" style={{position:'fixed',bottom:'0%',width:'90%'
		,borderRadius:'10px',padding:'2px',border:'none'}} value={transcript}/>
			:
			<input type="text" placeholder="What can i do for you" style={{position:'fixed',bottom:'0%',width:'90%'
		,borderRadius:'10px',padding:'2px',border:'none'}} value={text} onChange={(e)=>settext(e.target.value)}/>
			
	}
		<button style={{position:'absolute',bottom:'0',right:'0'}} onClick={sendchat}><SendIcon/></button>
		<span id="sahyog_left_mess" style={{position:'relative'}}>Sahyog</span><br/>
		{/*<span id="sahyog_left_mess">What can i do for you?</span>*/}
		{listening?
			<div class="mic">
				<MicIcon style={{width:'60px',height:'60px',position:'absolute',top:'40%',left:'40%'}}/>		
		</div>:
		null}
	
		<div class="overflowchat">
		<div>
      {/*<p>Microphone: {listening ? 'on' : 'off'}</p>*/}
      
      {micstate==false?
      	 <button style={{position:'fixed',bottom:'0',right:'13%',outline:'none',background:'none',border:'none'}}  onClick={()=>setmicstate(!micstate)}>
      	<MicIcon onClick={SpeechRecognition.startListening} />
      </button>
      	:
      	 <button style={{position:'fixed',bottom:'0',right:'13%',outline:'none',color:'red',border:'none'}}  onClick={()=>setmicstate(!micstate)} >
      	<MicIcon onClick={SpeechRecognition.stopListening} />
      </button>
      }
      {/*<button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>*/}
      {/*<p>{transcript}</p>*/}
    </div>



		{chat.map((cvalue)=>{
			if(cvalue.pos=='left'){
				return(<><span ref={myRef} id="sahyog_left_mess">{cvalue.mess}</span><br/><br/></>)
			}
			else{
					return(<><span ref={myRef} id="sahyog_right_mess">{cvalue.mess}</span><br/><br/></>)
			}
		})}

		</div>


		onClick={()=






<div>
		
		<Modal isOpen={!modal} toggle={gamma} id="sahyog_modal" >
        <ModalHeader toggle={toggle}>Sahyog</ModalHeader>
        <ModalBody>
     
		
		
		{/*<span id="sahyog_left_mess">What can i do for you?</span>*/}
		{listening?
			<div class="mic">
				<MicIcon style={{width:'60px',height:'60px',position:'absolute',top:'40%',left:'40%'}}/>		
		</div>:
		null}
	
		<div class="overflowchat">
		<div>
      {/*<p>Microphone: {listening ? 'on' : 'off'}</p>*/}
      
    
      {/*<button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>*/}
      {/*<p>{transcript}</p>*/}
    </div>
		{chat.map((cvalue)=>{
			if(cvalue.pos=='left'){
				return(<><span ref={myRef} id="sahyog_left_mess">{cvalue.mess}</span><br/><br/></>)
			}
			else{
					return(<><span ref={myRef} id="sahyog_right_mess">{cvalue.mess}</span><br/><br/></>)
			}
		})}

		</div>
        </ModalBody>
        <ModalFooter>
       
         {listening?
			<input type="text" placeholder="What can i do for you" style={{width:'100%'}}  value={transcript}/>
			:
			<input type="text"placeholder="What can i do for you" style={{width:'100%'}} value={text} onChange={(e)=>settext(e.target.value)}/>
			
	}
	
	  {micstate==false?
      	 <button style={{outline:'none',border:'none',boxShadow:'3px 5px 2px grey'}}    onClick={()=>setmicstate(!micstate)}>
      	<MicIcon  onClick={SpeechRecognition.startListening} />
      </button>
      	:
      	 <button style={{outline:'none',border:'none',boxShadow:'3px 5px 2px grey',color:'red'}}   onClick={()=>setmicstate(!micstate)} >
      	<MicIcon onClick={SpeechRecognition.stopListening} />
      </button>
      }
    

      <button style={{outline:'none',border:'none',boxShadow:'3px 5px 2px grey'}} onClick={sendchat}><SendIcon/></button>
      

        </ModalFooter>
      </Modal>
     
        <span ref={myRef} style={{marginTop:'-0px',backgroundColor:'dodgerblue'}}id="sahyog_left_mess"></span><br/><br/>

      </div>