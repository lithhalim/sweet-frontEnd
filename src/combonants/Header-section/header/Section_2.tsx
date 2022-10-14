import React from 'react';
import Main_logo from "../../../assest/logo/main-logo.png";

function Secand_Section() {
  return (
    <div className='logo-section'>
      <img src={Main_logo} alt="" />
        <ul className='nav-container'>
          <li>Shop</li>
          <li>Catering</li>
          <li>Gourmet</li>
          <li>Our Stores</li>
          <li>About Us</li>
        </ul>
    </div>
  )
}

export default Secand_Section
