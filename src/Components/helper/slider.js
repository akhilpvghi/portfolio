import React ,{useState,useEffect} from 'react';
import arrowRight from '../../Assets/Images/B5216.jpg';
import arrowLeft from '../../Assets/Images/B5216.jpg';
import { useHttp} from '../helper/APIs/InstaPhotos'
import useWindowWidth from '../helper/WindowWidth'
import axios from 'axios';


 const Slider =() =>{
   
     const [InstaPhotos,setInstaPhotos]=useState([]);
    //  const [windowWidth,setWindowWidth]=useState(window.innerWidth);
     const windowWidth=useWindowWidth()
    const [currentImageIndex, setcurrentImageIndex] = useState(false)
  const [imageStatus, setimageStatus] = useState([])
  const [arrowNext, setarrowNext] = useState(arrowRight)
  const [arrowPrev, setarrowPrev] = useState(arrowLeft);
  const [largeWidth, setLargeWidth] = useState({});
  

  

  useEffect(()=>{
    if(windowWidth<576){
      
      setLargeWidth({
        width:  (395-(551-windowWidth))  + 'px',
        height: 216  + 'px',
      
    })
    }else{
      setLargeWidth({})
    }
  },[windowWidth])
   

  useEffect(()=>{
    setInstaPhotos(JSON.parse(localStorage.getItem("galleryImages")));

    
  },[localStorage.getItem("galleryImages").length])

   const prevSlide=()=> {
    // find the index of the last image in the array
    const lastIndex = InstaPhotos.length - 1;
    // check if we need to start over from the last index again
    const resetIndex = currentImageIndex === 0;
    const index = resetIndex ? lastIndex : currentImageIndex - 1;
   // assign the logical index to currentImageIndex that will use in render method
       setcurrentImageIndex(index)  
   }

  const nextSlide=()=> {
    // find the index of the last image in the array
    const lastIndex = InstaPhotos.length - 1;
    // check if we need to start over from the first index
    const resetIndex = currentImageIndex === lastIndex;
    const index = resetIndex ? 0 : currentImageIndex + 1;
    // assign the logical index to currentImageIndex that will use in render method
      
      setcurrentImageIndex(index);
   }


 
  

  const handleImageLoaded=()=> {
     setimageStatus(true);
    }

 

  const index = currentImageIndex;
        // create a new array with 5 videos from the source images

        let firstFiveVideo = (windowWidth<576)?InstaPhotos.slice(index, index + 1):InstaPhotos.slice(index, index + 2);
        // let firstFiveVideo = InstaPhotos.slice(index, index + 2);
        // check the length of the new array (it’s less than 5 when index is near the end of the array)
        if (firstFiveVideo.length < 1 && (windowWidth<576)) {
        // if the firstFiveVideo's length is lower than 5 images than append missing images from the beginning of the original array 
          firstFiveVideo = firstFiveVideo.concat(InstaPhotos.slice(0, 1 - firstFiveVideo.length))
        }else if(firstFiveVideo.length < 2 && (windowWidth>576)){
          firstFiveVideo = firstFiveVideo.concat(InstaPhotos.slice(0, 2 - firstFiveVideo.length))
        }
  let content =(
    <div> 
    <div><i className="fa fa-chevron-circle-left fa-3x floaty-left"  onClick={prevSlide}></i></div>
    {
      InstaPhotos.length!=0 ?
      firstFiveVideo.map((image, index) =>
                                    <img key={index} src={image} onLoad={handleImageLoaded.bind(this)} style={ largeWidth } className={(windowWidth>576  ? "SmallWidth" : "") }  alt=""/>
      
      )
      : <div key={index} className="spinner-border text-secondary imgSpinner" role="status">
      </div> 
    }
    <div className="floaty-right"><i className="fa fa-chevron-circle-right fa-3x"  onClick={nextSlide}></i></div>
    
   </div>
  )
return content;

} 

export default Slider;

  




 
  
 



  
