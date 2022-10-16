import React from 'react';
import { useNavigate } from 'react-router';
import Main_logo from "../../../assest/logo/main-logo.png";



function Secand_Section() {
  const Navi=useNavigate()
  const homepage=()=>{Navi("/")}


  return (
    <div className='logo-section'>
      <img src={Main_logo} alt="" onClick={homepage}   style={{cursor:"pointer"}}/>
        <ul className='nav-container'>
          <li onClick={homepage}>Home</li>
          <li>Cake</li>
          <li>Arabic Sweet</li>
          <li>Our Stores</li>
          <li>About Us</li>
        </ul>
    </div>
  )
}

export default Secand_Section
