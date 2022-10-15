import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import {AiOutlineHeart} from "react-icons/ai" ;
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


import "./style/style.scss"
import { useDispatch, useSelector } from 'react-redux';






export default function Add_To_Like() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {setOpen(true)};
  const handleClose = () => setOpen(false);

  const selectData=useSelector((state)=>(state))
  const dispatch=useDispatch();




  
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
      { field: 'price', headerName: 'Price', width: 120,
        renderCell:(params)=>{
          return(
            <p className='price-item'>{Number(params.row.quantity)*Number(params.row.price)} JOD</p>
          )
        }
},

];
  
  const rows = selectData.allLikesIhave.alllikes
  





  return (
    <div>  
        <li onClick={handleOpen}><span><AiOutlineHeart/></span> {selectData.allLikesIhave.value!==0? <p className='notification'>{selectData.allLikesIhave.value}</p>:<></>} </li>
        <Modal open={open} onClose={handleClose}>
            <Box className='container-modal-section'  >
                <DataGrid rows={rows}  columns={columns}/>
            </Box>
        </Modal>
    </div>
  );
}
  