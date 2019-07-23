    import React, {Component} from 'react';
    import '../../Styles/Navbar.css';
    import {Link} from 'react-router-dom';
    class Navbar extends Component{

         getLink(event){
            console.log("akhilll",event)
            this.props.loadComponent(event);
            // return "/About";

        }
        render(props) {
            return(
                <nav className=" Navbar navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
                    <div className="container">

                    {this.props.navbarElements.map((link,index)=>{
                    return(
                        <button className="nav-link bg-warning" onClick={()=>this.getLink(link)}>{link}</button>
                        // <Link to={this.getLink(index)} className="nav-link" key={index}><i className="fas fa-home"/>{link}</Link>
                    // <a href="/" className="navbar-brand">{a}</a>
                    )
                })}
                    </div>
                </nav>
            );
        }
    }

    export default Navbar;
