import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import {AiOutlineShoppingCart} from "react-icons/ai";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import {AiOutlinePlusCircle} from "react-icons/ai";
import {AiOutlineMinusCircle} from "react-icons/ai"


import "./style/style.scss"






export default function Add_To_Card() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {setOpen(true)};
  const handleClose = () => setOpen(false);


  const increseQuntity=()=>{

  }

  const decreseQuntity=()=>{

  }


  
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'item', headerName: 'Items ', width: 250 ,
        renderCell:(params:any)=>{
        return(
            <>
                <img src={params.row.image} className="modal-image" />
                <p style={{marginLeft:"10px"}}>{params.row.Product}</p>
            </>
        )
        }
    },
    { field: 'quantity',headerName: 'Quantity', type: 'number',width: 150,
        renderCell:(params:any)=>{
          return(
            <ul className='quintity-button'>
              <li onClick={increseQuntity} datatype={params.row.id}><AiOutlinePlusCircle/></li>
              <li style={{marginBottom:"5px"}} >{params.row.quantity}</li>
              <li onClick={decreseQuntity}  datatype={params.row.id}><AiOutlineMinusCircle/></li>
            </ul>
          )
        }
      },
      { field: 'price', headerName: 'Price', width: 100  },

];
  
  const rows = [
    { id: 1,  Product: 'Jon',image:"https://insanelygoodrecipes.com/wp-content/uploads/2021/09/Sweet-Chocolate-Candy-Truffles-683x1024.jpg",quantity:1 },
    { id: 2, Product: 'Cersei', image:"https://insanelygoodrecipes.com/wp-content/uploads/2021/09/Sweet-Chocolate-Candy-Truffles-683x1024.jpg",quantity:1 },
  ];
  





  return (
    <div>
        <li onClick={handleOpen}><span><AiOutlineShoppingCart /></span> <p className='notification'>1</p></li>
        <Modal open={open} onClose={handleClose}>
            <Box className='container-modal-section'  >
                <DataGrid rows={rows}  columns={columns}/>
            </Box>
        </Modal>
    </div>
  );
}
  