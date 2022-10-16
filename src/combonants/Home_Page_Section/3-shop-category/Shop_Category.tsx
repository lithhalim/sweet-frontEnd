import React, { useContext } from 'react';
import "./style/style.scss";

import cake from "../../../assest/catagory/cake.jpg";
import arabic_Sweet from "../../../assest/catagory/arabic sweet.jpg";
import chooclate from "../../../assest/catagory/chocolate.jpg";
import honey from "../../../assest/catagory/honey.jpg";
import iceCreem from "../../../assest/catagory/iceCreem.jpg";
import spicalOne from "../../../assest/catagory/zattar.jpg"
import { Catagory_Create_Context } from '../../../context-api/catagory-context';
import { useNavigate } from 'react-router';


let datause=[
{image:chooclate,name:"Chocolates Sweet",catagory:"arabicsweet"},
{image:arabic_Sweet,name:"Arabic sweets",catagory:"arabicsweet"},
{image:honey,name:"honey sweets",catagory:"arabicsweet"},
{image:cake,name:"Cake Sweet",catagory:"cake"},
{image:iceCreem,name:"ice Cream Sweet",catagory:"icecream"},
{image:spicalOne,name:"special products",catagory:"arabicsweet"},
]


function Shop_Category() {

    const CatagoryContext=useContext(Catagory_Create_Context);
    const Navi=useNavigate()

    const gotopage=(event:any)=>{
        let dataGo=event.currentTarget.getAttribute("datatype")
        CatagoryContext.setcatagory(dataGo);
        window.localStorage.catagoryselect=dataGo
        Navi("/pages")
    }
    
  return (
    <div className='container-shop-catagory'>
        <h1 className='header-information'>
            Shop bu catagory
        </h1>
        
        <div className='container-all-card'>
            {
                datause.map(({name,image,catagory},i)=>(
                    <div className='container-card' key={i} onClick={gotopage} datatype={catagory}>
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
