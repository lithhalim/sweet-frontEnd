import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import {AiOutlineShoppingCart} from "react-icons/ai";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import {AiOutlinePlusCircle} from "react-icons/ai";
import {AiOutlineMinusCircle} from "react-icons/ai"


import "./style/style.scss"
import { useDispatch, useSelector } from 'react-redux';
import { modifyquantity, modifyquantitydecrese, removeFromCart } from '../../../redux/addToCart';
import { useNavigate } from 'react-router';






export default function Add_To_Card() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {setOpen(true)};
  const handleClose = () => setOpen(false);
  const Navi=useNavigate()
  const selectData=useSelector((state)=>(state))
  const dispatch=useDispatch();

let totalPrice
if(selectData.addToCartSlice.allProduct.length>0){
  totalPrice=selectData.addToCartSlice.allProduct.reduce((acc,data)=>(acc+=Number(data.price*data.quantity)),0)
}



  const increseQuntity=(event)=>{
    let [id,image,Product,price,quantity]=event.currentTarget.getAttribute("datatype").split("###");
    dispatch(modifyquantity({id:id,image:image,Product:Product,price:price}))

  }

  const decreseQuntity=(event)=>{
    let [id,image,Product,price,quantity]=event.currentTarget.getAttribute("datatype").split("###");
    if(quantity>1){
      dispatch(modifyquantitydecrese({id:id,image:image,Product:Product,price:price}))
    }else{
      dispatch(removeFromCart(id))
    }

  }


  
const columns = [
    { field: 'id', headerName: 'ID', width: 40 },
    { field: 'item', headerName: 'All Product You Select ', width: 200 ,
        renderCell:(params)=>{
        return(
            <>
                <img src={params.row.image} className="modal-image" />
                <p style={{marginLeft:"10px"}}>{params.row.Product}</p>
            </>
        )
        }
    },
    { field: 'quantity',headerName: 'Quantity ', type: 'number',width: 150,
        renderCell:(params)=>{
          return(
            <ul className='quintity-button'>
              <li onClick={decreseQuntity}   datatype={`${params.row.id}###${params.row.image}###${params.row.Product}###${params.row.price}###${params.row.quantity}`} ><AiOutlineMinusCircle/></li>
              <li style={{marginBottom:"5px"}} >{params.row.quantity}</li>
              <li onClick={increseQuntity} datatype={`${params.row.id}###${params.row.image}###${params.row.Product}###${params.row.price}###${params.row.quantity}`}><AiOutlinePlusCircle/></li>
            </ul>
          )
        }
      },
      { field: 'price', headerName: 'Price', width: 120,
        renderCell:(params)=>{
          return(
            <p className='price-item'>{Number(params.row.quantity)*Number(params.row.price)} JOD</p>
          )
        }
},

];
  
  const rows = selectData.addToCartSlice.allProduct
  

  const gotocheckout=()=>{
    Navi("/checkout")
  }



  return (
    <div>
        <li onClick={handleOpen}><span><AiOutlineShoppingCart /></span> {selectData.addToCartSlice.value!==0?<p className='notification'>{selectData.addToCartSlice.value}</p>:<></>} </li>
        <Modal open={open} onClose={handleClose}>
            <Box className='container-modal-section'  >
                <div className='header-addtocard'><p> Number Product:{selectData.addToCartSlice.value}</p> <p>tatal price:{totalPrice!==undefined?totalPrice:<></>}</p></div>
                <DataGrid rows={rows}  columns={columns}/>
                <button className='checkout-button-one' onClick={gotocheckout}>Check Out</button>
            </Box>
        </Modal>
    </div>
  );
}
  