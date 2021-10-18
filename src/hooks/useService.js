import { useEffect, useState } from "react"

const useService=()=>{

    const [services,setServices] =useState([]);
    
    useEffect(()=>{

        fetch('./servicesdb.json')
        .then(res=>res.json())
        .then(data=>setServices(data));

    },[]);

    return [services,setServices];

}
export default useService;