    import React,  {  useReducer,useState,useEffect } from "react";
    import axios from 'axios';
    import AppModal from '../helper/AppModal';
    import '../../Styles/GetinTouch.css';
    import '../../Styles/Common.css';
    const GetInTouch =(props) =>{

    const[modalComponent,setModalComponent]=useState("gallery");
    const[childMessage,setChildMessage] =  useState("null");
    const[showModal,setShowModal] =  useState(false);
    const[infoDataFromObserval,setInfoDataFromObserval] =  useState([]);
    // const[showModalget,setshowModalget] =  useState(false);
    // showModalget
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
//   RegExp(^(([^<>()[].,;:s@"]+(.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$i);
//   RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i);
  
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
     
     }
     

     useEffect(() => {
         if(props.get_in_touch_info.length!=0)
        {setInfoDataFromObserval(props.get_in_touch_info) 
        console.log("setInfoDataFromObserval setInfoDataFromObserval",infoDataFromObserval)
        } 
    }, [props.get_in_touch_info])

    const handleChange = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setUserInput({[name]: newValue});
        
    }

    const showForm=() => {
        // setshowModalget(true);
        // setShowModal(true);
        let content =(props.get_in_touch_info.length!=0) ? props.get_in_touch_info.map((ele)=>{ return( <div className="col-md-12 addIn">
       <label className="fixedDisplay">{ele.label}:</label>
       <input className="adjustWidth" placeholder={ele.placeholde}  name="name" value={userInput.name} onChange ={handleChange} type="text"/>
       </div>) })
       : <h1>null</h1>;
    //    showModalget?  <AppModal  isClosedFromAppModal={isClosedFromAppModal} componentToLoad={modalComponent} messageToChild={childMessage}>
       
    //    </AppModal>:
       
       
       return content;
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
               if(!(error.name ===''&& error.mno ===''&& error.dob ===''&& error.email ==='')){
                // console.log("inside dave to profile ifff")   
                return;
               }
               showModalfn("null")
            // console.log("hello save");
            // console.log("selectedFile ")
            axios.defaults.baseURL = localStorage.getItem('mainURL');
            // userInput.SystemUrl;
            let url_system="/data/new?name="+userInput.name+"&mobNo="+userInput.mno+"&email="+userInput.email+"&dob="+userInput.dob;
            // console.log("Systemurl "+axios.defaults.baseURL)
            
            axios.post(url_system)
        .then((res)=>{
            // console.log("--------->"+res.data);
            if(res.data.includes('succe')){
                setChildMessage(res.data)   
            }

        } ).then((res)=>{
            // console.log("--------->2 "+res);
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
       
       </AppModal>:null} 


       <div className="row displayUnset">
       {    
           (infoDataFromObserval.length!=0) ? infoDataFromObserval.map((ele)=>{ return( <div className="col-md-12 addIn">
           <label className="fixedDisplay">{ele.label}:</label>
           <input className="adjustWidth" placeholder={ele.placeholde}  name="name" value={userInput.name} onChange ={handleChange} type="text"/>
           </div>) })
           : 
        //    showModal? 
           <AppModal  isClosedFromAppModal={isClosedFromAppModal} componentToLoad={"modalComponent"} messageToChild="processing">
       
           </AppModal>
        //    :null
        //    ()=>
        //    showForm()
           }
        
           {/* {props.get_in_touch_info.map((ele)=>{ ( <div className="col-md-12 addIn"><label className="fixedDisplay">{ele.label}:</label><input className="adjustWidth" placeholder={ele.placeholde}  name="name" value={userInput.name} onChange ={handleChange} type="text"/></div>)
    //  <p className="blinking addIner">{ele.label}</p> 
     : (<h1>Sorry</h1>)
           })} */}
                {/* <div className="col-md-12 addIn"><label className="fixedDisplay">CheckURL:</label><input className="adjustWidth" name="SystemUrl" value={userInput.SystemUrl} onChange ={handleChange} placeholder="PASTE URL" type="text"/></div>
                 */}
                {/* onMouseLeaves={onChangeHandler} */}
                {/* onFocus={onChangeHandler}  */}
                {/* onMouseOut */}
                {/* <button className="col-md-12 addIn" onClick={()=>checkProfileDataURL()}>SUBMIT</button> */}
                
                {/* <div className="col-md-12 addIn"><label className="fixedDisplay">Name:</label><input className="adjustWidth"  name="name" value={userInput.name} onChange ={handleChange} type="text"/></div>
                <p className="blinking addIner">{error.name} </p>
                
                <div className="col-md-12 addIn"><label className="fixedDisplay">DOB:</label><input className="adjustWidth"  name="dob" value={userInput.dob} onChange ={handleChange} placeholder="e.g. (YYYY/MM/DD)" type="text"/></div>
                <p className="addIner blinking">{error.dob} </p>
                <div className="col-md-12 addIn"><label className="fixedDisplay">Mobile No:</label><input className="adjustWidth"  name="mno" value={userInput.mno} onChange ={handleChange} placeholder="10 digit only" type="text"/></div>
                <p className="addIner blinking">{error.mno} </p>
                <div className="col-md-12 addIn"><label className="fixedDisplay">Email:</label><input className="adjustWidth" name="email" value={userInput.email} onChange ={handleChange} type="text"/></div>
                <p className="addIner blinking">{error.email} </p>
                <div className="col-md-12 addIn"><button className="fixedDisplay adjustWidth mt-15" onClick={()=>saveToProfileData(userInput)}>SUBMIT</button></div>
                */}
                <div className="col-md-12 addIn"><button className="fixedDisplay adjustWidth mt-15" onClick={()=>saveToProfileData(userInput)}>SUBMIT</button></div>
               
            </div>
            </div>
            
        )
        return content;
    }

    export default GetInTouch;

    