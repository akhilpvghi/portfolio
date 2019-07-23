import React, {Component} from 'react';
import '../../Styles/Footer.css';
class Footer extends Component{
    render() {
        return(
            <div className="Footer">{this.props.footerElements.map((a,index)=>{
                return(<a key={index}>{a}</a>)
            })}</div>
        );
    }
}

export default Footer;
