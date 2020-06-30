import React, {useState} from 'react';
import '../../Styles/Experience.css';
// import kvOld from  '../../Assets/Images/kvOld';
import kv_new from  '../../Assets/Images/kv_new.jpg';
// import quicus from  '../../Assets/Images/quicus.jpg';
import smartbox from  '../../Assets/Images/smartbox.jpg';
import wctm from  '../../Assets/Images/wctm.jpg';
import experince_data from  '../../Assets/experience';
//import data from "./data"

    
    
// class Experience extends Component{

//     render(){
//         return(<div className="Experience">
//             <h1>Experience</h1>
//         </div>)
//     }
// }

const Experience =() =>{
    const experinced_data =experince_data.Experiences;
    //const [img, setImg] = useState()

    let contentExperience = (
        <div className="col-md-8 sm-12">
        <div className="card bg-primary mainContent">
        <div className="Experience">
            <h1>Experience</h1>

          
             {
                 experinced_data.map((l)=>{
                    return (<div className="exp_block row">
                    <div className="col-md-4">
                        <div className="exp_logo">
                        <img src={l.logo} alt="Logo" className="exp_logo_img"/>

                        </div>
                    </div>
                    <div className="col-md-8">
                        <pre>
                        <h4>{l.companyName}</h4>
                        <div className="elem_experience"><h5>Role</h5> : <label>{l.roles[0].title}</label></div>
                        <div className="elem_experience"><h5>Duration</h5>  : <label>{l.roles[0].startDate}-{l.roles[0].endDate}</label></div>
                        <div className="elem_experience"><h5>About</h5>  : <label></label></div>
                        <div className="elem_experience"><h5>Score/Rating</h5>  : <label>{l.roles[0].Rating}</label></div>
                        <div className="elem_experience"><h5>Location</h5>  : <label>{l.roles[0].location}</label></div>
                        {/* <div className="elem"></div> */}
                        
                        
                        

                        </pre>
                                            </div>
                </div>)
                                })
             }
          

            

            {/* <div className="user" >
            <img src={smartbox} alt="Logo" className="container rounded-circle dpDimension"/>
         </div> */}
         {/* <div class="panel panel-default">
  <div class="panel-body">Panel Content</div>
  <div class="panel-footer">Panel Footer</div>
</div> */}
         </div>
         </div></div>


    );

    return contentExperience;
}



export default Experience;
