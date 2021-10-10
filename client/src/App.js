import React,{useState} from "react";
import {useHistory} from "react-router-dom"

function App(){

  const history=useHistory();
  const [state,setstate]=useState({
    name:"",phoneno:"",email:"",pass:"",conpass:""
  });

  let name,value;
  const inputevent=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setstate({...state,[name]:value});
    console.log(state)
  }
  const postdata=async(e)=>{
    e.preventDefault();
    const {name,phoneno,email,pass,conpass}=state;
    const res=await fetch("/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,phoneno,email,pass,conpass
      })
    });

    const data=await res.json();


    
  }

  return(<><h1>Registration form</h1>
        <br/><br/>
    <form  method="POST">
        <label>Name</label>
        <input type="text" placeholder="name" name="name" onChange={inputevent} value={state.name}/><br/><br/>
        <label>Phone no</label>
        <input type="number" placeholder="name" name="phoneno" onChange={inputevent} value={state.phoneno}/><br/><br/>
        <label>Email</label>
        <input type="email" placeholder="name" name="email" onChange={inputevent} value={state.email}/><br/><br/>
        <label>password</label>
        <input type="password" placeholder="name" name="pass" onChange={inputevent} value={state.pass}/><br/><br/>
        <label>confirm password</label>
        <input type="password" placeholder="name" name="conpass" onChange={inputevent} value={state.conpass}/><br/><br/>
        <input type="submit" value="Register" onClick={postdata}></input>
    </form>

      </>)
}

export default App;
