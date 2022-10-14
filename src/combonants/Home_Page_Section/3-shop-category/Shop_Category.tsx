import React from 'react';
import "./style/style.scss";

import cake from "../../../assest/catagory/cake.jpg";
import arabic_Sweet from "../../../assest/catagory/arabic-sweet.jpg";
import chooclate from "../../../assest/catagory/chooclate.jpeg";
import Western_sweets from "../../../assest/catagory/westrean-sweet.webp";
import special_products from "../../../assest/catagory/houny.webp"

let datause=[{image:chooclate,name:"Chocolates and Cackes"},
{image:arabic_Sweet,name:"Arabic sweets"},
{image:Western_sweets,name:"Western sweets"},
{image:cake,name:"Cake and ice cream"},
{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQam6JRRWZRpz_mTyefcT7WgGLMbl2xo-9pH868UrmW&s",name:"traditional products"},
{image:special_products,name:"special products"},
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
