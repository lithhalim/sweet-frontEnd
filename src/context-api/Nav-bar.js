import React, { useState } from "react";


//use to create the context 
export const Navbar_Context=React.createContext();


export function Navbar_Provider(props) {

    const [Nabbar,setNabbar]=useState(false);



  return (
    <Navbar_Context.Provider value={{Nabbar,setNabbar}}>
        {props.children}
    </Navbar_Context.Provider>
  ) 
}
