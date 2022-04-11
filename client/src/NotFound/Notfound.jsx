import React from 'react'
import "./Notfound.css";
const Notfound = () => {
    return (
        <div className="notfoundContainer">
                <div style={{display:'grid'}}>
                           <h1 className='text22'>404 Not Found</h1>
                <p className='text11'>Oops something went Wrong</p>
                <a className="buttonnotfound"href="/">GO TO HOME PAGE</a>
                </div>
         
        </div>
    )
}

export default Notfound
