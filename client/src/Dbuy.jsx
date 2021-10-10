import React, { useState } from 'react';
import Dnavbar from "./Dnavbar";
import Dbuycard from "./Dbuycard";
import Dbuydata from "./Dbuydata";
import Dbuyitemopen from "./Dbuyitemopen";
import Dfooter from "./Dfooter";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [state,setstate]=useState(false);
  const[imga,setimga]=useState("");
  const[typa,settypa]=useState("");
  const[costa,setcosta]=useState("");

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

  const buyfinal=(img,type,cost)=>{
  	setimga(img);
  	settypa(type);
  	setcosta(cost);
  	setstate(!state);
  }
  const goback=()=>{
  	setstate(!state);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img   src={item.src} alt={item.altText} id="carousel"/>
        <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
      </CarouselItem>
    );
  });

  return (<>
  
  	<Dnavbar/>
  	{state==true?<Dbuyitemopen img={imga} type={typa} cost={costa} backo={goback}/>:<div>
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
    	<div className="row">
    		{Dbuydata.map((cvalue)=>{
    			return(<Dbuycard callitem={buyfinal} img={cvalue.img} type={cvalue.type} cost={cvalue.cost}/>);
    		})}
    		
    	</div>
    </div>
    </div>
   	}
   
   	<Dfooter/>
    </>
  );
}

export default Dbuy;