import React,  {  Component } from "react";
import '../../Styles/Home.css';
import Navbar from "../NavBar";
import Footer from "../Footer";
import DP from '../../Assets/Images/Akhil.png'
import AboutMe from '../AboutMe';
import Experience from '../Experience';
import Hobbies from '../Hobbies';
import GetInTouch from '../GetInTouch';
class Home extends Component {

    getContentFromHome = ()=>{
            return(<div>
<h1>Home</h1>
            </div>)
    }
    state={component:null};

    // componentDidMount(){
    //     this.setState({component: null})
    // }
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
        }else{
            this.setState({component: null})
        }

       
    }
render() {
    const navbarElementsFromHome=["Home", "About me", "Experience" , "Hobbies" , "Get in touch"];
    const FooterElementsFromHome=["Facebook", "Instagram", "LinkedIn" , "Twitter" ];
    return(
        <div className="app_start gradColor">
            <Navbar navbarElements={navbarElementsFromHome} loadComponent={this.loadComponent}/>
            <div className="main_conent">
            {/* <div className="container"> */}
            <img src={DP} alt="Logo" className="container rounded-circle dpDimension"/>
            <div className="container card_dimension">
                <div className="card bg-primary">
                    Akhil
                    {this.state.component ? this.state.component : this.getContentFromHome()}
                    
                    
                    {/* <Experience></Experience> */}
                </div>
                

            </div>
            {/* </div> */}
            
            </div>
            <Footer footerElements={FooterElementsFromHome}/>
        </div>
    );
}
}

export default Home;
