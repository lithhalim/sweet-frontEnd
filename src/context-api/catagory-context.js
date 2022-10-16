import React, { useState } from "react";


//use to create the context 
export const Catagory_Create_Context=React.createContext();


export function Catagory_Provider(props) {

    const [catagory,setcatagory]=useState(window.localStorage.catagoryselect?window.localStorage.catagoryselect:false);
    const [EditeButton,setEditeButton]=useState(false)
    const [selectPage,setSelectPage]=useState(window.localStorage.savePage?window.localStorage.savePage:false)

  return (
    <Catagory_Create_Context.Provider value={{catagory,setcatagory,setEditeButton,EditeButton,setSelectPage,selectPage}}>
        {props.children}
    </Catagory_Create_Context.Provider>
  ) 
}
