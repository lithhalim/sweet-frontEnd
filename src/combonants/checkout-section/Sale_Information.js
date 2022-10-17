import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"


function Sale_Information() {
  const [success, setSuccess ] = useState(false);
  const [failPayment,setfailPayment]=useState(false)
  const stripe = useStripe()
  const elements = useElements()


    //data will send to the database
    const Get_AllData = async(e) =>{

      const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: "card",
          card: elements.getElement(CardElement)
      })


        if(!error) {
            try {
                const {id} = paymentMethod
                const response = await axios.post(`${process.env.REACT_APP_API}create-checkout-session`, {
                    amount: 1000,
                    id
                })

                if(response.data.success) {
                    setSuccess("Successful payment")
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
          setfailPayment(error.message)
        }
    }  






  

    


  return (
    <>
    {!success?
          <div className='sale-information'>
            <h4 className='header-section'>Pay With Card</h4>
                    <Formik
                            initialValues={initialValues}
                            validationSchema={SignupSchema}
                            onSubmit={Get_AllData}
                                >
                                {({ errors, touched }) => (
                                    <Form  >
                                            <div className="txt_field">
                                                <label>Email</label>
                                                <Field type="email" required name="email" placeholder="example1995@yahoo.com" />
                                                    <span></span>
                                                {errors.email && touched.email ? <div className='error-section'>{errors.email}</div> : null}
                                            </div>  
                                            <label className='custom-lable'  >Creadit Information</label>
                                            <div className='container-card-payment-item'>
                                              <CardElement options={cardElementOptions}/>                                   
                                            </div> 
                                            <div className="txt_field">
                                              <label>Name On Card</label>
                                                <Field type="text"  name="fullName"  required maxlength="15" />
                                                    <span></span>
                                                {errors.fullName && touched.fullName ? <div className='error-section'>{errors.fullName}</div> : null}
                                            </div>

                                            <input type="submit" value="Pay Now"   className='submit-button0' />
                                            {failPayment!==false?<p style={{color:"red",padding:"10px",textAlign:"center"}}>{failPayment}</p>:<></>}

                                    </Form>
                            )}
                    </Formik>   
          </div>:<p>{success}</p>}
    </>

  )
}

export default Sale_Information



const cardElementOptions = {
  iconStyle: "solid",
  style: {
    base: {
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee"
    }
  }
}


const initialValues={
  email: '',
  fullName:'',
}

//you schema style validation 
const SignupSchema = Yup.object().shape({
  email:Yup
    .string()      
    .email("Invalid email format")
    .required("Mail is required"),
  fullName: Yup.string()
  .label('FullName')
  .min(5)
  .max(15)
  .required(),
   });


