import React, { useState ,useEffect} from 'react';
import {useHistory} from "react-router-dom";
import RefreshIcon from '@material-ui/icons/Refresh';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import {useSelector} from "react-redux";
import Badge from '@material-ui/core/Badge';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';

const logo="https://i.ibb.co/MD5DV1q/logo.png";
 
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const Dnavbar = (props) => {


    const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {login_status==1?
             <NavItem>
             <NavLink href="/logout" onClick={postdata}><button className="btn btn-primary">Logout</button></NavLink>
            </NavItem>

          :<>
             <NavItem>
              <NavLink href="/signup"><button className="btn btn-primary" value="/signup" onClick={sltest}>Sign up</button></NavLink>
            </NavItem>
            <NavItem>
             <NavLink href="/login"><button className="btn btn-primary" value="/login" onClick={sltest}>Login</button></NavLink>
            </NavItem>

          </>}
          {login_status==1? <>
          <NavItem>
                 <NavLink href="/">
               <img style={{width:'50px',height:'50px',borderRadius:'50%'}} src={profile_photo}/><p>{email}</p></NavLink>
            
          </NavItem> <Divider /></>
          :null}
          
          
         <NavItem>
           
              <NavLink href="/profile"><button className="btn btn-danger" value="/profile" onClick={auth}>Profile{cat=="http://testmern52.herokuapp.com/profile"?
              <img src="https://64.media.tumblr.com/2e75bce29366db2538eb21444096ff42/tumblr_pkv8sniqcz1sqtg5co2_r1_1280.gifv" style={{width:'20px'}}/>:null}  </button></NavLink>
            </NavItem> <Divider />
            <NavItem>
              <NavLink href="/chat"><button className="btn btn-danger" value="/chat" onClick={auth}>Chat{cat=="http://testmern52.herokuapp.com/chat"?
              <img src="https://64.media.tumblr.com/2e75bce29366db2538eb21444096ff42/tumblr_pkv8sniqcz1sqtg5co2_r1_1280.gifv" style={{width:'20px'}}/>:null}</button></NavLink>
            </NavItem> <Divider />
            <NavItem>
              <NavLink href="/selfhealing"><button className="btn btn-danger" value="/selfhealing" onClick={auth}>SelfHealing{cat=="http://testmern52.herokuapp.com/selfhealing"?
              <img src="https://64.media.tumblr.com/2e75bce29366db2538eb21444096ff42/tumblr_pkv8sniqcz1sqtg5co2_r1_1280.gifv" style={{width:'20px'}}/>:null}</button></NavLink>
            </NavItem> <Divider />
            <NavItem>
              <NavLink href="/reliever"><button className="btn btn-danger" value="/reliever" onClick={auth}>Reliever{cat=="http://testmern52.herokuapp.com/reliever"?
              <img src="https://64.media.tumblr.com/2e75bce29366db2538eb21444096ff42/tumblr_pkv8sniqcz1sqtg5co2_r1_1280.gifv" style={{width:'20px'}}/>:null}</button></NavLink>
            </NavItem> <Divider />
            <NavItem>
              <NavLink href="/contribution"><button className="btn btn-danger" value="/contribution"onClick={auth}>Contribution{cat=="http://testmern52.herokuapp.com/contribution"?
              <img src="https://64.media.tumblr.com/2e75bce29366db2538eb21444096ff42/tumblr_pkv8sniqcz1sqtg5co2_r1_1280.gifv" style={{width:'20px'}}/>:null}</button></NavLink>
            </NavItem> <Divider />
            <NavItem>
              <NavLink href="/story"><button className="btn btn-danger" value="/story" onClick={auth}>Story{cat=="http://testmern52.herokuapp.com/story"?
              <img src="https://64.media.tumblr.com/2e75bce29366db2538eb21444096ff42/tumblr_pkv8sniqcz1sqtg5co2_r1_1280.gifv" style={{width:'20px'}}/>:null}</button></NavLink>
            </NavItem> <Divider />
            <NavItem>
              <NavLink href="/buy"><button className="btn btn-danger" value="/buy" onClick={auth}>Buy{cat=="http://testmern52.herokuapp.com/buy"?
              <img src="https://64.media.tumblr.com/2e75bce29366db2538eb21444096ff42/tumblr_pkv8sniqcz1sqtg5co2_r1_1280.gifv" style={{width:'20px'}}/>:null}</button></NavLink>
            </NavItem> <Divider />
            <NavItem>
              <NavLink href="/cart"><button className="btn btn-danger" value="/cart"onClick={auth}>
               <Badge badgeContent={cart_count+cart_number_item} color="primary">
        <ShoppingCartIcon value="/cart" onClick={auth}/>
      </Badge>{cat=="http://testmern52.herokuapp.com/cart"?
              <img src="https://64.media.tumblr.com/2e75bce29366db2538eb21444096ff42/tumblr_pkv8sniqcz1sqtg5co2_r1_1280.gifv" style={{width:'20px'}}/>:null}</button></NavLink>
            </NavItem> <Divider />
             <NavItem>
              <NavLink href="/setting"><button className="btn btn-danger" value="/setting"onClick={auth}>Setting{cat=="http://testmern52.herokuapp.com/setting"?
              <img src="https://64.media.tumblr.com/2e75bce29366db2538eb21444096ff42/tumblr_pkv8sniqcz1sqtg5co2_r1_1280.gifv" style={{width:'20px'}}/>:null}</button></NavLink>
            </NavItem> <Divider />
           
           

          
      </List>
     
     
    </div>
  );
  const [userdata,setuserdata]=useState({
  firstname:"user"
  });
  const history=useHistory();
  const [chat,setchat]=useState(false);
  const [signin,setsignin]=useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [profile_photo,setprofile_photo]=useState();
  const [profile_status,setprofile_status]=useState();
  const [login_status,setloginstatus]=useState();
  const [cat,setcat]=useState();
  const [email,setemail]=useState();
  const [cart_count,setcart_count]=useState(0);

  const toggle = () => setIsOpen(!isOpen);
   const postdata=async(e)=>{
    
    e.preventDefault();
    const res=await fetch("/logout",{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      },
     
    });
    history.push("/login");


   }

  const getdata=async()=>{
    
    
    const res=await fetch("/getdata",{
      method:"GET",
       headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
     
    });
    const data=await res.json();
    console.log(data);
    setuserdata(data);
    console.log(data);
    setemail(data.email);
    setloginstatus(data.login_status);
    if(data.profile_status==1){
       console.log(data.profile[0].img);
    setprofile_photo(data.profile[0].img);
    setemail(data.email)
    setcart_count(data.cart.length);
    }
   
   
  

    


   }



    const auth=async(e)=>{
    const link=e.target.value;
    e.preventDefault();
    
    const res=await fetch("/auth",{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
     
    });
      console.log(res.status);
    if(res.status==200){
  
    setchat(true);
  
    history.push(link);
     
    }
    else{
    history.push("/login");
    }

    
  

   }

    const sltest=async(e)=>{
    const link=e.target.value;
    e.preventDefault();
    
    const res=await fetch("/sltest",{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
     
    });
    console.log(res.status);
    if(res.status==200){
  
    history.push(link);

    }
    else{
    history.push("/login");
    }


   }
   useEffect(()=>{
   getdata();
   },[]);
   useEffect(()=>{
   console.log(window.location.href);
   setcat(window.location.href);
   },[]);
