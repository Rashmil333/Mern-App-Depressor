import React, { useState, useEffect, useRef } from 'react';
import * as mobilenet from "@tensorflow-models/mobilenet";
import { makeStyles } from '@material-ui/core/styles';
import Dnavbar from "../Components/Navbar/Dnavbar";
import Dbuycard from "./BuyCard/Dbuycard";
import Dbuydata from "./Dbuydata";
import Dbuyitemopen from "./Dbuyitemopen";
import Dfooter from "../Components/Footer/Dfooter";
import axios from "axios";
import Box from '@mui/material/Box';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const Image = (props) => {
  const [pic, setpic] = useState();
  const url = `https://api.unsplash.com/search/photos?query=${props.text}&client_id=fGYYT9wUq96IM8KB-H7HSVGpHu8frXnQU1HXVO2jHc4`;
  const headers = { "Content-Type": "application/json", }
  axios({
    method: 'get',
    url: url,
    headers: headers
  })
    .then(function (response) {
      setpic(response.data.results[0].urls.full);
    })
    .catch(function (error) {
      console.log(error);
    });
  return (<>
    <img src={pic} style={{ width: '100px', height: '100px' }} />

  </>)
}
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  paper: {
    background: '#373738',
    color: 'white'
  }
});


const items = [
  {
    src: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaWNpbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    altText: 'Fresh Stock of Medicines.',
    caption: 'All the products are stocked after March'
  },
  {
    src: 'https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3RoaW5nJTIwc3RvcmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    altText: 'Trendy Clothes with percent offs',
    caption: 'Return is not valid.'
  },
  {
    src: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    altText: 'Fresh Fruits and Packs of juices.',
    caption: 'Return In case not satisfied.'
  }
];

const Dbuy = (props) => {
  const classes = useStyles();
  const styles = useStyles();
  const [stated, setStated] = React.useState({

    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setStated({ ...stated, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <p style={{ color: '#a6d8ff', textAlign: 'center', fontSize: '10px' }}>Recommendations</p>

        {results.map((cvalue) => {
          return (<>
            <div style={{
              width: '90%',
              height: '100px',
              backgroundColor: '#4e585d',
              marginLeft: '10px',
              display: 'flex',
              marginTop: '10px'
            }}>
              <Image text={cvalue.className} />
              <p style={{ color: 'white', textAlign: 'center', fontSize: '15px', margin: '10px', textTransform: 'uppercase' }}>{cvalue.className}</p>

            </div>
          </>)
        })}
      </List>
    </Box>
  );


  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [state, setstate] = useState(false);
  const [imga, setimga] = useState("");
  const [typa, settypa] = useState("");
  const [costa, setcosta] = useState("");
  const [product_search, setProductsearch] = useState();
  const [apiData, setapiData] = useState([]);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const buyfinal = (img, type, cost) => {
    setimga(img);
    settypa(type);
    setcosta(cost);
    setstate(!state);
  }
  const goback = () => {
    setstate(!state);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} id="carousel" />
        <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
      </CarouselItem>
    );
  });

  const onChange = async (e) => {
    setProductsearch(e.target.value);

    const url = `https://api.unsplash.com/search/photos?query=${product_search}&client_id=fGYYT9wUq96IM8KB-H7HSVGpHu8frXnQU1HXVO2jHc4`;
    const headers = { "Content-Type": "application/json", }
    axios({
      method: 'get',
      url: url,
      headers: headers
    })
      .then(function (response) {
        console.log(response);
        setapiData(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });





  }

  const [isModelLoading, setIsModelLoading] = useState(false)
  const [model, setModel] = useState(null)
  const [imageURL, setImageURL] = useState(null);
  const [results, setResults] = useState([])
  const [history, setHistory] = useState([])
  const [allrecomm, setallrecom] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const imageRef = useRef()
  const textInputRef = useRef()
  const fileInputRef = useRef()

  const loadModel = async () => {
    setIsModelLoading(true)
    try {
      const model = await mobilenet.load()
      setModel(model)
      setIsModelLoading(false)
    } catch (error) {
      console.log(error)
      setIsModelLoading(false)
    }
  }

  const uploadImage = (e) => {
    const { files } = e.target
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0])
      setImageURL(url)
    } else {
      setImageURL(null)
    }
  }

  const identify = async () => {
    setisLoading(true)
    const results = await model.classify(imageRef.current)
    setResults(results);
    results.map((cvalue) => {
      setallrecom((oldata) => {
        return ([
          ...oldata, cvalue.className])
      })
    })
    textInputRef.current.value = '';
    document.getElementById('paster').value = '';
    setTimeout(() => {
      setisLoading(false);
    }, 4000)
  }

  const handleOnChange = (e) => {
    setImageURL(e.target.value)
    setResults([])
  }

  const triggerUpload = () => {
    fileInputRef.current.click()
  }

  useEffect(() => {
    loadModel()
  }, [])

  useEffect(() => {
    if (imageURL) {
      setHistory([imageURL, ...history])
    }
  }, [imageURL])

  if (isModelLoading) {
    return <h2>Model Loading...</h2>
  }

  console.log(results);
  console.log(allrecomm)


  return (<>

    <Dnavbar />
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={stated[anchor]}
            onClose={toggleDrawer(anchor, false)}
            classes={{ paper: styles.paper }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    {state == true ? <Dbuyitemopen img={imga} type={typa} cost={costa} backo={goback} /> : <div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      <div className="containe" id="buydiv">
        <div style={{ textAlign: 'center' }}>
          <input type="text" placeholder="Search Product" className="buyinput" onChange={(e) => onChange(e)} value={product_search} />

        </div>
        <div className="App">

          <div className='inputHolder'>
            <input type="text" placeholder='Paster image URL' id="paster" ref={textInputRef} value={imageURL} onChange={handleOnChange} style={{ display: 'none' }} />
          </div>
          <div className="mainWrapper">
            <div className="mainContent">
              <div className="imageHolder">
                {imageURL && <img src={imageURL} alt="Upload Preview" crossOrigin="anonymous" ref={imageRef} style={{ width: '200px', height: '200px' }} />}
                {isLoading == true && imageURL ? <div className="loader" onClick={identify}>

                </div> :
                  imageURL && isLoading == false ? <>
                    <div className="loaderimg" onClick={identify}>

                    </div>

                  </>
                    : null}

              </div>
              {imageURL && isLoading == false ? <Button onClick={toggleDrawer('right', true)} style={{ backgroundColor: 'red', color: 'white' }}>Show Recommendations</Button> : null}
            </div>

          </div>

        </div>
        <div style={{ marginLeft: '50px', marginTop: '30px' }} className='container' >
          {apiData.map((cvalue) => {
            return (<>

              <img id="apiimage" ref={imageRef} src={cvalue.urls.full} style={{ width: '100px', height: '100px', marginLeft: '20px' }} onClick={() => setImageURL(cvalue.urls.full)} />
            </>)
          })}

        </div>
        <div className="row">
          {Dbuydata.map((cvalue) => {
            return (<Dbuycard callitem={buyfinal} img={cvalue.img} type={cvalue.type} cost={cvalue.cost} />);
          })}

        </div>
      </div>
    </div>
    }

    <Dfooter />
  </>
  );
}

export default Dbuy;