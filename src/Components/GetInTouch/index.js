    import React,  {  useReducer,useState,useEffect } from "react";
    import axios from 'axios';
    import AppModal from '../helper/AppModal';
    import '../../Styles/GetinTouch.css';
    import '../../Styles/Common.css';
import { pairs } from "rxjs";
    const GetInTouch =(props) =>{

    const[modalComponent,setModalComponent]=useState("gallery");
    const[childMessage,setChildMessage] =  useState("null");
    const[showModal,setShowModal] =  useState(false);
    const[infoDataFromObserval,setInfoDataFromObserval] =  useState([]);
    const[textFieldObject,setTextFieldObject] =  useState({});
    const[errorFieldObject,setErrorFieldObject] =  useState({});
        const[regExObject,setRegExObject] =  useState({});
    // const[showModalget,setshowModalget] =  useState(false);
    // showModalget
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        textFieldObject
        // {
        //     name :'',
        //     dob :'',
        //     mno :'',

        
        //     email :'',
        //     SystemUrl:''
        // }
    );
    const validEmailRegex = 
// //   RegExp(^(([^<>()[].,;:s@"]+(.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$i);
// //   RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i);
  
  const validMnoRegex  = RegExp(/^1?([1-9])(\d{9})/);
  const [error, setError] = useReducer(
        (state, newState) => ({...state, ...newState}),
        textFieldObject
        
        // {
        //     name :'',
        //     dob :'',
        //     mno :'',
        //     email :'',
        //     SystemUrl:''
        // }
    );

    // let a=()=>{setChildMessage('Processing...')}

    const showModalfn=(componentToLoad) =>{
            setModalComponent('null')
            setChildMessage('Processing...')
            setShowModal(true);
     
     }
     

     useEffect(() => {
         let pair={};
         let tempError={};
         let tempRegEx={};
         if(props.get_in_touch_info.length!=0)
        {
            setInfoDataFromObserval(props.get_in_touch_info) 
        console.log("setInfoDataFromObserval setInfoDataFromObserval",infoDataFromObserval)
        props.get_in_touch_info.map((ele)=>{
            pair[ele.textfield]=" ";
            tempError[ele.textfield]=ele.errorMessage;
            tempRegEx[ele.textfield]=ele.regExp;
            // obj = {...obj, ...pair};
            setUserInput({[ele.textfield]: ""});
            setTextFieldObject({...textFieldObject,...pair})
            setErrorFieldObject({...errorFieldObject,...tempError})
            setRegExObject({...regExObject,...tempRegEx})
        })
    } 
    // console.log("TextFieldObject",textFieldObject);

    }, [props.get_in_touch_info])

    const handleChange = evt => {
        console.log("TextFieldObject",textFieldObject);
        const name = evt.target.name;
        const newValue = evt.target.value;
        console.log("name newValue ",name,newValue)
        setUserInput({[name]: newValue});
        
    }

    // const showForm=() => {
    //     // setshowModalget(true);
    //     // setShowModal(true);
    //     let content =(props.get_in_touch_info.length!=0) ? props.get_in_touch_info.map((ele)=>{ return( <div className="col-md-12 addIn">
    //    <label className="fixedDisplay">{ele.label}:</label>
    //    <input className="adjustWidth" placeholder={ele.placeholde}  name="name" value={userInput.name} onChange ={handleChange} type="text"/>
    //    </div>) })
    //    : <h1>null</h1>;
    // //    showModalget?  <AppModal  isClosedFromAppModal={isClosedFromAppModal} componentToLoad={modalComponent} messageToChild={childMessage}>
       
    // //    </AppModal>:
       
       
    //    return content;
    // }

    const isClosedFromAppModal=(data_from_appModal)=>{
        if(data_from_appModal.includes("clos"))
        setShowModal(false);
     }

        let saveToProfileData=(userInput)=>{
            let url_system="";
            for (var property in textFieldObject) {
                // if (textFieldObject.hasOwnProperty(property)) {
                    console.log("property property property",userInput[property]," errorFieldObject[property] ", errorFieldObject[property],
                    "regExObject[property] ",regExObject[property]);

                    // error[property] = userInput[property].length < 5 ?  errorFieldObject[property]: '';
                    // error.email = validEmailRegex.test(userInput.email) ? '' : 'Email is not valid!';

                    // const abh =RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i);
                    // const abh =RegExp();
                    
                    error[property] = RegExp(regExObject[property],'g').test(userInput[property]) ? '':errorFieldObject[property] ;
                    
                     url_system+=property+"="+userInput[property]+"&";// Do things here
                    // }
                }
                setError(error);
                if(!(error[property] ==='')){
                    console.log("inside dave to profile ifff")   
                    return;
                }
                 showModalfn("null")
                
            // textFieldObject.map((ele)=>{
            // })
            
            //   error.name = userInput.name.length < 5 ? 'Name can not be blank!' : '';
            //   error.mno = validMnoRegex.test(userInput.mno)   ? '':'mobile must be 10 digit !' ;
            //   error.dob = userInput.dob.charAt(4) !== '/'  ? 'DOB must be in yyyy/mm/dd format' : '';
            //   error.email = validEmailRegex.test(userInput.email) ? '' : 'Email is not valid!';
            // console.log("hello save");
            // console.log("selectedFile ")
            axios.defaults.baseURL = localStorage.getItem('mainURL');
            url_system="/data/new?"+url_system;
            // userInput.SystemUrl;
            
            // console.log("Systemurl "+axios.defaults.baseURL)
            
            axios.post(url_system)
        .then((res)=>{
            console.log("---------> url_system "+url_system);
            if(res.data.includes('succe')){
                setChildMessage(res.data)   
            }

        } ).catch((err)=>{console.log(' error from get in touch',err);
        // if(err.response.status>250){
            setChildMessage('Error '+' Try Again...') 
            // checkForData(userInput.mno);
            // +err.response.status
        // }
        
    })
        }
        
        // let checkForData =(mobNo)=>{
        //     axios.get("/dfpByMobNo/"+mobNo).then((res)=>{
        //         console.log("checkForData---->",res.data);
        //         if(!res.data){
        //             setChildMessage('Error '+' Try Again...') 
        //         }
        //     }).catch((err)=>{
        //         setChildMessage('Error '+' Try Again...') 
        //     })
        // }




        let content =(
            
                <div className="col-md-12  padd0">
       {showModal? <AppModal  isClosedFromAppModal={isClosedFromAppModal} componentToLoad={modalComponent} messageToChild={childMessage}>
       
       </AppModal>:null} 


       <div className="row displayUnset">
       {    
           (infoDataFromObserval.length!=0) ? infoDataFromObserval.map((ele,key)=>{ return( <div key={key} className="col-md-12 addIn">
           <label className="fixedDisplay">{ele.label}:</label>
           <input className="adjustWidth" placeholder={ele.placeholder}  name={ele.textfield} value={userInput.textfield} onChange ={handleChange} type="text"/>
           <p className="addIner blinking">{error[ele.textfield]} </p>
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

    