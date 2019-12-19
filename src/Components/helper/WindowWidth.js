import {useEffect, useState} from 'react';




const useWindowWidth=()=>{

    const[windowSize,setWindowSize]=useState(window.innerWidth)


    const handleResize=()=>setWindowSize(window.innerWidth)
    useEffect(()=>{
        window.addEventListener('resize',handleResize)
        
    //     return ()=> {
    //   window.removeEventListener('resize',handleResize)
    //     }
    },[windowSize])

    return windowSize;
}

export default useWindowWidth;