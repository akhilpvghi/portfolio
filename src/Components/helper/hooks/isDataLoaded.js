import { useState, useEffect } from "react";
export const useLoadedData= (getResponseFromComponent)=>{
    const[isInstaDataLoade,setIsInstaDataLoade]=useState(false);

    useEffect(() => {
        setIsInstaDataLoade(getResponseFromComponent)
        
    }, [])
    return isInstaDataLoade;
}

