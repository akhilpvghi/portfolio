      import React, {Component,useState,useEffect} from 'react';
      import '../../Styles/Navbar.css';
      import useWindowWidth from '../helper/WindowWidth'
      // import {Link} from 'react-router-dom';

      const Navbar=(props)=>{
        const[date_n_time,setDate_n_time]=useState("")
        const[collapsed,SetCollapsed]=useState(true);
        let windowWidth=useWindowWidth()
        const tick=()=>{
          setDate_n_time(new Date().toLocaleString())
          // this.setState({date_n_time : new Date().toLocaleString()})
        }

      const getLink=(event)=>{
          console.log("akhilll",event)
          props.loadComponent(event);
          // this.setState({collapsed: true});
          SetCollapsed(true)
          // return "/About";

      }

      const toggleControl=()=>{
              SetCollapsed(!collapsed)
        // this.setState({collapsed: !this.state.collapsed});
    }

    useEffect(()=>{

      // setWindowWidth(windowWidth)
      if(windowWidth==undefined){
        windowWidth=windowWidth+1
      }
      console.log("window.innerWidthwindow.innerWidth",windowWidth)
    }
    
    ,[windowWidth])


        useEffect(()=>{
          let intervalID=setInterval(()=>tick(),1000)
          return ()=>{
            clearInterval(intervalID);
          }
        }
        
        ,[])

        let content=(<nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <button onClick={()=>toggleControl()} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          
          <span className="navbar-toggler-icon"></span>
        </button>
      {windowWidth<987?<div className="date_n_time"> {date_n_time}</div>:null} 
        <div className={(collapsed  ? "collapse" : "") + ' navbar-collapse'} id="navbarSupportedContent">
          <ul className="navbar-nav">
          
            {props.navbarElements.map((link,index)=>{
                          return(
                              // <button className="nav-link bg-warning" onClick={()=>this.getLink(link)}>{link}</button>
                              <li className="nav-item" key={index} onClick={()=>getLink(link)}>
                              <a className="nav-link" >{link}</a>
                            </li>
                          )
                      })}
          </ul>
          {windowWidth>987?<div className="date_n_time"> {date_n_time}</div>:null}
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      )
      return content
      }

      export default Navbar;
