import React from 'react';
import jordanLogo from "../../../assest/logo/Jordan.png";
import "../style/style.scss";
import {FaBars} from "react-icons/fa"
import { useNavigate } from 'react-router';

function First_section() {


  const showBar=()=>{
    document.querySelector(".nav-container")?.classList.toggle("active")
    console.log(document.querySelector(".nav-container"))
  }


  return (
    <div className='shipping-container'>
      <div className='contain'>
        <p>Shipping </p>
        <img   src={jordanLogo} alt='jordan logo'/>
        <p>jordan</p>
      </div>

      <p className='Navbar-show' onClick={showBar}>
        <FaBars/>
      </p>
    </div>
  )
}

export default First_section
