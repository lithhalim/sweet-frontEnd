import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Catagory_Create_Context } from '../../context-api/catagory-context';
import Card_section from '../Home_Page_Section/Card_section';
import Loading_Section from '../loading-section/Loding_Section';
import "./style/style.scss"

function Catagory_Section() {
    const [isfitshing,setisfitshing]=useState(true)
    const [datause,setdatause]=useState(false)
    const Catagory_Create_Contextitem=useContext(Catagory_Create_Context)


        //----------------------------------------get all post -------------------------------------------//
        useEffect(()=>{
            Catagory_Create_Contextitem.catagory!==false?
            axios.get(`${process.env.REACT_APP_API}getpostesCatagory/${Catagory_Create_Contextitem.catagory}`).then((data)=>{
                setdatause(data.data)
                setisfitshing(false)
            }):<></>
        },[Catagory_Create_Contextitem])

        if(isfitshing){
            return<Loading_Section/>
        }
        
  return (
    <div className='container-all-item-page'>
        {datause!==false?datause.map((data,i)=>(<Card_section dataHave={data} key={i}/>)) :<></>}
    </div>
  )
}

export default Catagory_Section