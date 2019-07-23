import React, {Component} from 'react';
import '../../Styles/Footer.css';
class Footer extends Component{
    render() {
        return(
            <div className="Footer">{this.props.footerElements.map((a)=>{
                return(<a>{a}</a>)
            })}</div>
        );
    }
}

export default Footer;
