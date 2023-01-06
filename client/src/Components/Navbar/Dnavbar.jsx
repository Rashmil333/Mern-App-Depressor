import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import myInfoAction from '../../actions/myInfoAction';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector } from "react-redux";
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import HealingIcon from '@material-ui/icons/Healing';
import SettingsIcon from '@material-ui/icons/Settings';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import LogoutIcon from '@mui/icons-material/Logout';
import Badge from '@material-ui/core/Badge';
import EditIcon from '@mui/icons-material/Edit';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { useSpeechRecognition } from 'react-speech-recognition';
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
} from 'reactstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { AUTH, get, getuserData, logout, SLTEST } from '../../constant';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  paper: {
    background: '#1e222d',
    color: 'white'
  }
});
const catImageforavbar = 'https://64.media.tumblr.com/2e75bce29366db2538eb21444096ff42/tumblr_pkv8sniqcz1sqtg5co2_r1_1280.gifv';
const Dnavbar = (props) => {

  const dispatch = useDispatch();
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
        {login_status === 1 ? <>
          <NavItem style={{ marginLeft: '43px' }} id='profile'>
            <NavLink href="/">

              <img style={{ width: '5rem', height: '5rem', borderRadius: '50%' }} src={profile_photo} alt='pic' />
              <div style={{ display: 'flex' }}>

              </div>
              <div style={{ display: 'flex' }}>
                <p style={{ margin: '10px 0px 10px 20px', color: 'white' }}>{email}</p>
                <EditIcon style={{ color: 'white', marginLeft: '10px', marginTop: '9px', fontSize: '20px' }} />
              </div>
            </NavLink>
          </NavItem>
        </>
          : null}


        <NavItem class="navitem">
          <NavLink href="/profile">
            <button className="btn_nav" value="/profile" onClick={auth}>
              <PersonIcon style={{ color: '#6b6f7a', marginRight: '10px' }} />
              Profile
              {cat === "http://localhost:3000/profile" ?
                <img src={catImageforavbar} alt='pic' style={{ width: '20px' }} /> : null}
            </button>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="/chat"><button className="btn_nav" value="/chat" onClick={auth}>
            <ChatIcon style={{ color: '#6b6f7a', marginRight: '10px' }} />
            Chat{cat === "http://localhost:3000/chat" ?
              <img src={catImageforavbar} alt='pic' style={{ width: '20px' }} /> : null}
          </button>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="/selfhealing"><button className="btn_nav" value="/selfhealing" onClick={auth}>
            <HealingIcon style={{ color: '#6b6f7a', marginRight: '10px' }} />
            SelfHealing{cat === "http://localhost:3000/selfhealing" ?
              <img src={catImageforavbar} alt='pic' style={{ width: '20px' }} /> : null}
          </button>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="/reliever"><button className="btn_nav" value="/reliever" onClick={auth}>
            <LocalHospitalIcon style={{ color: '#6b6f7a', marginRight: '10px' }} />
            Reliever{cat === "http://localhost:3000/reliever" ?
              <img src={catImageforavbar} alt='pic' style={{ width: '20px' }} /> : null}
          </button>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contribution"><button className="btn_nav" value="/contribution" onClick={auth}>
            <CardGiftcardIcon style={{ color: '#6b6f7a', marginRight: '10px' }} />
            Contribution{cat === "http://localhost:3000/contribution" ?
              <img src={catImageforavbar} alt='pic' style={{ width: '20px' }} /> : null}
          </button>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/story"><button className="btn_nav" value="/story" onClick={auth}>
            <HistoryEduIcon style={{ color: '#6b6f7a', marginRight: '10px' }} />
            Story{cat === "http://localhost:3000/story" ?
              <img src={catImageforavbar} alt='pic' style={{ width: '20px' }} /> : null}
          </button>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/buy"><button className="btn_nav" value="/buy" onClick={auth}>
            <LocalMallIcon style={{ color: '#6b6f7a', marginRight: '10px' }} />
            Buy{cat === "http://localhost:3000/buy" ?
              <img src={catImageforavbar} alt='pic' style={{ width: '20px' }} /> : null}
          </button>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/cart"><button className="btn_nav" value="/cart" onClick={auth}>
            <Badge badgeContent={cart_count + cart_number_item} color="primary">
              <ShoppingCartIcon value="/cart" onClick={auth} style={{ color: '#6b6f7a', marginRight: '10px' }} />
              Cart
            </Badge>{cat === "http://localhost:3000/cart" ?
              <img src={catImageforavbar} alt='pic' style={{ width: '20px' }} /> : null}
          </button>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/setting">
            <button className="btn_nav" value="/setting" onClick={auth}>
              <SettingsIcon style={{ color: '#6b6f7a', marginRight: '10px' }} />
              Setting{cat === "http://localhost:3000/setting" ?
                <img src={catImageforavbar} alt='pic' style={{ width: '20px' }} /> : null}
            </button>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="/healthstatus">
            <button className="btn_nav" value="/healthstatus" onClick={auth}>
              <DirectionsRunIcon style={{ color: '#6b6f7a', marginRight: '10px' }} />
              Check Your Status{cat === "http://localhost:3000/setting" ?
                <img src={catImageforavbar} alt='pic' style={{ width: '20px' }} /> : null}
            </button>
          </NavLink>
        </NavItem>

        {login_status === 1 ?
          <NavItem>
            <NavLink href="/logout" onClick={postdata}>
              <button className="btn_nav">
                <LogoutIcon style={{ color: 'white', marginRight: '10px' }} />

                <span style={{ color: "white" }}>Logout</span>
              </button>
            </NavLink>
          </NavItem>

          : <>
            <NavItem>
              <NavLink href="/signup"><button className="btn btn-primary" value="/signup" onClick={sltest}>Sign up
              </button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login"><button className="btn btn-primary" value="/login" onClick={sltest}>Login
              </button>
              </NavLink>
            </NavItem>
          </>}
      </List>


    </div>
  );
  const [userdata, setuserdata] = useState({
    firstname: "user"
  });
  const styles = useStyles();
  const history = useHistory();
  const [chat, setchat] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  const [profile_photo, setprofile_photo] = useState();
  const [login_status, setloginstatus] = useState();
  const [cat, setcat] = useState();
  const [email, setemail] = useState();
  const [cart_count, setcart_count] = useState(0);

  const postdata = async (e) => {

    e.preventDefault();
    const res = await fetch(logout, get());
    console.log(res);
    history.push("/login");
    if (res.status == 200) {
      localStorage.removeItem('authorization');
    }
  }

  const getdata = async () => {

    const res = await fetch(getuserData, get());
    const data = await res.json();
    console.log(data);
    setuserdata(data);
    console.log(data);
    setemail(data.firstname);
    if (data.firstname) {
      dispatch(myInfoAction(data.firstname, data.email, data.profile[0].img));
    }

    setloginstatus(data.login_status);
    if (data.profile_status === 1) {
      console.log(data.profile[0].img);
      setprofile_photo(data.profile[0].img);
      setemail(data.firstname)
      setcart_count(data.cart.length);
    }
  }

  const auth = async (e) => {
    const link = e.target.value;
    e.preventDefault();
    const res = await fetch(AUTH, get());
    console.log(res.status);
    if (res.status === 200) {

      setchat(true);

      history.push(link);
    }
    else {
      history.push("/login");
    }
  }

  const sltest = async (e) => {
    const link = e.target.value;
    e.preventDefault();

    const res = await fetch(SLTEST, get());
    console.log(res.status);
    if (res.status === 200) {
      history.push(link);
    }
    else {
      history.push("/login");
    }
  }
  useEffect(() => {
    getdata();
  }, []);

  useEffect(() => {
    console.log(window.location.href);
    setcat(window.location.href);
  }, []);
  //     useEffect(()=>{

  // SpeechRecognition.startListening({ continuous: true })
  //  })
  useEffect((e) => {
    if (transcript === 'launch chat' || transcript === 'launch at') {
      history.push("/chat")
      resetTranscript();
    }
    else if (transcript === 'launch reliever') {
      history.push("/reliever")
      resetTranscript();
    }
    else if (transcript === 'launch self-healing' || transcript === 'launch selfie link') {
      history.push("/selfhealing")
      resetTranscript();
    } else if (transcript === 'launch profile') {
      history.push("/profile")
      resetTranscript();
    } else if (transcript === 'launch contribution') {
      history.push("/contribution")
      resetTranscript();
    } else if (transcript === 'launch story') {
      history.push("/story")
      resetTranscript();
    }
    else if (transcript === 'launch buy' || transcript === 'launch bye') {
      history.push("/buy")
      resetTranscript();
    }
    else if (transcript === 'launch cart' || transcript === 'launch card') {
      history.push("/cart")
      resetTranscript();
    }
    else if (transcript === 'launch setting') {
      history.push("/setting")
      resetTranscript();
    }
    else if (transcript.includes('clear')) {
      resetTranscript();

    }
    else if (transcript === 'logout' || transcript === 'lockout') {
      postdata(e);
    }
    else if (transcript === 'login') {
      history.push("/login")
      resetTranscript();
    }
    else if (transcript === 'launch home') {
      history.push("/")
    }

    else if (transcript === 'sign up') {
      history.push("/signup")
      resetTranscript();
    }
  })

  // const ai = () => {
  //   var text = document.getElementById('nav_search').value;
  //   console.log(text);
  // }

  const cart_number_item = useSelector((state) => state.Addcart)

  const {
    transcript,
    // listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (<>
    <div style={{ display: 'flex' }}>
      <Navbar id="navbar" color="dark" className="container-fluid">

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
          </ul>
        </NavbarBrand>


        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}><MenuIcon style={{ color: 'pink' }} /></Button>
            <Drawer classes={{ paper: styles.paper }} anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </Navbar>
    </div>
  </>);
}

export default Dnavbar;

// heroku git:remote -a testmern53
// git push heroku master
