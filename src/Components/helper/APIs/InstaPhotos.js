import axios from 'axios';
import React,  {  useState, useEffect  } from "react";
import {useLoadedData} from '../hooks/isDataLoaded'
export const useHttp = (url) =>{
  const [data,setData] = useState([])
  
  
  // useEffect(() => {
  //   axios.get(url)
  //   .then((res)=>{
  //           if(!url.includes('spre'))
  //           setData(res.data.data)
  //           else
  //          {
  //            setData(res.data);
  //           // setData();
  //          } 
  //   } ).catch((err)=>{console.log('insta error',err)
  
  //   // setData();
  // })
    
        
  // }, [url,data.length])

  

  return [data]; 

  
}
