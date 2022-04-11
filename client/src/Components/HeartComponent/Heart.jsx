import React from 'react';
import './heart.css';

const Heart = (props) => {
  const { speed } = props;
  return (
    <div class={speed > 0 && speed <= 10 ? 'g_heartMediumSpeed' : speed > 10 ? '' > 'g_heartHighSpeed' : "g_heart"}>

    </div>);
};

export default Heart;
