import React, { useContext } from 'react';
import {BiSearch} from "react-icons/bi";
import {BsPerson} from "react-icons/bs";
import { Sign_Context } from '../../../context-api/Sign-context';
import Add_To_Card from '../../modal-section/Add-to-card/Add_To_Card';
import { Login_Create_Context } from '../../../context-api/authntication-context';
import Add_To_Like from '../../modal-section/Add-to-card/Add_To_Like';
import axios from 'axios';

function Section_3() {
  const Sign_Context3=useContext(Sign_Context)
  const signUpshow=()=>{Sign_Context3.setsignup(true)}
  const Login_Create_Contextitem=useContext(Login_Create_Context)



  const Logout_section=()=>{
    axios.post(`${process.env.REACT_APP_API}logout/${Login_Create_Contextitem.AllUserDaata.regusterid}`)
    Login_Create_Contextitem.setAllUserData(false)
    window.localStorage.removeItem('SaveAuthnticaiton');
  }

  const showLogout=()=>{
    document.querySelector(".logout-section")?.classList.toggle("active")
  }




  return (
    <ul className='header-icon-section'>
        <li><span><BiSearch/></span></li>
        <li ><Add_To_Like/> </li>
        {Login_Create_Contextitem.AllUserDaata==false?<li><span onClick={signUpshow} ><BsPerson/></span></li>:<></>}
        <li ><Add_To_Card/>  </li>
        {Login_Create_Contextitem.AllUserDaata!==false?
        <li className='container-image-person'>
          <img src={Login_Create_Contextitem.AllUserDaata.image} alt="" onClick={showLogout} />
          <div className='logout-section'>
            <div className='text'><img src={Login_Create_Contextitem.AllUserDaata.image} alt="" /> <p>{Login_Create_Contextitem.AllUserDaata.fullName}</p></div>
            <button className='logout' onClick={Logout_section}>Logout</button>
          </div>
        </li>:<></>}
    </ul>
  )
}

export default Section_3
