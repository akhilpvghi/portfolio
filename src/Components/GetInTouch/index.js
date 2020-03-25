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

    const showModalfn=(componentToLoad)=>{
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

        let saveToProfileData=()=>{
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
       <div className="row">
                <div className="col-md-12 addIn"><label>CheckURL:</label><input name="SystemUrl" value={userInput.SystemUrl} onChange ={handleChange} placeholder="PASTE URL" type="text"/></div>
                
                {/* onMouseLeaves={onChangeHandler} */}
                {/* onFocus={onChangeHandler}  */}
                {/* onMouseOut */}
                {/* <button className="col-md-12 addIn" onClick={()=>checkProfileDataURL()}>SUBMIT</button> */}
                
                <div className="col-md-12 addIn"><label>Name:</label><input name="name" value={userInput.name} onChange ={handleChange} type="text"/></div>
                <div className="col-md-12 addIn"><label>DOB:</label><input  name="dob" value={userInput.dob} onChange ={handleChange} type="text"/></div>
                <div className="col-md-12 addIn"><label>Mobile No:</label><input  name="mno" value={userInput.mno} onChange ={handleChange} type="text"/></div>
                <div className="col-md-12 addIn"><label>Email:</label><input   name="email" value={userInput.email} onChange ={handleChange} type="text"/></div>
                
                <button className="col-md-12 addIn" onClick={()=>saveToProfileData()}>SUBMIT</button>
            </div>
            </div>
            
        )
        return content;
    }

    export default GetInTouch;