//     useEffect(()=>{
  
// SpeechRecognition.startListening({ continuous: true })
//  })
    useEffect((e)=>{
      if(transcript=='launch chat' ||transcript=='launch at'){
        history.push("/chat")
        resetTranscript();
      }
      else if(transcript=='launch reliever'){
        history.push("/reliever")
        resetTranscript();
      }
       else if(transcript=='launch self-healing' || transcript=='launch selfie link'){
        history.push("/selfhealing")
        resetTranscript();
      } else if(transcript=='launch profile'){
        history.push("/profile")
        resetTranscript();
      } else if(transcript=='launch contribution'){
        history.push("/contribution")
        resetTranscript();
      } else if(transcript=='launch story'){
        history.push("/story")
        resetTranscript();
      }
       else if(transcript=='launch buy' || transcript=='launch bye'){
        history.push("/buy")
        resetTranscript();
      }
       else if(transcript=='launch cart' || transcript=='launch card'){
        history.push("/cart")
        resetTranscript();
      }
       else if(transcript=='launch setting'){
        history.push("/setting")
        resetTranscript();
      }
      else if(transcript.includes('clear')){
        resetTranscript();

      }
      else if(transcript=='logout' || transcript=='lockout'){
        postdata(e);
      }
      else if(transcript=='login'){
        history.push("/login")
        resetTranscript();
      }
      else if(transcript=='launch home'){
        history.push("/")
      }

      else if(transcript=='sign up'){
        history.push("/signup")
        resetTranscript();
      }
    })

   const ai=()=>{
   var text=document.getElementById('nav_search').value;
   console.log(text);


   }

   const cart_number_item=useSelector((state)=>state.Addcart)
   
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }


  return (<>

    <div style={{display:'flex'}}>
      <Navbar style={{width:'100%'}} color="dark" className="container-fluid">

 

      <div class="logo">
      <div class="logo_center">
        <div class="logo_in">
          <div class="logo1">
            <div class="logo2">
              <div class="logo3">
                <div class="logo4"></div>
          
                
              </div>
              
            </div>
            
          </div>
        
          
        
        </div>

        
      </div>
      
    


      </div>
        <NavbarBrand href="/" id="navbar_tab" >
        <ul>
          <li>D</li>
          <li>E</li>
          <li>P</li>
          <li>R</li>
          <li>E</li>
          <li>S</li>
          <li>S</li>
          <li>O</li>
          <li>R</li>
        </ul></NavbarBrand>
         

          {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon style={{color:'pink'}}/></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
       <NavItem style={{marginLeft:'-25px',marginTop:'-20px'}}>
              <NavLink href="#">
          <div style={{display:'flex'}}>
                 <input type="text" placeholder="Speak-launch chat" id="nav_search" value={transcript}/>
                <div class="g_panda_main_nav" onClick={SpeechRecognition.startListening}>
        <div class="g_eye_nav">
          <div class="g_pupil_nav">
          </div>
        </div>
        <div class="g_eyeright_nav">
          <div class="g_pupil2_nav">
          </div>
        </div>
      <div class="g_face_nav">
      </div>
    </div>
    </div>
              </NavLink>
            </NavItem>
      </Navbar>
    </div>

    

  </>);
}

export default Dnavbar;

// heroku git:remote -a testmern52
// git push heroku master