
import React, {useState, useEffect, useRef,useReducer} from 'react';
import '../../Styles/Download.css';
import AppModal from '../helper/AppModal';
const Downloads=(props)=>{

  const[isBoxVisible,setIsBoxVisible]=useState(true);
  
  const [variableToCallThis, setVariableToCallThis]=useState(false);
  const [valueToCheck, setValueToCheck]=useState("");
  const [menuIndex, setMenuIndex]=useState(null);
  const [menu2Index, setMenu2Index]=useState(null);
  const [showSubmenuTempRedu, setShowSubmenuTempRedu] = useState({"":""});
  const [changedMenu, setChangedMenu] = useState({});
  const [convertedString, setConvertedString] = useState([]);
  // convertedString


    const menu = useRef([]);
    const menu2 = useRef([]);

    useEffect(() => {
      if(props.getDownloadMenuData[0]!=undefined)
      setChangedMenu(props.getDownloadMenuData[0])
    }, [props.getDownloadMenuData[0]])
    
    useEffect((e) => {
      
      // setChangedMenu();
      console.log("useEfeect called valueToCheck",changedMenu,props.getDownloadMenuData[0],valueToCheck,props.getDownloadSubmenuData)
      if(menu.current[menuIndex]!=undefined ){
        // && props.getDownloadSubmenuData!=undefined
        props.getDownloadSubmenuData.map((ele,indexed)=>{
          if(Object.keys(props.getDownloadSubmenuData[indexed])[0].includes(valueToCheck)){
            // setShowSubmenuTempRedu(props.getDownloadSubmenuData[indexed])
            setChangedMenu(props.getDownloadSubmenuData[indexed])
            console.log("props.getDownloadSubmenuData[indexed] valueToCheck setChangedMenu",props.getDownloadSubmenuData[indexed],valueToCheck,changedMenu)
            }
          })
          // menu.current[menuIndex].setAttribute("class", "item")
          // (showSubmenuTempRedu.length!=0) ? setChangedMenu(showSubmenuTempRedu) :setChangedMenu(null) ;
          // if(menu2.current[menuIndex]!=undefined)
          // menu2.current[menu2Index].setAttribute("class", "item2")
          isBoxVisible ? menu.current[menuIndex].setAttribute("class", "item") : menu.current[menuIndex].setAttribute("class", "")
          setIsBoxVisible(!isBoxVisible)
          if(getModifiedString(valueToCheck)[1]!=undefined)
          window.open(getModifiedString(valueToCheck)[1], '_blank');
        } 
        
      
    }, [valueToCheck,changedMenu,props.getDownloadMenuData[0]])


    let getModifiedString=(convertString)=>{
      let convertedString=convertString.split("_urlLink_")
      return convertedString
    }

    let content=(
      <div>
      <div className="row">
          <div className="col-sm-2">
          </div>
          <div className="col-sm-8 addIn">
              <div className="menu">
                
                  {(props.getDownloadMenuData[0])? Object.entries(changedMenu).map(([key,value],index) => { return !getModifiedString(value)[0].includes('null') ?(
                  <div key={index}   ref={el=> menu.current[index]=el} >
                      <div className={`btnDownload ${getModifiedString(value)[1]!=undefined ? "cursrPointer" : ""}`} onClick={
                        ()=> {
                        setValueToCheck(value)
                          setMenuIndex(index) 
                        }}
                        ><i  className={`${getModifiedString(value)[1]!=undefined ? "fa fa-hdd-o": "fa fa-angle-double-right" }`}></i>{getModifiedString(value)[0]}</div>
                       
                      <div className="smenu">
                      </div>
                  </div>
                  ):null} ) :
                  <AppModal componentToLoad={ "modalComponent"} messageToChild="processing">
                  </AppModal>
                  }
              </div>
          </div>
          <div className="col-sm-2">
          </div>
      </div>
  </div>
        )
        return content;
    
}

export default Downloads;