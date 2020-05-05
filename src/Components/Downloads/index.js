
import React, {useState, useEffect, useRef,useReducer} from 'react';
import '../../Styles/Download.css';
import AppModal from '../helper/AppModal';



const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};


let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
      const Downloads=(props)=>{
        
        const[isBoxVisible,setIsBoxVisible]=useState(true);
        const [valueToCheck, setValueToCheck]=useState("");
        const [menuIndex, setMenuIndex]=useState(null);
        const [menuCount, setMenuCount]=useState(2);
        const [manageState, setManageState] = useState([]);
        const [changedMenu, setChangedMenu] = useState({});
        const [randomColor, setRandomColor] = useState({color1: 4,
          color2:1});
          const [pageNoStatus, setPageNoStatus] = useState(0);
          const [atmenu, setAtmenu] = useState(true);
          const menu = useRef([]);
          let insert={};
    const menu2 = useRef([]);
    // const temp=[];
    let temp=[]
    
    

    useEffect(() => {
      if(props.getDownloadMenuData[0]!=undefined)
      setChangedMenu(props.getDownloadMenuData[0])
    }, [props.getDownloadMenuData[0]])


    useEffect((e) => {
      // console.log("useEfeect called valueToCheck",changedMenu,props.getDownloadMenuData[0],valueToCheck,props.getDownloadSubmenuData)
      if(menu.current[menuIndex]!=undefined && valueToCheck!="null"){
        props.getDownloadSubmenuData.map((ele,indexed)=>{
          if(Object.keys(props.getDownloadSubmenuData[indexed])[0].includes(valueToCheck)){
            setAtmenu(false);
            const returnedTarget = Object.assign(insert, props.getDownloadSubmenuData[indexed]);
            setChangedMenu(returnedTarget)
            setRandomColor({color1:getRandomInt(colorArray.length),
              color2:getRandomInt(colorArray.length)})
              setPageNoStatus(pageNoStatus+1)
              console.log("props.getDownloadSubmenuData[indexed] valueToCheck setChangedMenu",props.getDownloadSubmenuData[indexed],valueToCheck,changedMenu)
              
            }
            // else if(props.getDownloadSubmenuData[indexed].length<1){

            //     setMenuCount(menuCount+1)
            // }
            // else{
            //   // if(changedMenu.length!=0 &&)
            // }
          })
          isBoxVisible ? menu.current[menuIndex].setAttribute("class", "item") : menu.current[menuIndex].setAttribute("class", "")
          setIsBoxVisible(!isBoxVisible)
          if(getModifiedString(valueToCheck)[1]!=undefined)
          window.open(getModifiedString(valueToCheck)[1], '_blank');
        }
      
    }, [valueToCheck])

    // #removed changedMenu from useEffect array as it was calling recursively whenever we two submenu of same name found


    let getModifiedString=(convertString)=>{
      let convertedString=convertString.split("_urlLink_")
      return convertedString
    }

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    const manageBackButton=()=>{
      temp = manageState.filter((v, i, a) => a.indexOf(v) === i);
      setMenuCount(menuCount+1);
      console.log("temp menucount",temp,menuCount)
      if(temp[temp.length-menuCount]!="" && temp[temp.length-menuCount]!=undefined){

        setValueToCheck(temp[temp.length-menuCount])
        setMenuIndex(temp.length-menuCount)
      }else{
        setChangedMenu(props.getDownloadMenuData[0])
        setValueToCheck("null")
        setManageState([]);
        temp=[];
        setMenuCount(2);
        setAtmenu(true);
      }
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
                      <div className={`btnDownload ${getModifiedString(value)[1]!=undefined ? "cursrPointer" : ""}`} style={{background: `linear-gradient(to right, ${colorArray[randomColor.color1] } , ${colorArray[randomColor.color2]})`}} onClick={
                        ()=> {
                        setValueToCheck(value)
                          setMenuIndex(index) 
                          setManageState(hello=>[...hello,value])
                        }}
                        ><i  className={`${ getModifiedString(value)[1]!=undefined ? "fa fa-hdd-o": "fa fa-angle-double-right" }`}></i>{getModifiedString(value)[0]}</div>
                       
                      {/* <div className="smenu">
                      </div> */}
                      </div>

                  ):null}
                  
                  ) 
                  :
                  <AppModal componentToLoad={ "modalComponent"} messageToChild="processing">
                  </AppModal>
                  }

{ atmenu!==true?
<div  >
                      <div className={`btnDownload`} style={{background: `linear-gradient(to right, ${colorArray[4] } , ${colorArray[0]})`}}   onClick={
                    
                      ()=> {
                          manageBackButton()
                        }}
                        ><i  className={`fa fa-angle-double-left`}></i>Back</div>
                  </div> : null}

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