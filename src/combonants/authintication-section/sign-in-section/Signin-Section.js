import React, { useContext, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "../style/style.scss";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";
import {RiLockPasswordLine} from "react-icons/ri";
import { Sign_Context } from '../../../context-api/Sign-context';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { Login_Create_Context } from '../../../context-api/authntication-context';




   



function Signin_Section_Have() {

  const [statusEmail,setStatusEmail]=useState(false);
  const loginContext=useContext(Login_Create_Context);

  const Get_AllDataHave=(data)=>{
    const {email,password} =data;
        //Use To Decoded The Baseic Auth To Be `BASIC 5464d5s45d454s55dsdsadsa` And Send In Header
        const decoded=btoa(`${email}:${password}`)


        axios.post(`${process.env.REACT_APP_API}signin`,{
            headers:{ 'Content-Type': 'application/json' ,'Accept': 'application/json',"authorization":`BASIC ${decoded}` }
          }).then((x)=>{
                //send the accsess Token To User To Useit
                setStatusEmail("Email Is Ok Welcome")
                const decoded = jwt_decode(x.data.accessToken);
                window.localStorage.saveAllMyData=JSON.stringify(decoded);
                loginContext.setAllUserData(decoded)
            }).catch((errors)=>{
              console.log(errors)
                //if The Email Or The Password ARE WRONG
                setStatusEmail("Wrong Email Or Password")
            });
    
  }  

  const Sign_Context2=useContext(Sign_Context)

  const initialValues={
    email: '',
    password:'',
}


const closeSection=()=>{
    Sign_Context2.setsignin(false)

}

  return (
    <>
            {Sign_Context2.signin!==false?
                    <div className='signin-container'>
                    <div className='signin-container-section'>
                    <div className='container-header-sign'>
                    <h1 className='signup-header'>Create An Account</h1>
                    <span onClick={closeSection}><AiOutlineCloseCircle/></span>
                    </div>
            
                            <Formik
                                    initialValues={initialValues}
                                    validationSchema={SignupSchema}
                                    onSubmit={Get_AllDataHave}
                                    >
                                    {({ errors, touched }) => (
                                        <Form>
                                        <div className='container-input'>
                                            <span><AiOutlineMail/></span>
                                            <Field type="text"  name="email"  placeholder="Email"/>
                                            {errors.email && touched.email ? <div className='error-section'>{errors.email}</div> : null}
                                        </div>
                    
                                        <div className='container-input'>
                                            <span><RiLockPasswordLine/></span>
                                                <Field  type="password" placeholder="Password"  name='password' />
                                                {errors.password && touched.password ? <div className='error-section'>{errors.password}</div> : null}
                                        </div>
                    
                                            <button className='submit-botton' type="submit">Sign In</button>
                    
                                            <p className='special-text'>{statusEmail!==false?<span>{statusEmail}</span>:<></>} </p>
                                        </Form>
                                    )}
                            </Formik>            
                    </div>
                
                </div>:<></>
            
            }
    </>
  )
}

export default Signin_Section_Have



//you schema style validation 
const SignupSchema = Yup.object().shape({
  email:Yup
    .string()      
    .required("Mail is required"),
  password: Yup.string()
     .label('Password')
     .required(),
   });

