
import axios from "axios";
import React ,{useEffect,useState}from "react"
const useAxios_get_Hook =(url,params)=>{
    const [isLoading,setIsloading]=useState(true);
    const [data,setData]=useState(null);
    const [error,setError]=useState(null)

    useEffect(()=>{
        if(params!==undefined){
         axios.get(`${process.env.REACT_APP_API}${url}/${params}`).then((dataUse)=>{
            setIsloading(false)
            setData(dataUse.data)
        }).catch=(err)=>{
            setIsloading(null);
            setData(null);
            setError(err);
        }
       }else{
        axios.get(`${process.env.REACT_APP_API}${url}`).then((dataUse)=>{
            setIsloading(false)
            setData(dataUse.data)
        }).catch=(err)=>{
            setIsloading(null);
            setData(null);
            setError(err);
        }
        setIsloading(false)
       }
    },[url])

    return{isLoading,data,error}
}


export default useAxios_get_Hook