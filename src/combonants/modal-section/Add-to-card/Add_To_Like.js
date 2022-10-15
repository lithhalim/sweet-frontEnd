import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import {AiOutlineHeart} from "react-icons/ai" ;
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


import "./style/style.scss"
import { useDispatch, useSelector } from 'react-redux';
import { RemoveAllLikes } from '../../../redux/AddLikes';






export default function Add_To_Like() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {setOpen(true)};
  const handleClose = () => setOpen(false);

  const selectData=useSelector((state)=>(state))
  const dispatch=useDispatch();

  const removeLike=(event)=>{
    let [id,person_do_like_id]=event.currentTarget.getAttribute("datatype").split("###")
    let datause={id:id,person_do_like_id:person_do_like_id}
    dispatch(RemoveAllLikes(datause))

  }




  
const columns = [
    { field: 'id', headerName: 'ID', width: 40 },
    { field: 'item', headerName: 'Product Information ', width: 250 ,
        renderCell:(params)=>{
        return(
            <>
                <img src={params.row.productImage}   style={{width:"80px",height:"80px"}}/>
                <p style={{marginLeft:"10px"}}>{params.row.productName}</p>
            </>
        )
        }
    },
    { field: 'Remove', headerName: 'Remove Like ', width: 120 ,
        renderCell:(params)=>{
        return(
            <>
                <button onClick={removeLike} datatype={`${params.row.id}###${params.row.person_do_like_id}`} className="remove-button"> Remove</button>
            </>
        )
        }
    },
    { field: 'View', headerName: 'View Product ', width: 120 ,
    renderCell:(params)=>{
    return(
        <>
            <button onClick={removeLike} datatype={`${params.row.id}###${params.row.person_do_like_id}`} className="view-button"> View</button>
        </>
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
  