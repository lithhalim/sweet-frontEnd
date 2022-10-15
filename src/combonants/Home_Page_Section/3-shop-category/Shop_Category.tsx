import React from 'react';
import "./style/style.scss";

import cake from "../../../assest/catagory/cake.jpg";
import arabic_Sweet from "../../../assest/catagory/arabic sweet.jpg";
import chooclate from "../../../assest/catagory/chocolate.jpg";
import honey from "../../../assest/catagory/honey.jpg";
import iceCreem from "../../../assest/catagory/iceCreem.jpg";
import spicalOne from "../../../assest/catagory/zattar.jpg"


let datause=[
{image:chooclate,name:"Chocolates Sweet"},
{image:arabic_Sweet,name:"Arabic sweets"},
{image:honey,name:"honey sweets"},
{image:cake,name:"Cake Sweet"},
{image:iceCreem,name:"ice Cream Sweet"},
{image:spicalOne,name:"special products"},
]

function Shop_Category() {
  return (
    <div className='container-shop-catagory'>
        <h1 className='header-information'>
            Shop bu catagory
        </h1>
        
        <div className='container-all-card'>
            {
                datause.map(({name,image},i)=>(
                    <div className='container-card' key={i}>
                        <img src={image} alt="" />
                        <p>{name}</p>                     
                    </div>
                ))
            }
        </div>
      
    </div>
  )
}

export default Shop_Category
