   import React,  {  useState, useEffect } from "react";
   import '../../Styles/Home.css';
   import '../../Styles/Common.css';
   import Navbar from "../NavBar";
   import Footer from "../Footer";
   import DP from '../../Assets/Images/B5216.jpg';
   import Phonelogo from '../../Assets/Images/sh_call_icon.png';
   import AboutMe from '../AboutMe';
   import Games from '../Games';
   import Experience from '../Experience';
   import Hobbies from '../Hobbies';
   import AppModal from '../helper/AppModal';
   import Downloads from '../Downloads';
   import GetInTouch from '../GetInTouch';
   import useWindowWidth from '../helper/WindowWidth'
   import axios from 'axios';

   // // import { from } from 'rxjs';
   
   import {Link} from 'react-router-dom';
   import {useHttp} from '../helper/APIs/InstaPhotos';
   import {useObservable} from '../helper/APIs/ObservableHit';
   // import Slider  from '../helper/slider'
    const Home = () =>{
        const[followingData]=useHttp('https://api.instagram.com/v1/users/self/?access_token=7926815114.1d6d81e.0ccb90e8ef9948f79f51929e5754493e')
      const[InstaImg] = useHttp('https://api.instagram.com/v1/users/self/media/recent/?access_token=7926815114.1d6d81e.0ccb90e8ef9948f79f51929e5754493e');
      const[followersData] = useHttp('https://www.instagram.com/graphql/query/?query_hash=c76146de99bb02f6415203be841dd25a&variables=%7B%22id%22%3A%227926815114%22%2C%22include_reel%22%3Atrue%2C%22fetch_mutual%22%3Atrue%2C%22first%22%3A24%7D');
      // const[backendStatus] = useHttp('http://localhost:8080/checkStatus')
      // const[ listOfFollowers,setListOfFollowers] =  useState([]);
      const[gallerySize,setGallerySze]=useState(null);
      const[modalComponent,setModalComponent]=useState(null);
      const[componentName,setComponentName]=useState("Home");
      const[following,setFollowing] =  useState(null);
      const[followers,setFollowers] =  useState(null);
      const[showModal,setShowModal] =  useState(false);
      const[component,setComponent] =  useState(null);
      const[childMessage,setChildMessage] =  useState("null");
      let windowWidth=useWindowWidth()
      const[statusFromBackend,setStatusFromBackend] =  useState(false);
      const[isLoginForAdminIntiated,setIsLoginForAdminIntiated] =  useState(null);
      const[isAuthenticated,setIsAuthenticated] =  useState(false);
      const[textFieldObject,setTextFieldObject] =  useState({});
    const[columns,setColumns] =  useState({});
      // const[instaData,setInstaData] =  useState(null);
      const navbarElementsFromHome=["Home",  "Exam", ,"MCQ"];
      const FooterElementsFromHome=["Facebook", "Instagram", "LinkedIn" , "Twitter" ];
      
      const[observableData,getInTouchInfo,getDownloadMenuData,getDownloadSubmenuData,siteHandlerData]= useObservable();
      
      // let getBackendURL=()=>{
      //    console.log('backendCheckURLbackendCheckURL   ',backendCheckURL)
      //    if(backendCheckURL!='' && backendCheckURL!=undefined)
      //    return backendCheckURL;
      // }
      
      useEffect(()=>{
         // console.log("observable lengthhhh ",observableData[0])
         console.log("componentToLoadFromBackend ",siteHandlerData)
         
         // console.log("getInTouchInfo getInTouchInfo ",getInTouchInfo)
         // console.log("getDownloadMenuData getDownloadMenuData ",getDownloadMenuData)
         // console.log("getDownloadSubmenuData getDownloadSubmenuData ",getDownloadSubmenuData)
         // loadComponent(componentName)
         if(observableData[0])
         setStatusFromBackend(true);
         if(observableData[1]!=5){
            // console.log("bye bye bye  ",statusFromBackend);
         }
      },[observableData])


      
    
    useEffect(() => {
        let pair={};
        console.log("props.get_in_touch_info.length from about===>",getInTouchInfo);
        if(getInTouchInfo!==0)
       {
         getInTouchInfo.map((ele) => {
           pair[ele.textfield]=ele.label;
           setTextFieldObject({...textFieldObject,...pair}) //{textField1: label1#name, ...}
       })
   } 
   }, [getInTouchInfo])

      
      useEffect(()=>{
         if(componentName.includes("About")){
            setComponent(<AboutMe get_in_touch_info={getInTouchInfo}/>)
         }else if(componentName.includes("Exper")){
            setComponent(<Experience />)
         }else if(componentName.includes("Exam")){
            setComponent(<GetInTouch get_in_touch_info={getInTouchInfo}/>)
         }else if(componentName.includes("Hobbi")){
            setComponent( <Hobbies />)   
         }else if(componentName.includes("MCQ")){
            setComponent( <Games />)   
            // Bluff urlToPlay={siteHandlerData.gamePlayURL}
         }else if(componentName.includes("Download")){
            // if(getDownloadSubmenuData.length!=0) 3 commenting as it  doesnot loading download 
            setComponent(<Downloads getDownloadMenuData={getDownloadMenuData} getDownloadSubmenuData={getDownloadSubmenuData}/>)
}else{
// setComponentName("Home")
setComponent(null)
getContentFromHome()
}

      },[componentName])

         
      
      
      const loadComponent = (data_from_navbar) =>{
         // if(componentToLoadFromBackend=="" && componentToLoadFromBackend==undefined)
         setComponentName(data_from_navbar);
            // staticFnToLoadCompo(data_from_navbar);
            // console.log('akhilbvbvbb',data_from_navbar)
            
            
            
         }
         
         const isClosedFromAppModal=(data_from_appModal)=>{
            if(data_from_appModal.includes("clos"))
            setIsLoginForAdminIntiated(false);
            setIsAuthenticated(false);
            setShowModal(false);
         }
         
         

useEffect(() => {
   // effect
   if (siteHandlerData!=""  && component==null) {
      // staticFnToLoadCompo(componentToLoadFromBackend);
      setComponentName(siteHandlerData.componentToLoad)
   }
}, [siteHandlerData])

const getContentFromHome =()=>{
   return(
      <div className="col-md-8 sm-12">
      <div className="card bg-primary mainContent">
   <div>
      <h1 className="set_in_middle"></h1>
       </div>
       <h1 className="set_in_middle">This portal is to be designed for examination purpose.</h1>
       </div></div>
       ) 
}







   
   
      
   



useEffect(()=>{
   let InstaPhoto=[];
   InstaImg.map((element)=>{
      InstaPhoto.push(element.images.standard_resolution.url)
    })
   //  console.log("InstaPhotoInstaPhoto",InstaPhoto);
    if(InstaPhoto.length!=0){
      setGallerySze(InstaPhoto.length)
      localStorage.setItem("galleryImages",JSON.stringify(InstaPhoto));
    }
},[InstaImg.length])

const initiateLoginForAdminInHomeCompo=(messageFromNavbar)=>{
   console.log("message from home by ",messageFromNavbar);
   setIsLoginForAdminIntiated(true);
}



useEffect(()=>{
   
      // console.log("  dasadd",followersData.user);
      localStorage.setItem("instaFollowers",JSON.stringify(followersData));
      
},[followersData.length])

const funcToFindIsUserAuthenticated=(isAuthenticatedreplyFromAuthComp)=>{
   setIsAuthenticated(isAuthenticatedreplyFromAuthComp);
}


let content=( <div className="row marg0">
   {/* <useObservable {...spreadSheetData} /> */}
   {showModal? <AppModal  isClosedFromAppModal={isClosedFromAppModal} componentToLoad={modalComponent} messageToChild={childMessage}></AppModal>:null}


<div className="col-md-12 padd0">
<Navbar   navbarElements={navbarElementsFromHome} statusfomBackend={statusFromBackend} loadComponent={loadComponent} navBarNotificationForAdminLogin={initiateLoginForAdminInHomeCompo}/>
</div>
{/* <div className="bgImg">
<img src={the_movement_bg} alt="Logo" className="container rounded-circle dpDimension"/>
</div> */}
{/* funcToFindIsUserAuthenticated
isAuthenticatedreplyFromAuthComp */}
{isLoginForAdminIntiated && !isAuthenticated ? <AppModal  isAuthenticatedEventToAuth={funcToFindIsUserAuthenticated} isClosedFromAppModal={isClosedFromAppModal} componentToLoad="Auth" messageToChild="Admin Login"></AppModal>:null}
{isAuthenticated ? <AppModal  textFieldObjectcolumns={textFieldObject} isClosedFromAppModal={isClosedFromAppModal} componentToLoad="table" messageToChild="Data Records"></AppModal>:null}



{component ? component : getContentFromHome()}
</div>)  

return content;

   } 
   
   export default Home;
   
   
 

      

      

      
   
