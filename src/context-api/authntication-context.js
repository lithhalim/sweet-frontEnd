import React, { useState } from "react";

//use to create the context 
export const Login_Create_Context=React.createContext();


export function Login_Provider(props) {

    const [AllUserDaata,setAllUserData]=useState(window.localStorage.saveAllMyData?JSON.parse(window.localStorage.saveAllMyData):false)


  return (
    <Login_Create_Context.Provider value={{AllUserDaata,setAllUserData}}>
        {props.children}
    </Login_Create_Context.Provider>
  ) 
}
