import axios from 'axios';
import React,  {  useState, useEffect  } from "react";
import {useLoadedData} from '../hooks/isDataLoaded'
export const useHttp = (url) =>{
  const [data,setData] = useState([])
  
  
  useEffect(() => {
    
    console.log("sending http request");
    axios.get(url)
    .then((res)=>{
          // res.data.data.map((element)=>{
            // InstaImg.push(element.images.standard_resolution.url)
            setData(res.data.data)
          // })
          
          console.log("isDataLoadedOnce");
    } ).catch((err)=>{console.log('insta error',err)})
        
  }, [url])

  

  return [data]; 

  
}
