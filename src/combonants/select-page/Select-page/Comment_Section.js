import axios from 'axios';
import React, { useContext, useRef, useState } from 'react';
import {AiOutlineSend} from "react-icons/ai"
import { Login_Create_Context } from '../../../context-api/authntication-context';
import { Sign_Context } from '../../../context-api/Sign-context';


function Comment_Section({datause}) {

  const dataAuthntication=useContext(Login_Create_Context);
  const Signupcontext=useContext(Sign_Context)
  const getInput=useRef()

  const [dataUseLoop,setdataUseLoop]=useState(datause.commentOnPostes)




  const createComment=()=>{
    if(dataAuthntication.AllUserDaata==false){
      Signupcontext.setsignup(true)
    }else{
      const postId=datause.postid
      const {fullName,image,regusterid}=dataAuthntication.AllUserDaata
      let dataUsedInput={commenterName:fullName,commenterImage:image,text:getInput.current.value,commentOnPostId:postId}
      axios.post(`${process.env.REACT_APP_API}createComment`,dataUsedInput)
      setdataUseLoop((data)=>[...data,dataUsedInput])     
      getInput.current.value="" 
    }
  }


  return (
    <div className='comment-container'>
        {dataUseLoop.map(({commenterName,commenterImage,text},i)=>(
            <div className='comment-inner' key={i}>
              <div className='header-comment'> 
                <img src={commenterImage} alt="" />
                <h2>{commenterName}</h2>
              </div>
                <p>{text}</p>
            </div>
        ))}

        <div className='container-input'>
          <input type="text" placeholder='Insert Any Comment Here .......' ref={getInput} />
          <span onClick={createComment}><AiOutlineSend/></span>
        </div>
        
    </div>
  )
}

export default Comment_Section