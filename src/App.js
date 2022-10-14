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


const queryClient = new QueryClient();

const App=()=>{
    return(
        <Sign_Provider>
                <Login_Provider>
                        <QueryClientProvider client={queryClient}>
                                <Provider store={store}>
                                        <BrowserRouter >
                                                        <Routes>
                                                                <Route path="/" element={<><Header_main/> <Home_Page_Slider/><Shop_Category/> <Signup_Section/> <Signin_Section_Have/></>}/>
                                                        </Routes>
                                        </BrowserRouter>
                                </Provider>
                        </QueryClientProvider>
                </Login_Provider>
        </Sign_Provider>
    )
}



export default App