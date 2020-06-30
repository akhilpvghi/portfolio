import React, { useState } from 'react'
import axios from 'axios';


const Hobbies=()=>{
 const [selectedFile,setSeletedFile] = useState(null);

 const onChangeHandler=event=>{
    setSeletedFile( event.target.files[0]
    )
  }
    const onClickHandler = () => {
        const data = new FormData()
        data.append('file', selectedFile)
        axios.post("http://192.168.43.1:8000/", data, { 
       })
     .then(res => { // then print response status
         console.log(res.statusText)
      })
     }

     

    let content = (
    
      <div className="col-md-8 sm-12">
      <div className="card bg-primary mainContent">
    <div>
        <h1>Hobbies</h1>
        <input type="file" onChange={onChangeHandler}></input>
        {/*  */}
        <button type="button" className="btn btn-success btn-block" onClick={onClickHandler} >Upload</button>
    </div>
    </div></div>)

    return content;
}

export default Hobbies;

// export default class Hobbies extends Component {
//     render() {
//         return (
            
//         )
//     }
// }
