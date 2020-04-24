import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import '../../Styles/Download.css';
const Downloads=()=>{

  const[isBoxVisible,setIsBoxVisible]=useState(false);
    const profile = useRef(0);
    let status=false;
    let activeSubmenu=()=>{
      // setIsBoxVisible(true);
        // console.log("current use ref");
        // profile.current.height=200 +'px';

        profile.current.setAttribute("class", "item")
      //  console.log(profile.current) 
        // .style ={maxHeight: 25+'em'}
        //  color:"red";
        // .item .smenu{
        //     maxHeight: "25em";
        //   }
    }
    
    let content=(
        <div>
             {/* className="middle" */}
             <div className="row">
             <div className="col-sm-2">
             {/* <h1>akhil1</h1> */}
</div>
             <div className="col-sm-8 addIn">
             {/* <h1>akhil2</h1> */}
             <div className="menu">
             {/* className="item" */}
             {/* lassName={`${isBoxVisible ? "item" : ""}`}  */}
        <div  className="item" id='profile'  >
          <div  className="btn" ><i className="fa fa-user"></i>Profile</div>
          <div className={`${isBoxVisible ? "smenu" : "disNone"}`}  >
          {/* className="smenu" */}
            <div >Posts</div>
            <div >Picture</div>
          </div>
        </div>
        {/* className="item" */}
        <div  id="messages" ref={profile} onClick={activeSubmenu}>
          <div  className="btn"><i className="fa fa-envelope"></i>Messages</div>
          <div  className="smenu">
            <div >new</div>
            <div >Sent</div>
            <div >Spam</div>
          </div>
        </div>

        <div className="item" id="settings">
          <div  className="btn"><i className="fa fa-cog"></i>Settings</div>
          <div className="smenu">
            <div >Password</div>
            <div >Language</div>
          </div>
        </div>

        <div className="item">
          <div className="btn" ><i className="fa fa-sign-out-alt"></i>Logout</div>
        </div>
      </div>
</div>
<div className="col-sm-2">
{/* <h1>akhil3</h1> */}
</div>

             </div>



     
    </div>
        )
        return content;
    
}

export default Downloads;