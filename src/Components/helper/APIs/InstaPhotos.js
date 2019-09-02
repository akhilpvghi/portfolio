import axios from 'axios';
import React,  {  Component } from "react";

export default {
    getInstaphotos () {
        let InstaImg=[];
        axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=7926815114.1d6d81e.0ccb90e8ef9948f79f51929e5754493e')
        .then((res)=>{
              console.log('insta res')
              console.log(res.data.data)
              res.data.data.map((element)=>{
                  console.log("imgghhhh",)
                InstaImg.push(element.images.standard_resolution.url)
              })
        }
              ).catch((err)=>{console.log('insta error',err)})
              return InstaImg;
    } 
    
}


    //    export default InstaPhotos
    //    export hello= this.state.instaImageArrays
