import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import Main_logo from "../../../assest/logo/main-logo.png";
import { Catagory_Create_Context } from '../../../context-api/catagory-context';


let Datause=[{name:"Home",data:"/"},{name:"Cake",data:"cake"},{name:"Arabic Sweet",data:"arabicsweet"},{name:"Ice Cream",data:"icecream"},{name:"Our Store",data:"/ourstore"}]

function Secand_Section() {
  const Navi=useNavigate()
  const CatagoryContext=useContext(Catagory_Create_Context)
  const homepage=()=>{Navi("/")}




  const gotopage=(event:any)=>{
    let dataselect=event.currentTarget.getAttribute("datatype")
    if(dataselect=="cake"||dataselect=="arabicsweet"||dataselect=="icecream"){
      CatagoryContext.setcatagory(dataselect);
      window.localStorage.catagoryselect=dataselect;
      Navi("/pages")
  }else{
      Navi(dataselect)
    }
  }




  return (
    <div className='logo-section'>
      <img src={Main_logo} alt="" onClick={homepage}   style={{cursor:"pointer"}}/>
        <ul className='nav-container'>
          {Datause.map(({name,data},i)=>(<li onClick={gotopage} datatype={data} key={i}>{name}</li>))}
        </ul>
    </div>
  )
}

export default Secand_Section
