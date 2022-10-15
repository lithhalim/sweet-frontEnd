import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Catagory_Create_Context } from '../../context-api/catagory-context';
import Comment_Section from './Select-page/Comment_Section';
import Information_page from './Select-page/Information_page';
import "./style/style.scss";

function Select_Page() {
    const selectPageContext=useContext(Catagory_Create_Context);
    const [datause,setdatause]=useState(false)


    useEffect(()=>{
        if(selectPageContext.selectPage!==false){
            axios.get(`${process.env.REACT_APP_API}getproductpage/${selectPageContext.selectPage}`).then((data)=>{
                setdatause(data.data)
            })
        }
    },[])
  return (
    <div className='select-page-container'>
        {datause!==false?
            <div>
                <div className='information-container'>
                    <img src={datause.image} alt=""  style={{height:"300px"}}/>
                    <Information_page datause={datause}/>
                </div>
                <h1 className='header-information' style={{width:"90vw",marginTop:"100px"}}>
                    COMMENT SECTION
                </h1>
                <Comment_Section datause={datause}/>
            </div>
        :<></>}
    </div>
  )
}

export default Select_Page
