import React,  {  Component } from "react";
import '../../Styles/Common.css';
import Navbar from "../NavBar";
import Footer from "../Footer";
import DP from '../../Assets/Images/Akhil.png'
class Home extends Component {
render() {
    const navbarElementsFromHome=["Home", "About me", "Experience" , "Hobbies" , "Get in touch"];
    const FooterElementsFromHome=["Facebook", "Instagram", "LinkedIn" , "Twitter" ];
    return(
        <div className="app_start">
            <Navbar navbarElements={navbarElementsFromHome}/>
            <div className="main_conent">
            <img src={DP} alt="Logo" />
            </div>
            <Footer footerElements={FooterElementsFromHome}/>
        </div>
    );
}
}

export default Home;
