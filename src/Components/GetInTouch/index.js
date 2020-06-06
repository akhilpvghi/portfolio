    import React,  {  useReducer,useState,useEffect, useRef } from "react";
    import axios from 'axios';
    import AppModal from '../helper/AppModal';
    import '../../Styles/GetinTouch.css';
    import '../../Styles/Common.css';
    import Select from "react-select";
import { pairs } from "rxjs";
import { element } from "prop-types";
    const GetInTouch =(props) =>{

    const[modalComponent,setModalComponent]=useState("gallery");
    const[childMessage,setChildMessage] =  useState("null");
    const[showModal,setShowModal] =  useState(false);
    const[infoDataFromObserval,setInfoDataFromObserval] =  useState([]);
    const[textFieldObject,setTextFieldObject] =  useState({});
    const[textFieldObjectForOptions,setTextFieldObjectForOptions] =  useState({});
    const[errorFieldObject,setErrorFieldObject] =  useState({});
    // const[multiValue,setMultiValue] =  useState([]);
    // const[multiSelectHeight,setMultiSelectHeight] =  useState(30);
    // const[multiSelectIsCLose,setMultiSelectIsCLose] =  useState(true);
    // const MultiSelectRef = useRef([]);
        const[regExObject,setRegExObject] =  useState({});
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        textFieldObject
    );
    
  const [error, setError] = useReducer(
        (state, newState) => ({...state, ...newState}),
        textFieldObject
    );

    const [optionTag, setOptionTag] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {}
    );

    // const[filterOptions,setFilterOptions] =  useState([
    //     { value: "foo", label: "Foo" },
    //     { value: "bar", label: "Bar" },
    //     { value: "bat", label: "Bat" }
    //   ]);

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
            pair[ele.textfield]=ele.label;
            tempError[ele.textfield]=ele.errorMessage;
            tempRegEx[ele.textfield]=ele.regExp;
            // obj = {...obj, ...pair};
            setUserInput({[ele.textfield]: ""});
            setTextFieldObject({...textFieldObject,...pair}) //{textField1: label1#name, ...}
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

    // let isClose = true;
    

  
    const isClosedFromAppModal=(data_from_appModal)=>{
        if(data_from_appModal.includes("clos"))
        setShowModal(false);
     }

     const handleMultiChange=(option,mesg)=> {
        // let evalString="";
         console.log("option     ",option,mesg);
         setOptionTag({[mesg]:option})
        // setTimeout(()=>{
        //     Object.entries(optionTag).map(([key,value])=>{
        //         if(typeof value!= 'object')
        //         {
        //             value.map((element) => {
        //                 evalString+=element+','; 
        //             })
        //         }else{
        //             evalString=value.value;
        //         }

        //         setUserInput({[key]:evalString})
        //     }) 
        // },0)


        //  setUserInput({[mesg]:option})
        //  setMultiValue(option);
      }

//       callfntry(){
//         let evalString="";
//         optionTag.mesg.map((ele) =>
//     {
//        evalString+=evalString+',';
//    })
//    setUserInput({[mesg]:evalString});
//       }
let handleChangeForOutput =(options,textfield)=>{
    let evalString="";
    // Object.entries(optionTag).map(([key,value])=>{
        // console.log("typeof options value",options.length);
        if(options!=null)
        if(options.length!=undefined)
        {
            options.map((element) => {
                console.log("aklllalallalal=====> ",element);
                evalString+=element.value+','; 
            })
            
        // setUserInput({[key]:evalString})
        }else{
            evalString=options.value;
            
        }
        setUserInput({[textfield]:evalString})
    // }) 

}
     const callForSelectTag=(element)=>{

         let options=element.placeholder.split('_option_');
         let arrObj=[];
         let placeholder=""
         options.map((item,index)=>{
             if(index!==0){

                 let obj1={};
                 obj1={value:item,label:item};
                 arrObj.push(obj1);
             }else{
                placeholder=item;
             }
         });
         let isMulti = element.type.includes("multiple"); 
         return (<div className="col-md-12 addIn">
        <Select
        className="adjustWidthForMultiSelect"
          name={element.textfield}
          placeholder={placeholder}
          value={optionTag.textfield}
          options={arrObj}
          onChange={(options)=>{
              handleMultiChange(options,element.textfield)
            handleChangeForOutput(options,element.textfield)
          }
    }
          isMulti={isMulti}
          isSearchable={isMulti}
        />
        <p className="addIner blinking">{error[element.textfield]} </p>
        </div> );
         
     }

        let saveToProfileData=(userInput)=>{
            let url_system="";
            
            console.log("typeof object == 'object'   ",optionTag);
//                     let evalString="";
//                     Object.entries(optionTag).map(([key,value])=>{
//                         setUserInput({[key]:})
//                     })
//                     // optionTag   
//         optionTag.mesg.map((ele) =>
//     {
//        evalString+=evalString+',';
//    })
//    setUserInput({[mesg]:evalString});



// setTimeout(()=>{
          for (var property in textFieldObject) {
                    error[property] = RegExp(regExObject[property],'g').test(userInput[property]) ? '':errorFieldObject[property] ;
                   console.log("akkkllllll ----------->",typeof userInput[property]);
                    // if(typeof userInput[property] === 'object'){
                        // console.log("jsonnnnnn---->",JSON.stringify(userInput[property]));
                        // setUserInput(JSON.stringify(userInput[property]));
                    // }
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
            console.log("urllll to hit",url_system);
            axios.post(url_system)
        .then((res)=>{
            if(res.data.includes('succe')){
                setChildMessage(res.data)   
            }

        } ).catch((err)=>{console.log(' error from get in touch',err);
            setChildMessage('Error '+' Try Again...') 
        
    })
    
// },0)

      
        }

        let content =(
            
                <div className="col-md-12  padd0">
       {showModal? <AppModal  isClosedFromAppModal={isClosedFromAppModal} componentToLoad={modalComponent} messageToChild={childMessage}>
       
       </AppModal>:null} 


       <div className="row displayUnset">
       {    
           

           (infoDataFromObserval.length!==0) ? infoDataFromObserval.map((ele,key)=>{
               // eslint-disable-next-line no-lone-blocks
               {
                  return (!ele.type.includes('option')) ?
                       <div key={key} className="col-md-12 addIn">
           <label className="fixedDisplay">{ele.label}:</label>
           <input className="adjustWidth" placeholder={ele.placeholder}  name={ele.textfield} value={userInput.textfield} onChange ={handleChange} type="text"/>
           <p className="addIner blinking">{error[ele.textfield]} </p> 
           </div> 
           : callForSelectTag(ele)} 
            }): 
           <AppModal  componentToLoad={"modalComponent"} messageToChild="processing">
       
           </AppModal>
           }
        
                <div className="col-md-12 addIn"><button className="fixedDisplay adjustWidth mt-15" onClick={()=>saveToProfileData(userInput)}>SUBMIT</button></div>
               
            </div>
            </div>
            
        )
        return content;
    }

    export default GetInTouch;

    