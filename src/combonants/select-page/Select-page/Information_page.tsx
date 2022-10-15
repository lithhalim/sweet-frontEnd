import React, { useContext } from 'react';
import {MdOutlineFavoriteBorder} from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux';
import { Login_Create_Context } from '../../../context-api/authntication-context';
import { Sign_Context } from '../../../context-api/Sign-context';
import { addLikes } from '../../../redux/AddLikes';
import { addtocart, modifyquantity } from '../../../redux/addToCart';


function Information_page({datause}:any) {
  const Login_Create_Contextitem=useContext(Login_Create_Context);
  const Sign_ContextItem=useContext(Sign_Context)
  const {Product,id,price,quantity,image}=datause;
  const dispatch=useDispatch()
  const selectData:any=useSelector((state)=>state)




  const likeProduct=(event:any)=>{
    //get the id of the post 
    let [id,image,Product,price]=event.currentTarget.getAttribute("datatype").split("###");

    //check if the user reguster or not
    if(Login_Create_Contextitem.AllUserDaata==false){
        Sign_ContextItem.setsignin(true)
    }else{
        //get the all information aboat user have reguster
        const {image:imageperson,regusterid,fullName} =Login_Create_Contextitem.AllUserDaata
        let DataLike={person_do_like_id:regusterid, person_do_like_name:fullName, person_do_like_image:imageperson,id:id,productName:Product,productImage:image,price:price}  

        let datacheck=selectData.allLikesIhave.alllikes.findIndex((data:any)=>(data.post_liked_id==id))
        datacheck==-1?dispatch(addLikes(DataLike)):<></>
    }
}
  
  const addToCart=(event:any)=>{
    let [id,image,Product,price,quantity]=event.currentTarget.getAttribute("datatype").split("###");

    let  checkData= selectData.addToCartSlice.allProduct.findIndex((data:any)=>(data.id==id));
    if(checkData==-1){
        dispatch(addtocart({id:id,image:image,Product:Product,price:price,quantity:quantity}))
    }else{
        dispatch(modifyquantity({id:id,image:image,Product:Product,price:price}))
    }

  }
  return (
            <div className='text-area'>
                <h2>{datause.Product}</h2>
                <h3>{datause.price} JOD</h3>
                <p>We have all kinds of Arabic and Western sweets with the most beautiful taste and we are honored to have you</p>
                <div className='connection'>
                    <button className='addtocart' datatype={`${id}###${image}###${Product}###${price}###${quantity}`}  onClick={addToCart}>ADD TO CART</button>
                    <span onClick={likeProduct} datatype={`${id}###${image}###${Product}###${price}###${quantity}`}><MdOutlineFavoriteBorder/></span>
                </div>
                <p className='moreinformation'>All items are very carefully purified and we take into account delivery services on time by our customers</p>

            </div>

  )
}

export default Information_page