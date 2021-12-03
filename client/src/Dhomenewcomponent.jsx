import React from "react";
import { useHistory } from "react-router-dom";
import "./Dhomenew.css";
import logoWho from "./images/whologo.png";
import piedepressor from "./images/piedepressors.png";
import chartdepressor from "./images/chartdepressor.png";
import chartdepressorage from "./images/chartdepressorage.png";
import pieanxiety from "./images/pieanxiety.png";
import chartanxiety from "./images/chartanxiety.png";
import chartanxietyage from "./images/chartanxietyage.png";
import chartsuicide from "./images/chartsuicide.png";
import clownfish from "./images/clownfish.png";
const Dhomenewcomponent = () => {
    const history=useHistory();
  return (
    <>
      <div className="blackSky">
        <h1 className="floatyWatertext">
          India lost more people to suicide than to Coronavirus(1.49lakhs) in
          2020 shows NRCB Data.1.53 lakhs suicides highest in last 10 years in
          India!
        </h1>
        <h2 className="analyzetext">
          Data shows :<br />
        </h2>
        <div className="flexdiv">
          <img src={logoWho} className="Image" />
          <h4 className="detailtext">
            Depression is a common illness worldwide, with an estimated
            <span className="importanttext"> 3.8% of the population </span>
            affected.
          </h4>
        </div>

        <div className="flexdiv">
          <h4 className="detailtext2">
            Approximately
            <span className="importanttext"> 280 million people </span>
            in the world have depression
          </h4>
          <img src={logoWho} className="Image" style={{ marginLeft: "20%" }} />
        </div>

        <div className="flexdiv">
          <img src={logoWho} className="Image" />
          <h4 className="detailtext">
            Over
            <span className="importanttext"> 700 000 people </span>
            die due to suicide every year.
          </h4>
        </div>

        <div className="flexdiv">
          <h4 className="detailtext2">
            more than
            <span className="importanttext">75% of people </span>
            in low- and middle-income countries receive no treatment
          </h4>
          <img src={logoWho} className="Image" style={{ marginLeft: "20%" }} />
        </div>
      </div>

      <div>
        <div className="whiteSky">
          <h1 className="text3">
            Global and regional estimates of prevalence Depression
          </h1>
        </div>
        <img
          src={piedepressor}
          style={{ width: "100%", height: "100%  " }}
          className="floatyimage"
        />
        <img
          src={chartdepressor}
          style={{ width: "100%", height: "100%  " }}
          className="floatyimage"
        />
        <img
          src={chartdepressorage}
          style={{ width: "100%", height: "100%  " }}
          className="floatyimage"
        />
      </div>
      <div className="whiteSkydown">
        <h1 className="text3">
          Global and regional estimates of prevalence Anxiety disorders
        </h1>
      </div>

      <img
        src={pieanxiety}
        style={{ width: "100%", height: "100%  " }}
        className="floatyimage"
      />

      <img
        src={chartanxiety}
        style={{ width: "100%", height: "100%  " }}
        className="floatyimage"
      />

      <img
        src={chartanxietyage}
        style={{ width: "100%", height: "100%  " }}
        className="floatyimage"
      />
       <img
        src={chartsuicide}
        style={{ width: "100%", height: "100%  " }}
        className="floatyimage"
      />
      	<div className="clownfish" onClick={()=>window.location.reload()}>
					<img src={clownfish}/>
		</div>	
    </>
  );
};

export default Dhomenewcomponent;
