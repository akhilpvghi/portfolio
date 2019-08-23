    import React, {Component} from 'react';
    import '../../Styles/Navbar.css';
    // import {Link} from 'react-router-dom';
    class Navbar extends Component{
        state={};

        constructor(){
            super()
        }

        componentDidMount(){

            this.setState({collapsed: true});
        }

         getLink(event){
            console.log("akhilll",event)
            this.props.loadComponent(event);
            // return "/About";

        }
        toggleControl=()=>{
            
            this.setState({collapsed: !this.state.collapsed});
        }
        render(props) {
            return(








<nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
  {/* <a className="navbar-brand" href="#">Navbar</a> */}
  <button onClick={()=>this.toggleControl()} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className={(this.state.collapsed  ? "collapse" : "") + ' navbar-collapse'} id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
     
      {this.props.navbarElements.map((link,index)=>{
                    return(
                        // <button className="nav-link bg-warning" onClick={()=>this.getLink(link)}>{link}</button>
                        <li className="nav-item" key={index} onClick={()=>this.getLink(link)}>
                        <a className="nav-link" >{link}</a>
                      </li>
                    )
                })}
      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
      {/* <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>





                /* <nav className="navbar navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Navbar w/ text</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
    {this.props.navbarElements.map((link,index)=>{
                    return(
                        // <button className="nav-link bg-warning" onClick={()=>this.getLink(link)}>{link}</button>
                        <li className="nav-item active" key={index} onClick={()=>this.getLink(link)}>
                        <a className="nav-link" >{link} <span className="sr-only">{link} </span></a>
                      </li>
                    )
                })}
    </ul>
  </div>
</nav> */


               
               
               
               
               
          
            );
        }
    }

    export default Navbar;
