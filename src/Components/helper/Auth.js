import React,  {  useReducer,useState,useEffect, useRef } from "react";
const Auth = (props) =>{

    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {}
    );
    const [errorMessage, setErrorMessage] = useState("");
    

    const handleChange=(evt)=>{
        setUserInput({[evt.target.name]:evt.target.value});
    }

    const saveToProfileData=()=>{
        if(userInput.username=="akhil" && userInput.password=="123")
        props.isAuthenticatedEventToAuth(true);
        else
        setErrorMessage("Authentication Failed! Try Again");
    }

    
let content= (
    <div className="a">
    <div className="col-md-12 addIn">
           <label className="fixedDisplay">Username</label>
           <input className="adjustWidth" placeholder="Username" onChange ={handleChange} name="username" value={userInput.username}  type="text"/>
           {/* <p className="addIner blinking">hello </p>  */}
           </div> 
           <div className="col-md-12 addIn">
           <label className="fixedDisplay">Password</label>
           <input className="adjustWidth" placeholder="Password"  name="password" value={userInput.password} onChange ={handleChange}  type="Password"/>
           
           </div> 
           <p className="addIner blinking"> {errorMessage}</p> 
           <div className="col-md-12 addIn"><button className="fixedDisplay adjustWidth mt-15" onClick={()=>saveToProfileData(userInput)}>SUBMIT</button></div>
    </div>
)
return content;
}

export default Auth; 