import React, { useContext, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "../style/style.scss";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {BsPerson} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";
import {RiLockPasswordLine} from "react-icons/ri";
import {ImEarth} from "react-icons/im"
import { Sign_Context } from '../../../context-api/Sign-context';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';




   



function Signup_Section() {

  const Sign_Context1=useContext(Sign_Context);
  const [statusEmail,setstatusEmail]=useState(false)

      const Get_AllData=(data)=>{
        const id=uuidv4();
        const Random4digit = Math.floor(1000 + Math.random() * 9000);

        const {email,fullName,password,country} =data;
        
        const alldata={
          regusterid:id,
          fullName:fullName,
          email:email,
          password:password
          ,place:country,
          verification:Random4digit
        }
    


        axios.post(`${process.env.REACT_APP_API}signup`,{
          headers:{ 'Content-Type': 'application/json' ,'Accept': 'application/json'      },
          alldata
        }).then((x)=>{
        if(x.data.status=="Email Is ok"){
          setstatusEmail("Email Ok Now Log In")
        }else if(x.data.status=="Email Is Taken"){
          setstatusEmail("Wmail Is Taken")
        }
      })

  }  

  const initialValues={
    fullName: '',
    email: '',
    password:'',
    country:"",
}

const closesection=()=>{
  Sign_Context1.setsignup(false)
}

const loginsection=()=>{
  Sign_Context1.setsignup(false)
  Sign_Context1.setsignin(true)
}

  return (
    <>
       { Sign_Context1.signup!==false?
            <div className='signin-container'>
                <div className='signin-container-section'>
                <div className='container-header-sign'>
                  <h1 className='signup-header'>Create An Account</h1>
                  <span onClick={closesection}><AiOutlineCloseCircle/></span>
                </div>

                <Formik
                        initialValues={initialValues}
                        validationSchema={SignupSchema}
                        onSubmit={Get_AllData}
                        >
                        {({ errors, touched }) => (
                            <Form>
                              <div className='container-input'>
                                <span><BsPerson/></span>
                                <Field type="text" name="fullName"  placeholder="Full Name" />
                                {errors.fullName && touched.fullName ? (<div className='error-section'>{errors.fullName}</div>) : null}
                              </div>
                              <div className='container-input'>
                                <span><AiOutlineMail/></span>
                                <Field type="text"  name="email"  placeholder="Email"/>
                                {errors.email && touched.email ? <div className='error-section'>{errors.email}</div> : null}
                              </div>
                              <div className='container-input'>
                                <span><ImEarth/></span>
                                <Field type="text"  name="country"  placeholder="Country"/>
                                {errors.country && touched.country ? <div className='error-section'>{errors.country}</div> : null}
                              </div>

                              <div className='container-input'>
                                <span><RiLockPasswordLine/></span>
                                    <Field  type="password" placeholder="Password"  name='password' />
                                    {errors.password && touched.password ? <div className='error-section'>{errors.password}</div> : null}
                              </div>

                                <button className='submit-botton' type="submit">Reguster</button>

                                <p className='special-text'> Already Have An Account ? <span onClick={loginsection}>Login Here</span> </p>
                                <p>{statusEmail!==false?<span>{statusEmail}</span>:<></>}</p>
                            </Form>
                        )}
                  </Formik>



                </div>
              
            </div>
            :<></>
        }
    </>
  )
}

export default Signup_Section



//you schema style validation 
const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
     .label('Full Name')
     .max(16)
     .required(),
  email:Yup
    .string()      
    .required("Mail is required"),
  country:Yup
    .string(),      
  password: Yup.string()
     .label('Password')
     .required(),
   });

