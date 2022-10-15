import React, { useContext, useEffect, useState } from 'react';
import "./style/style.scss";


import  { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import {AiOutlineShoppingCart} from "react-icons/ai";
import {MdFavoriteBorder} from "react-icons/md"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart, modifyquantity } from '../../../redux/addToCart';
import { Login_Create_Context } from '../../../context-api/authntication-context';
import { Sign_Context } from '../../../context-api/Sign-context';
import axios from 'axios';
import { addLikes } from '../../../redux/AddLikes';




function Popular_Product() {
    const Login_Create_Contextitem=useContext(Login_Create_Context)
    const Sign_ContextItem=useContext(Sign_Context)
    const dispatch=useDispatch()
    const selectData=useSelector((state)=>(state))
    const [isfitshing,setisfitshing]=useState(true)
    const [datause,setdatause]=useState(false);




//---------------------------------------Add To cart -------------------------------------------------//
    const addToCart=(event)=>{
        let [id,image,Product,price,quantity]=event.currentTarget.getAttribute("datatype").split("###");
        let  checkData= selectData.addToCartSlice.allProduct.findIndex((data)=>(data.id==id));

        if(checkData==-1){
            dispatch(addtocart({id:id,image:image,Product:Product,price:price,quantity:quantity}))
        }else{
            dispatch(modifyquantity({id:id,image:image,Product:Product,price:price}))
        }
    }

//-------------------------------------like item ------------------------------------------------------//
    const likeProduct=(event)=>{
        //get the id of the post 
        let [id,image,Product,price]=event.currentTarget.getAttribute("datatype").split("###");

        //check if the user reguster or not
        if(Login_Create_Contextitem.AllUserDaata==false){
            Sign_ContextItem.setsignin(true)
        }else{
            //get the all information aboat user have reguster
            const {image:imageperson,regusterid,fullName} =Login_Create_Contextitem.AllUserDaata
            let DataLike={person_do_like_id:regusterid, person_do_like_name:fullName, person_do_like_image:imageperson,id:id,productName:Product,productImage:image,price:price}  

            let datacheck=selectData.allLikesIhave.alllikes.findIndex((data)=>(data.post_liked_id==id))
            datacheck==-1?dispatch(addLikes(DataLike)):<></>
        }
    }


    //----------------------------------------get all post -------------------------------------------//
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API}getpostes`).then((data)=>{
            setdatause(data.data)
            setisfitshing(false)
        })
    },[])



  return (
    <div className='popular-slider'>
        <h1 className='header-information'>
            popular product 
        </h1>

            <div className='swiper-container-all-popular'>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]} //moduls will be active
                        spaceBetween={10}//the space between item
                        slidesPerView={4}//number of item in one page
                        navigation //right and left button
                        pagination={{ clickable: true }}//you can click right and left
                        scrollbar={{ draggable: true }}//you can dragg element
                        
                        >
                            {datause!==false?
                                datause.map(({id,image,Product,price,quantity},i)=>(
                                    <SwiperSlide key={i}>
                                        <div className='slider-item'  >
                                            <img src={image} alt="" />
                                            <div className='text-area'>
                                                <div className='text'>
                                                    <p className='product'>{Product}</p>
                                                    <p className='price'> {price} JOD</p>
                                                </div>
                                                <div className='icon'>
                                                    <span  datatype={`${id}###${image}###${Product}###${price}###${quantity}`} onClick={addToCart}><AiOutlineShoppingCart/></span>
                                                    <span  datatype={`${id}###${image}###${Product}###${price}###${quantity}`} onClick={likeProduct}><MdFavoriteBorder/></span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>        
                                ))
                            :<></>}
                        </Swiper>
                </div>
    </div>
  )
}

export default Popular_Product
