import React,{useState} from "react";
import {useHistory} from "react-router-dom"

function Login(){

  const history=useHistory();
  const [state,setstate]=useState({
    email:"",pass:""
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
    const {email,pass}=state;
    const res=await fetch("/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,pass
      })
    });

   
    console.log(res.status);
    if(res.status===400){
    alert("Invalid Credentials");
    }
    else{
    alert("Login Successfull");
    }



    
  }

  return(<><h1>Login form</h1>
        <br/><br/>
    <form  method="POST">
       
        <label>Email</label>
        <input type="email" placeholder="name" name="email" onChange={inputevent} value={state.email}/><br/><br/>
        <label>password</label>
        <input type="password" placeholder="name" name="pass" onChange={inputevent} value={state.pass}/><br/><br/>
      
        <input type="submit" value="Register" onClick={postdata}></input>
    </form>

      </>)
}

export default Login;
