import React, {Component} from 'react';
import '../../Styles/Navbar.css';
class Navbar extends Component{
    render() {
        return(
            <div className="Navbar">{this.props.navbarElements.map((a)=>{
                return(<a href="\{a}">{a}</a>)
            })}</div>
        );
    }
}

export default Navbar;
