import React, { useState } from "react";


//use to create the context 
export const Catagory_Create_Context=React.createContext();


export function Catagory_Provider(props) {

    const [catagory,setcatagory]=useState(false);

    const [EditeButton,setEditeButton]=useState(false)


  return (
    <Catagory_Create_Context.Provider value={{catagory,setcatagory,setEditeButton,EditeButton}}>
        {props.children}
    </Catagory_Create_Context.Provider>
  ) 
}
