import React, { useContext } from 'react';
import {BiSearch} from "react-icons/bi";
import {AiOutlineHeart} from "react-icons/ai" ;
import {BsPerson} from "react-icons/bs";
import { Sign_Context } from '../../../context-api/Sign-context';
import Add_To_Card from '../../modal-section/Add-to-card/Add_To_Card';

function Section_3() {
  const Sign_Context3=useContext(Sign_Context)
  const signUpshow=()=>{Sign_Context3.setsignup(true)}




  return (
    <ul className='header-icon-section'>
        <li><span><BiSearch/></span></li>
        <li ><span><AiOutlineHeart/></span> <p className='notification'>1</p></li>
        <li><span onClick={signUpshow} ><BsPerson/></span></li>
        <li ><Add_To_Card/>  </li>
    </ul>
  )
}

export default Section_3
