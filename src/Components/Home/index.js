   import React,  {  Component } from "react";
   import '../../Styles/Home.css';
   import '../../Styles/Common.css';
   import Navbar from "../NavBar";
   import Footer from "../Footer";
   import DP from '../../Assets/Images/B5216.jpg'
   import Phonelogo from '../../Assets/Images/sh_call_icon.png';
   import the_movement_bg from '../../Assets/Images/the_movement_bg.png';
   import AboutMe from '../AboutMe';
   import Experience from '../Experience';
   import Hobbies from '../Hobbies';
   import AppModal from '../helper/AppModal';
   import Downloads from '../Downloads';
   import GetInTouch from '../GetInTouch';
   import axios from 'axios';
   // import Slider  from '../helper/slider'
   class Home extends Component {

      state={
         following: "",
         followers: "",
         showModal: false
      }

      componentDidMount=()=>{
         axios.get('https://api.instagram.com/v1/users/self/?access_token=7926815114.1d6d81e.0ccb90e8ef9948f79f51929e5754493e')
         .then((res)=>{
               console.log('insta res')
               console.log(res.data)
         this.setState({
               followers: res.data.data.counts.followed_by,
               following : res.data.data.counts.follows
         })
         }
               ).catch((err)=>{console.log('insta error',err)})
      }

      getContentFromHome = ()=>{
               return(<div>
   <h1>Home</h1>
               </div>)
      }
      state={component:null,
         showModal: false};

      showModalfn=()=>{
         this.setState({showModal:true});
         console.log("isshowmodal true",this.state.showModal)
         
      }

      isClosedFromAppModal=(data_from_appModal)=>{
         if(data_from_appModal.includes("clos"))
         this.setState({showModal: false})
      }

      loadComponent = (data_from_navbar) =>{
         console.log('akhilbvbvbb',data_from_navbar)
         if(data_from_navbar.includes("About")){
               this.setState({component: <AboutMe />})
         }else if(data_from_navbar.includes("Exper")){
               this.setState({component: <Experience />}) 
         }else if(data_from_navbar.includes("Get")){
               this.setState({component: <GetInTouch />}) 
         }else if(data_from_navbar.includes("Hobbi")){
               this.setState({component: <Hobbies />}) 
         }else if(data_from_navbar.includes("Down")){
               this.setState({component: <Downloads />}) 
         }else{
               this.setState({component: null})
         }

         
      }
   render() {
      const navbarElementsFromHome=["Home", "About me", "Experience" , "Hobbies" , "Get in touch", "Downloads"];
      const FooterElementsFromHome=["Facebook", "Instagram", "LinkedIn" , "Twitter" ];
      return(
      
      

         <div className="row">
            <div className="col-md-12 Appmodal">
               {this.state.showModal? <AppModal isClosedFromAppModal={this.isClosedFromAppModal}></AppModal>:null}
            </div>

      <div className="col-md-12">
         <Navbar navbarElements={navbarElementsFromHome} loadComponent={this.loadComponent}/>
      </div>
      {/* <div className="bgImg">
         <img src={the_movement_bg} alt="Logo" className="container rounded-circle dpDimension"/>
      </div> */}
      <div className="col-md-4 sm-12">
      
         <div className="rotatingFrontCard" onClick={()=>{this.showModalfn()}}>
            <div className="card-container">
               <div className="card">
                  <div className="front">
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
                              <div className="stats">
                                 {(this.state.followers==null) ?<div className="spinner-border text-secondary" role="status">
   </div> :
                                 <h4>{this.state.followers}</h4>}
                                 <p>   
                                    Followers
                                 </p>
                              </div>
                              <div className="stats">
                              {(this.state.following==null) ?<div className="spinner-border text-secondary" role="status">
   </div> :
                                 <h4>{this.state.following}</h4>}
                                 <p>
                                    Following
                                 </p>
                              </div>
                              <div className="stats">
                                 <h4>5</h4>
                                 <p>
                                    Projects
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
                           <a href="http://deepak646.blogspot.in/" className="facebook"><i className="fa fa-facebook fa-fw"></i></a>
                           <a href="http://deepak646.blogspot.in/" className="google"><i className="fa fa-google-plus fa-fw"></i></a>
                           <a href="http://deepak646.blogspot.in/" className="twitter"><i className="fa fa-twitter fa-fw"></i></a>
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
            {/* <Slider></Slider> */}
            {this.state.component ? this.state.component : this.getContentFromHome()}
         </div>
      </div>
      <div className="col-md-12">
         <Footer footerElements={FooterElementsFromHome}/>
      </div>
   </div>
      );
   }
   }

   export default Home;
