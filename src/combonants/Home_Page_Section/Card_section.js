import React, { useContext } from 'react';

import {AiOutlineShoppingCart} from "react-icons/ai";
import {MdFavoriteBorder} from "react-icons/md";

import { useDispatch, useSelector } from 'react-redux';
import { addtocart, modifyquantity } from '../../redux/addToCart';
import { Login_Create_Context } from '../../context-api/authntication-context';
import { Sign_Context } from '../../context-api/Sign-context';
import { addLikes } from '../../redux/AddLikes';
import { useNavigate } from 'react-router';
import { Catagory_Create_Context } from '../../context-api/catagory-context';




function Card_section({dataHave}) {
    const {id,image,Product,price,quantity}=dataHave;

    const Login_Create_Contextitem=useContext(Login_Create_Context)
    const Sign_ContextItem=useContext(Sign_Context)
    const SelectPagecontext=useContext(Catagory_Create_Context)
    const dispatch=useDispatch();
    const Navi=useNavigate()
    const selectData=useSelector((state)=>(state))


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

        //------------------------------------go to page --------------------------------------------------//
        const gotopage=(event)=>{
            let dataSelect=event.currentTarget.getAttribute("datatype");
            SelectPagecontext.setSelectPage(dataSelect);
            window.localStorage.savePage=dataSelect
            Navi("/select")
        }
    

  return (
        <div className='slider-item'    >
            <img src={image} alt="" datatype={id}  onClick={gotopage} style={{cursor:"pointer"}}/>
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
)
}

export default Card_section