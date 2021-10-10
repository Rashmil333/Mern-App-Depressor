import React,{useState} from "react";
import Dnavbar from "./Dnavbar";
import Dfooter from "./Dfooter";
import Dcardinreliever from "./Dcardinreliever";
import Dcarddatareliever from "./Dcarddatareliever";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const image="https://cdn.wallpapersafari.com/54/52/CUKAq0.gif";
const Dreliever=()=>{
      
      const [modal, setModal] = useState(false);
      const [modal1, setModal1] = useState(false);
      const [modal2, setModal2] = useState(false);
      const [modal3, setModal3] = useState(false);
      const [modal4, setModal4] = useState(false);

      const toggle = () => setModal(!modal);
      const toggle1 = () => setModal1(!modal1);
      const toggle2 = () => setModal2(!modal2);
      const toggle3 = () => setModal3(!modal3);
      const toggle4 = () => setModal4(!modal4);

      const displaymodal=(id)=>{
        if(id==1){
          setModal(!modal);
        }
        if(id==2){
          setModal1(!modal1);
        }
        if(id==3){
          setModal2(!modal2);
        }
       if(id==4){
          setModal3(!modal3);
        }
       if(id==5){
          setModal4(!modal4);
        }

      }


  return(<>
    <Dnavbar/>
    <div id="relievermaindiv">
      <div className="container">
        <div className="row">
          {Dcarddatareliever.map((cvalue)=>{
      return(<Dcardinreliever heading={cvalue.heading} descript={cvalue.descript} img={cvalue.img} id={cvalue.id} outshow={displaymodal}/>)
    })}
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/>
    </div>
    <img style={{width:'100%'}}src={image}/><br/>
    <h1 style={{textAlign:'center'}}id="text_white">Don't Scroll. Save Life. Live Life</h1>
    <div>
    
      <Modal className="modal-dialog modal-dialog-centered" isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Information</ModalHeader>
        <ModalBody>
         <p>How you can help people</p><br/>
         <ul>
            <li>Giving them value will fastly pull out from depression.</li>
            <li>Depressed people need friends who care about them.Wants to spend time with them.Give your time as much as possible.</li>
            <li>Depressed people needs vision of light. Give them vision.</li>
            <li>Depressed people love when you ask personal questions with them.Ask personal questions.</li>
            <li>Give them a positive mental environment.This can be done by telling them about god.God loves all. </li>
            <li>Crack jokes with them.Making them laugh will extremely help them to play again.</li>
            
          </ul>
        </ModalBody>
       
      </Modal>
    </div>

     <div>
    
      <Modal className="modal-dialog modal-dialog-centered" isOpen={modal1} toggle={toggle1} >
        <ModalHeader toggle={toggle1}>Information</ModalHeader>
        <ModalBody>
         <p>How you can help people</p><br/>
        <ul >
            <li>People having anxiety needs instant emotional support.Sharing your emotions will help them feel comfortable.</li>
            <li>Tell them life is not so serious and not to worry. But enjoy life more instead of fearing.</li>
            <li>Try to generate willpower in them. So that they can fight the situation instead of dropping.</li>
            <li>Tell them to stop thinking about future.But live your life in present.</li>
            
          </ul>
        </ModalBody>
       
      </Modal>
    </div>

     <div>
    
      <Modal className="modal-dialog modal-dialog-centered" isOpen={modal2} toggle={toggle2} >
        <ModalHeader toggle={toggle2}>Information</ModalHeader>
        <ModalBody>
         <p>How you can help people</p><br/>
        <ul >
          <li>Tell them to relax.Inspire them to break their limits.</li>
            <li>Give them a suggestion to do the tasks from simpler to harder.</li>
            <li>Tell them stress is not a solution. But planning and strategy is solution. Planning makes you happy but overthinking and stress is just a waste of time.</li>
            <li>Tell them to see the problem with different perspective.Basically positive perspective.</li>
            <li>Generate the feeling in them that time is hard but at the end, everything is just fruitful like mango.</li>

          </ul>
        </ModalBody>
       
      </Modal>
    </div>

     <div>
    
      <Modal className="modal-dialog modal-dialog-centered" isOpen={modal3} toggle={toggle3} >
        <ModalHeader toggle={toggle3}>Information</ModalHeader>
        <ModalBody>
         <p>How you can help people</p><br/>
        <ul >
         <li>It happens that people try to do unexpected things which creates tension.Tell them not to expect but do that you can do.</li>
            <li>Tell them not to attach with anything.Attachement for long time creates tension. Tell them to free all the attachements in life.</li>
            <li>Tell them that sometimes you have to be down.Beacause down creates sympathy,gratitide.</li>
            <li>Tell them to focus on the hard work,patience,continuity.Dont focus on the fruits.</li>
            
          </ul>
        </ModalBody>
       
      </Modal>
    </div>

      <div>
    
      <Modal className="modal-dialog modal-dialog-centered" isOpen={modal4} toggle={toggle4} >
        <ModalHeader toggle={toggle4}>Information</ModalHeader>
        <ModalBody>
         <p>How you can help people</p><br/>
        <ul >
        
           <li>Tell them that dont kill yourself.Because everyone has to die.Tell them to wait and keep patience and survive.</li>
            <li>Tell them not to live your life just for yourself. But for others.Inspire them to spread love who needs you. There are lot of people who needs your love and devotion.</li>
            <li>Try to give them hope.Because hope and love is life and hoplessness is death. </li>
            <li>Tell them to believe in God.Because God is always with you and watching you.You have to just move towards God.Set the path to God.</li>
            
            
          </ul>
        </ModalBody>
       
      </Modal>
    </div>
    <Dfooter/>

  </>)
}

export default Dreliever;