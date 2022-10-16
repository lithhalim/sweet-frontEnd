import React, { useContext, useEffect, useState } from 'react';
import "./style/style.scss";


import  { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from 'axios';
import Card_section from '../Card_section';
import Loading_Section from '../../loading-section/Loding_Section';




function Popular_Product() {
    const [isfitshing,setisfitshing]=useState(true)
    const [datause,setdatause]=useState(false);






    //----------------------------------------get all post -------------------------------------------//
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API}getpostes`).then((data)=>{
            setdatause(data.data)
            setisfitshing(false)
        })
    },[])

    if(isfitshing){
        return<Loading_Section/>
    }





  return (
    <div className='popular-slider'>
        <h1 className='header-information'>
            popular product 
        </h1>

            <div className='swiper-container-all-popular'>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]} //moduls will be active
                        navigation //right and left button
                        pagination={{ clickable: true }}//you can click right and left
                        scrollbar={{ draggable: true }}//you can dragg element
                        breakpoints={{
                            0:{slidesPerView:1,spaceBetween:10},
                            480:{slidesPerView:2,spaceBetween:10},
                            768:{slidesPerView:3,spaceBetween:10},
                            1000:{slidesPerView:4,spaceBetween:10},
                            1250:{slidesPerView:5,spaceBetween:10},
                        }}
                        
                        >
                            {datause!==false?
                                datause.map((dataHave,i)=>(
                                    <SwiperSlide key={i}>
                                        <Card_section dataHave={dataHave}/>
                                    </SwiperSlide>        
                                ))
                            :<></>}
                        </Swiper>
                </div>
    </div>
  )
}

export default Popular_Product
