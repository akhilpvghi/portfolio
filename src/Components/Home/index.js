   import React,  {  useState, useEffect } from "react";
   import '../../Styles/Home.css';
   import '../../Styles/Common.css';
   import Navbar from "../NavBar";
   import Footer from "../Footer";
   import DP from '../../Assets/Images/B5216.jpg'
   import Phonelogo from '../../Assets/Images/sh_call_icon.png';
   import AboutMe from '../AboutMe';
   import Experience from '../Experience';
   import Hobbies from '../Hobbies';
   import AppModal from '../helper/AppModal';
   import Downloads from '../Downloads';
   import GetInTouch from '../GetInTouch';
   import axios from 'axios';
   import {Link} from 'react-router-dom';
   import {useHttp} from '../helper/APIs/InstaPhotos';
import { resolve } from "url";
import { reject } from "q";
   // import Slider  from '../helper/slider'
    const Home = () =>{
      const[followingData]=useHttp('https://api.instagram.com/v1/users/self/?access_token=7926815114.1d6d81e.0ccb90e8ef9948f79f51929e5754493e')
      const[InstaImg] = useHttp('https://api.instagram.com/v1/users/self/media/recent/?access_token=7926815114.1d6d81e.0ccb90e8ef9948f79f51929e5754493e');
      const[followersData] = useHttp('https://www.instagram.com/graphql/query/?query_hash=c76146de99bb02f6415203be841dd25a&variables=%7B%22id%22%3A%227926815114%22%2C%22include_reel%22%3Atrue%2C%22fetch_mutual%22%3Atrue%2C%22first%22%3A24%7D');
      const[ listOfFollowers,setListOfFollowers] =  useState([]);
      const[gallerySize,setGallerySze]=useState(null);
   const[modalComponent,setModalComponent]=useState(null);
const[following,setFollowing] =  useState(null);
const[followers,setFollowers] =  useState(null);
const[showModal,setShowModal] =  useState(false);
const[component,setComponent] =  useState(null);
const[instaData,setInstaData] =  useState(null);
const navbarElementsFromHome=["Home", "About me", "Experience" , "Hobbies" , "Get in touch", "Downloads"];
const FooterElementsFromHome=["Facebook", "Instagram", "LinkedIn" , "Twitter" ];

const loadComponent = (data_from_navbar) =>{
   console.log('akhilbvbvbb',data_from_navbar)
   if(data_from_navbar.includes("About")){
         setComponent(<AboutMe />)
   }else if(data_from_navbar.includes("Exper")){
         setComponent(<Experience />)
   }else if(data_from_navbar.includes("Get")){
      setComponent(<GetInTouch />)
   }else if(data_from_navbar.includes("Hobbi")){
      setComponent( <Hobbies />)   
   }else if(data_from_navbar.includes("Down")){
         setComponent(<Downloads />)
   }else{
         setComponent(null)
   }

   
}

const isClosedFromAppModal=(data_from_appModal)=>{
   if(data_from_appModal.includes("clos"))
   setShowModal(false);
}

const getContentFromHome = ()=>{
   return(<div>
<h1>Home</h1>
   </div>)
}


const showModalfn=(componentToLoad)=>{
   if(componentToLoad.includes("gall")){
      setModalComponent('gallery')
   }else if(componentToLoad.includes("tab")){
      setModalComponent('table')
   }
   setShowModal(true);
console.log("isshowmodal true")

}

useEffect(()=>{
     if(followingData.length!=0){
         setFollowing(followingData.counts.follows)
         setFollowers(followingData.counts.followed_by)
         
   }
         

},followingData.length)

useEffect(()=>{
   let InstaPhoto=[];
   InstaImg.map((element)=>{
      InstaPhoto.push(element.images.standard_resolution.url)
    })
    console.log("InstaPhotoInstaPhoto",InstaPhoto);
    if(InstaPhoto.length!=0){
      setGallerySze(InstaPhoto.length)
      localStorage.setItem("galleryImages",JSON.stringify(InstaPhoto));
    }
},[InstaImg.length])



useEffect(()=>{
   
      console.log("  dasadd",followersData.user);
      localStorage.setItem("instaFollowers",JSON.stringify(followersData));
      
},[followersData.length])



let content=( <div className="row marg0">
<div className="col-md-12 Appmodal padd0">
   {showModal? <AppModal  isClosedFromAppModal={isClosedFromAppModal} componentToLoad={modalComponent}></AppModal>:null}
</div>

<div className="col-md-12 padd0">
<Navbar   navbarElements={navbarElementsFromHome} loadComponent={loadComponent}/>
</div>
{/* <div className="bgImg">
<img src={the_movement_bg} alt="Logo" className="container rounded-circle dpDimension"/>
</div> */}
<div className="col-md-4 sm-12">

<div className="rotatingFrontCard">
<div className="card-container">
   <div className="card">
      <div className="front">
      {/* <i className="fa fa-sync" /> */}
      <i className="fa fa-sync"></i>
      {/* <i class="fa fa-sync"></i> */}
         <div className="cover" >
            {/* <img src="https://www.clipartsgram.com/image/129556292-kyz84k3.jpg"/> */}
            <div className="profilePicture" >
               {/* <img src={DP} alt="Logo" className="container rounded-circle dpDimension"/> */}
            </div>
         </div>
         <div className="user" >
            <img src={DP} alt="Logo" className="container rounded-circle dpDimension"/>
         </div>
         <div className="content">
            <div className="main">
               <h3 className="name">Akhil Kumar</h3>
               <p className="profession">Software Engineer</p>
            </div>
         </div>
      </div>
      <div className="back">
         <div className="header">
            <h5 className="motto"></h5>
         </div>
         <div className="content">
            <div className="main">
               <h4 className="text-center">Job Description</h4>
               <p className="text-center">HTML5, CSS3, JavaScript, TypeScript, Angular2+, ReactJs</p>
               <div className="stats-container">
                  <div className="stats cursrPointer" onClick={()=>{showModalfn('table')}}>
                     {(followers==null) ?<div className="spinner-border text-secondary" role="status">
</div> :
                     <h4>{followers}</h4>}
                     <p>   
                        Followers
                     </p>
                  </div>
                  <div className="stats cursrPointer">
                  {(following==null) ?<div className="spinner-border text-secondary" role="status">
</div> :
                     <h4>{following}</h4>}
                     <p>
                        Following
                     </p>
                  </div>
                  <div className="stats cursrPointer" onClick={()=>{showModalfn('gallery')}}>
                  {(gallerySize==null) ?<div className="spinner-border text-secondary" role="status">
</div> :
                     <h4>{gallerySize}</h4>}
                     <p>
                        Gallery
                     </p>
                  </div>
                  <div className="oneDiv row">
                  <div className="col-sm-1 md-3 MobLogoAdjust">
                        <img src={Phonelogo} alt="Logo" className="container icon"/>
                  </div>   
                  <div className="col-sm-11 md-9 mobNoMargin"> <h5 style={{display: 'unset'}}>+91-8799717085</h5></div>
                  </div>
               </div>
            </div>
         </div>
         <div className="footer">
            <div className="social-links text-center">
            <Link to="//facebook.com/adgrt" target="_blank"  className="facebook"   >
               <i className="fa fa-facebook fa-fw"></i>
</Link>
<Link to="//linkedin.com/in/akhil-kumar-91097566" target="_blank"  className="li-ic"   >
{/* https://www.linkedin.com/in/akhil-kumar-91097566 */}
  <i className="fa fa-linkedin fa-fw"> </i>
{/* </a> */}
</Link>
              {/* <a href="http://deepak646.blogspot.in/" className="google"><i className="fa fa-google-plus fa-fw"></i></a> */}
               <Link to="//twitter.com/akhilpvghi" target="_blank" className="twitter">
  <i className="fa fa-twitter fa-fw"> </i>
  </Link>
            </div>
         </div>
         
      </div>
   </div>
</div>
</div>
</div>
<div className="col-md-8 sm-12">
<div className="card bg-primary mainContent">
Akhil
{component ? component : getContentFromHome()}
</div>
</div>
<div className="col-md-12 pt-4">
<Footer footerElements={FooterElementsFromHome}/>
</div>
</div>)

return content;

   } 
   
   export default Home;
   
   
 

      

      

      
   
