import React, { useState } from "react";
import Dnavbar from "../Components/Navbar/Dnavbar";
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import { post, SVM } from "../constant";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Dhealthstatus = () => {
  const [awareness, setAwareness] = useState();
  const [connection, setConnection] = useState();
  const [insight, setInsight] = useState();
  const [purpose, setPurpose] = useState();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [finalresult, setFinalResult] = useState('');

  const postdata = async () => {
    var Array = [];
    Array.push(awareness * 0.1);
    Array.push(connection * 0.1);
    Array.push(insight * 0.1);
    Array.push(purpose * 0.1);
    const variables={newarray: Array};
    const res = await fetch(SVM,post(variables));
    const result = await res.json();
    console.log(result);
    if (result === 1) {
      setFinalResult('Normal')
    }
    else {
      setFinalResult('Do Better')
    }
    setTimeout(() => {
      handleOpen();
    }, 3000)

  }

  return (<>
    <Dnavbar />

    <div className='healthmaindiv'>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12">
            <div className={`slidercardg${awareness > 50}`} >
              <p className="slidertext" >{awareness}%<br /> Self Awareness</p>
            </div>

            <input type="range" min="1" max="100" className="slider" value={awareness} onChange={(e) => setAwareness(e.target.value)} />

          </div>
          <div className="col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12">
            <div className={`slidercardCg${connection > 50}`} >
              <p className="slidertext" >{connection}%<br /> Connection</p>
            </div>

            <input type="range" min="1" max="100" className="slider" value={connection} onChange={(e) => setConnection(e.target.value)} />

          </div>
          <div className="col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12">
            <div className={`slidercardgI${insight > 50}`} >
              <p className="slidertext" >{insight}%<br /> Insight</p>
            </div>

            <input type="range" min="1" max="100" className="slider" value={insight} onChange={(e) => setInsight(e.target.value)} />

          </div>
          <div className="col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12">
            <div className={`slidercardgP${purpose > 50}`} >
              <p className="slidertext" >{purpose}%<br /> Purpose</p>
            </div>
            <input type="range" min="1" max="100" className="slider" value={purpose} onChange={(e) => setPurpose(e.target.value)} />
          </div>
        </div>

        <button className="button2" style={{ marginTop: '30px' }} onClick={postdata}>Analyze</button>
      </div>
    </div>

    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ textAlign: 'center' }}>
          {finalresult === 'Normal' ?
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4kE4EHIevaHAl2LZafHAXG_CsFiWVBdnTjSIISfSqMaF4yLNMx3DaeGzTPfcIgb4-IBw&usqp=CAU' style={{ width: '100px', height: '100px' }} alt='pic' />
            :
            <img src='https://www.adorama.com/alc/wp-content/uploads/2021/05/bird-wings-flying.gif' style={{ width: '100px', height: '100px' }} alt='pic' />
          }

          <p style={{ fontSize: '25px' }}>{finalresult}</p>
        </Box>
      </Modal>
    </div>
  </>)
}

export default Dhealthstatus;