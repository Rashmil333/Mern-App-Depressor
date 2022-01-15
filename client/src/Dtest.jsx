import React from "react";
import './styles.css';
import {Helmet} from "react-helmet";

const Dtest=()=>{
	

	return(<>
	<div>
	<Helmet>
	<script src="./js/jeelizFaceTransfer.js"></script>
    <script src="src/js/emotion.js"></script>
    <script src="src/js/main.js"></script>
    </Helmet>
	
		 <canvas id="canvas" class="canvas" width="400"></canvas>
      <div id="displacement"></div>

      <div id="emotion">
        <div id="emotion-anger">
          <img src="assets/icons/angry.png" alt="" />
        </div>
        <div id="emotion-fear">
          <img src="assets/icons/fear.png" alt="" />
        </div>
        <div id="emotion-happy">
          <p>happy</p>
        </div>
        <div id="emotion-sad">
          <img src="assets/icons/sad.png" alt="" />
        </div>
        <div id="emotion-surprise">
          <img src="assets/icons/surprise.png" alt="" />
        </div>
      </div>
	  </div>
	</>)
}

export default Dtest;