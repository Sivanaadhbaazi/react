import { useEffect, useState } from "react"

const useResturantMenu = (resID)=> {
    
    const [restMenuData,setrestMenuData]= useState(null);

    useEffect(()=>{
        
        setrestMenuData("Menu Id from custom hook"+resID );
    
    },[]);

    return restMenuData;
}

export default useResturantMenu;