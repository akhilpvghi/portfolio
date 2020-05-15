    import React,  {  useReducer,useState,useEffect } from "react";
    import axios from 'axios';
    import AppModal from '../helper/AppModal';
    import '../../Styles/GetinTouch.css';
    import '../../Styles/Common.css';
import { pairs } from "rxjs";
import { element } from "prop-types";
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
    }, [props.get_in_touch_info])

    const handleChange = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
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

     const callForSelectTag=(element)=>{
 let options=element.placeholder.split('_option_');
        return (
            <div className="col-md-12 addIn">
            <select className="adjustWidth" name={element.textfield} onChange ={handleChange}>
            {options.map((item,index)=> 
      (index==0)?<option  value="" selected disabled hidden >{item}</option>:<option  value={userInput.textfield} >{item}</option>
)}
            </select>
            <p className="addIner blinking">{error[element.textfield]} </p>
            </div>
        )
     }

        let saveToProfileData=(userInput)=>{
            let url_system="";
            for (var property in textFieldObject) {
                    error[property] = RegExp(regExObject[property],'g').test(userInput[property]) ? '':errorFieldObject[property] ;
                    
                     url_system+=property+"="+userInput[property]+"&";// Do things here
                    // }
                }

                setError(error);
                for (var property in textFieldObject) {
                if(!(error[property] ==='')){ 
                    return;
                }
            }
                 showModalfn("null")
            axios.defaults.baseURL = localStorage.getItem('mainURL');
            url_system="/data/new?"+url_system;
            
            axios.post(url_system)
        .then((res)=>{
            if(res.data.includes('succe')){
                setChildMessage(res.data)   
            }

        } ).catch((err)=>{console.log(' error from get in touch',err);
            setChildMessage('Error '+' Try Again...') 
        
    })
        }

        let content =(
            
                <div className="col-md-12  padd0">
       {showModal? <AppModal  isClosedFromAppModal={isClosedFromAppModal} componentToLoad={modalComponent} messageToChild={childMessage}>
       
       </AppModal>:null} 


       <div className="row displayUnset">
       {    
           

           (infoDataFromObserval.length!=0) ? infoDataFromObserval.map((ele,key)=>{
               {
                  return (ele.type!='options')?
                       <div key={key} className="col-md-12 addIn">
           <label className="fixedDisplay">{ele.label}:</label>
           <input className="adjustWidth" placeholder={ele.placeholder}  name={ele.textfield} value={userInput.textfield} onChange ={handleChange} type="text"/>
           <p className="addIner blinking">{error[ele.textfield]} </p> 
           </div> 
           : callForSelectTag(ele)} 
            }): 
           <AppModal  componentToLoad={"modalComponent"} messageToChild="processing">
       
           </AppModal>
        //    :null
        //    ()=>
        //    showForm()
           }
        
                <div className="col-md-12 addIn"><button className="fixedDisplay adjustWidth mt-15" onClick={()=>saveToProfileData(userInput)}>SUBMIT</button></div>
               
            </div>
            </div>
            
        )
        return content;
    }

    export default GetInTouch;

    