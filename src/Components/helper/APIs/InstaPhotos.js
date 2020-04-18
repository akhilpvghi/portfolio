import axios from 'axios';
import React,  {  useState, useEffect  } from "react";
import {useLoadedData} from '../hooks/isDataLoaded'
export const useHttp = (url) =>{
  const [data,setData] = useState([])
  
  
  useEffect(() => {
    
    // console.log("sending http request");
    axios.get(url)
    .then((res)=>{
          // res.data.data.map((element)=>{
            // InstaImg.push(element.images.standard_resolution.url)
            if(!url.includes('spre'))
            setData(res.data.data)
            else
           {
             setData(res.data);
            console.log(" res.data spre ",res.data)
           } 
          // })
          
          // console.log("url  ",url,"  res.data ",res.data);
    } ).catch((err)=>{console.log('insta error',err)})
        
  }, [url,data.length])

  

  return [data]; 

  
}
