import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../../Styles/Download.css';
const Downloads=()=>{
    const [totalImg,setTotalImg]=useState([])
    const [count,setcount]=useState(1)
    const [show,setShow]=useState(true)
    // let show=false;
    const style = {
        width:  150  + 'px',
        height: 150+ 'px',
        border: '10px solid green',
         borderRightColor: 'red' 
    };

    useEffect(() => {
        axios(`/img%20%28${count}%29.jpg`,{
//             method: "GET",
//   headers: {
//     'Content-type':'image/jpeg',
// //     // "Accept": "*/*",
// //     // "Cache-Control": "no-cache",
// //     // "Postman-Token": "8bfad07a-a4fd-4b2c-8339-43f896da013b,e4e3bade-2860-43d4-9d84-7ff90355ea45",
//     'Access-Control-Allow-Origin': '*' ,
// //     // 'Access-Control-Allow-Credentials': true
// //     // "cache-control": "no-cache"
//   }
    //          headers:{    
    //             'Access-Control-Allow-Origin': '*' ,
    //             "Access-Control-Allow-Methods": "GET",
    //             "Access-Control-Allow-Headers": "Origin, Methods, Content-Type"
    // }
        })
    .then(
        (res)=>{
            setTotalImg([]);
            // setTotalImg([1,2,3,4,5,6,7]);
        console.log("import axios from 'axios';",res.status,totalImg)
        setTotalImg([...totalImg, count])
        // totalImg.push(count);
        setcount(count+1);
    }
     ).catch((err)=>{console.log('insta error',err)
     setShow(true);})
    
    }, [count])

    
    
    let content=(
            <div className="Downloads">

            <h1>Downloads</h1>
            <input type="text"></input>
            {/* key={index} src={image} */}
            {/* src={require(`${image}`)} */}
           {/* src={`${localhost:8000/img%20%28{ele}%29.jpg}`} */}
            <div className="container">
{
    show?
    totalImg.map((ele)=>

    <img key ={ele} src={`img%20%28${ele}%29.jpg`}   style={style} alt=""/>

    ):null

}
</div>
        </div>

        
        )
        return content;
    
}

export default Downloads;