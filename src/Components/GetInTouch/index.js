    import React,  {  useReducer,useState } from "react";
    import axios from 'axios';
    import AppModal from '../helper/AppModal';
    import '../../Styles/GetinTouch.css';
    import '../../Styles/Common.css';
    const GetInTouch =() =>{

    const[modalComponent,setModalComponent]=useState("gallery");
    const[childMessage,setChildMessage] =  useState("null");
    const[showModal,setShowModal] =  useState(false);
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            name :'',
            dob :'',
            mno :'',
            email :'',
            SystemUrl:''
        }
    );
    const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  const validMnoRegex  = RegExp(/^1?([1-9])(\d{9})/);
  const [error, setError] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            name :'',
            dob :'',
            mno :'',
            email :'',
            SystemUrl:''
        }
    );

    // let a=()=>{setChildMessage('Processing...')}

    const showModalfn=(componentToLoad) =>{
            setModalComponent('null')
            
            
            setChildMessage('Processing...')
        setShowModal(true);
    //  console.log("isshowmodal true")     
     
     }

    const handleChange = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setUserInput({[name]: newValue});
        
    }

    const isClosedFromAppModal=(data_from_appModal)=>{
        if(data_from_appModal.includes("clos"))
        setShowModal(false);
     }

        let saveToProfileData=(userInput)=>{
            
              error.name = userInput.name.length < 5 ? 'Name can not be blank!' : '';
              error.mno = validMnoRegex.test(userInput.mno)   ? '':'mobile must be 10 digit !' ;
              error.dob = userInput.dob.charAt(4) !== '/'  ? 'DOB must be in yyyy/mm/dd format' : '';
              error.email = validEmailRegex.test(userInput.email) ? '' : 'Email is not valid!';
              setError(error);
               if(!(error.name ==''&& error.mno ==''&& error.dob ==''&& error.email =='')){
                console.log("inside dave to profile ifff")   
                return;
               }
               showModalfn("null")
            // console.log("hello save");
            // console.log("selectedFile ")
            axios.defaults.baseURL = userInput.SystemUrl;
            let url_system="/data/new?name="+userInput.name+"&mobNo="+userInput.mno+"&email="+userInput.email+"&dob="+userInput.dob;
            console.log("Systemurl "+url_system)
            
            axios.post(url_system)
        .then((res)=>{
            console.log("--------->"+res.data);
            if(res.data.includes('succe')){
                setChildMessage(res.data)   
            }

        } ).then((res)=>{
            console.log("--------->2 "+res);
        }).catch((err)=>{console.log(' error from get in touch',err);
        // if(err.response.status>250){
              
            checkForData(userInput.mno);
            // +err.response.status
        // }
        
    })
        }
        
        let checkForData =(mobNo)=>{
            axios.get("/dfpByMobNo/"+mobNo).then((res)=>{
                console.log("checkForData---->",res.data);
                if(!res.data){
                    setChildMessage('Error '+' Try Again...') 
                }
            }).catch((err)=>{
                setChildMessage('Error '+' Try Again...') 
            })
        }




        let content =(
            
                <div className="col-md-12 Appmodal padd0">
       {showModal? <AppModal  isClosedFromAppModal={isClosedFromAppModal} componentToLoad={modalComponent} messageToChild={childMessage}>
       
       {/* {(followers==null) ?<div className="spinner-border text-secondary" role="status">
</div> :
                     <h4>{followers}</h4>} */}
       </AppModal>:null} 
       <div className="row displayUnset">
                <div className="col-md-12 addIn"><label className="fixedDisplay">CheckURL:</label><input className="adjustWidth" name="SystemUrl" value={userInput.SystemUrl} onChange ={handleChange} placeholder="PASTE URL" type="text"/></div>
                
                {/* onMouseLeaves={onChangeHandler} */}
                {/* onFocus={onChangeHandler}  */}
                {/* onMouseOut */}
                {/* <button className="col-md-12 addIn" onClick={()=>checkProfileDataURL()}>SUBMIT</button> */}
                
                <div className="col-md-12 addIn"><label className="fixedDisplay">Name:</label><input className="adjustWidth"  name="name" value={userInput.name} onChange ={handleChange} type="text"/></div>
                <p className="blinking addIner">{error.name} </p>
                
                <div className="col-md-12 addIn"><label className="fixedDisplay">DOB:</label><input className="adjustWidth"  name="dob" value={userInput.dob} onChange ={handleChange} placeholder="e.g. (YYYY/MM/DD)" type="text"/></div>
                <p className="addIner blinking">{error.dob} </p>
                <div className="col-md-12 addIn"><label className="fixedDisplay">Mobile No:</label><input className="adjustWidth"  name="mno" value={userInput.mno} onChange ={handleChange} placeholder="10 digit only" type="text"/></div>
                <p className="addIner blinking">{error.mno} </p>
                <div className="col-md-12 addIn"><label className="fixedDisplay">Email:</label><input className="adjustWidth" name="email" value={userInput.email} onChange ={handleChange} type="text"/></div>
                <p className="addIner blinking">{error.email} </p>
                <div className="col-md-12 addIn"><button className="fixedDisplay adjustWidth mt-15" onClick={()=>saveToProfileData(userInput)}>SUBMIT</button></div>
               
            </div>
            </div>
            
        )
        return content;
    }

    export default GetInTouch;

    