import React, {useState, useEffect, useRef,useReducer} from 'react';
import '../../Styles/Download.css';
const submenuDone1=(props)=>{
  
    let compo=<div className="menu">
                    {(Object.keys(props.showSubmenuTempRedu)[0].includes(props.value2))? Object.values(sprops.howSubmenuTempRedu).map((values,index) => { return !values.includes('null') ?(
                    <div key={index+36}   ref={el=> menu.current[index+36]=el}  >
                        <div className="btnDownload" style={{background: 'tomato'}}
                        onClick={()=>{ setValueToCheck(values) 
                          setMenuIndex(index+36)
                          setVariableToCallThis(!variableToCallThis) }}
                        ><i className="fa fa-envelope"></i>{values}</div>
                        <div className="smenu">
                          {/* {compo} */}
                            {/* {submenuDone1(values)} */}
                            {/* {compoArr[1]} */}
                        </div>
                       
                    </div>
                    ):null } ) :
                    null
                    }
                </div>
  
  
  
  return compo
  }    
  
  export default submenuDone1;