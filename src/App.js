import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';




import { store } from "./redux/store/store";
import { Provider } from 'react-redux';

import { Login_Provider } from "./context-api/authntication-context";
import Header_main from "./combonants/Header-section/header/Header_main";
import Home_Page_Slider from "./combonants/Home_Page_Section/1-home-Page-Slider/Home_Page_Slider";
import Shop_Category from "./combonants/Home_Page_Section/3-shop-category/Shop_Category";
import Signup_Section from "./combonants/authintication-section/sign-up-section/Signup_Section";
import { Sign_Provider } from "./context-api/Sign-context";
import Signin_Section_Have from "./combonants/authintication-section/sign-in-section/Signin-Section";
import Popular_Product from "./combonants/Home_Page_Section/2-popular-product/Popular_Product";
import Select_Page from "./combonants/select-page/Select_Page";
import { Catagory_Provider } from "./context-api/catagory-context";
import Footer_Section from "./combonants/Footer/footer";


const queryClient = new QueryClient();

const App=()=>{
    return(
                <Catagory_Provider>
                        <Sign_Provider>
                                <Login_Provider>
                                        <QueryClientProvider client={queryClient}>
                                                <Provider store={store}>
                                                        <BrowserRouter >
                                                                        <Routes>
                                                                                <Route path="/" element={<><Header_main/> <Home_Page_Slider/><Shop_Category/> <Popular_Product/> <Signup_Section/> <Signin_Section_Have/><Footer_Section/> </>}/>
                                                                                <Route path="/select" element={<> <Header_main/><Select_Page/> <Signup_Section/> <Signin_Section_Have/><Footer_Section/></>}/>
                                                                        </Routes>
                                                        </BrowserRouter>
                                                </Provider>
                                        </QueryClientProvider>
                                </Login_Provider>
                        </Sign_Provider>
                </Catagory_Provider>
    )
}



export default App