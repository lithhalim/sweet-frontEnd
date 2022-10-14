import React, { useState } from "react";


//use to create the context 
export const Sign_Context=React.createContext();


export function Sign_Provider(props) {

    const [signin,setsignin]=useState(false);
    const [signup,setsignup]=useState(false);



  return (
    <Sign_Context.Provider value={{signin,setsignin,signup,setsignup}}>
        {props.children}
    </Sign_Context.Provider>
  ) 
}
