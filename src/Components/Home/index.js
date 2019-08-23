import React,  {  Component } from "react";
import '../../Styles/Home.css';
import Navbar from "../NavBar";
import Footer from "../Footer";
import DP from '../../Assets/Images/B5216.jpg'
import AboutMe from '../AboutMe';
import Experience from '../Experience';
import Hobbies from '../Hobbies';
import Downloads from '../Downloads';
import GetInTouch from '../GetInTouch';
class Home extends Component {

    getContentFromHome = ()=>{
            return(<div>
<h1>Home</h1>
            </div>)
    }
    state={component:null};
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
            <div className="col-md-12"><Navbar navbarElements={navbarElementsFromHome} loadComponent={this.loadComponent}/></div>
            <div className="col-md-4 sm-12">
                <div className="rotatingFrontCard">
             <div className="card-container">
                <div className="card">
                    <div className="front">
                        <div className="cover">
                            {/* <img src="https://www.clipartsgram.com/image/129556292-kyz84k3.jpg"/> */}
                            <div className="profilePicture">
                            {/* <img src={DP} alt="Logo" className="container rounded-circle dpDimension"/> */}
                        
                            </div>
                            </div>
                        <div className="user">
                            
                        <img src={DP} alt="Logo" className="container rounded-circle dpDimension"/>
                        </div>
                        {/* <iframe src="https://giphy.com/embed/WQ8jI9xsfbAeQ" width="480" height="225" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/29-WQ8jI9xsfbAeQ">via GIPHY</a></p> */}
                        <div className="content">
                            <div className="main">
                                <h3 className="name">Akhil Kumar</h3>
                                <p className="profession">Software Engineer</p>
                                {/* <p className="text-center">"I'm the new Sinatra, and since I made it here I can make it anywhere, yeah, they love me everywhere"</p> */}
                            </div>
                            {/* <div className="footer">
                                <i className="fa fa-mail-forward"></i> Auto Rotation
                            </div> */}
                        </div>
                    </div> 
                    <div className="back">
                        <div className="header">
                            <h5 className="motto">"To be or not to be, this is my awesome motto!"</h5>
                        </div>
                        <div className="content">
                            <div className="main">
                                <h4 className="text-center">Job Description</h4>
                                <p className="text-center">HTML5, CSS3, JavaScript, TypeScript, Angular2+, ReactJs</p>

                                <div className="stats-container">
                                    <div className="stats">
                                        <h4>235</h4>
                                        <p>
                                            Followers
                                        </p>
                                    </div>
                                    <div className="stats">
                                        <h4>114</h4>
                                        <p>
                                            Following
                                        </p>
                                    </div>
                                    <div className="stats">
                                        <h4>35</h4>
                                        <p>
                                            Projects
                                        </p>
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
                    {this.state.component ? this.state.component : this.getContentFromHome()}
            </div>
            </div>
            <div className="col-md-12"><Footer footerElements={FooterElementsFromHome}/></div>
        </div>

    );
}
}

export default Home;
