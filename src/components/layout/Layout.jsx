// eslint-disable-next-line no-unused-vars
import React from 'react';

import Footer from "./Footer.jsx";
import AppNavbar from "./AppNavbar.jsx";
import BackToTop from "./BackToTop.jsx";
import {ToastContainer} from "react-toastify";
import { Toaster } from 'react-hot-toast';

const Layout = (props) => {
    return (
        <>
            <AppNavbar/>

            {/* eslint-disable-next-line react/prop-types */}
            {props.children}
            <ToastContainer position={"bottom-center"}/>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
             <BackToTop/>
            <Footer/>
        </>
    );
};

export default Layout;