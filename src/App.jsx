// eslint-disable-next-line no-unused-vars
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductByBrand from "./pages/Product-by-brand.jsx";
import ProductByCategory from "./pages/Product-by-category.jsx";
import ProductByKeyword from "./pages/Product-by-keyword.jsx";
import ProductDetails from "./pages/Product-Details.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import RefundPage from "./pages/RefundPage.jsx";
import TermsPage from "./pages/TermsPage.jsx";
import HowToBuyPage from "./pages/How-to-buy-page.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ComplianPage from "./pages/ComplianPage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import OTPPage from "./pages/OTPPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import WishPage from "./pages/Wish-Page.jsx";
import CartPage from "./pages/CartPage.jsx";
import AllprodcutPage from "./pages/AllprodcutPage.jsx";
import OrderPage from "./pages/OrderPage.jsx";
import Error404 from "./pages/Error404.jsx";
import InvoiceDetailspage from "./pages/InvoiceDetailspage.jsx";



const App = () => {
    return (
        <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="/productlistByBrand/:id" element={<ProductByBrand/>} />
               <Route path="/productlistBycategori/:id" element={<ProductByCategory/>} />
               <Route path="/productlistBykeyword/:keyword" element={<ProductByKeyword/>} />
               <Route path="/allProduct" element={<AllprodcutPage/>} />
               <Route path="/producDetails/:id" element={<ProductDetails/>} />
               {/*legals start */}
               <Route path="/about/" element={<AboutPage/>} />
               <Route path="/refund/" element={<RefundPage/>} />
               <Route path="/privacy/" element={<PrivacyPage/>} />
               <Route path="/terms/" element={<TermsPage/>} />
               <Route path="/how-to-buy/" element={<HowToBuyPage/>} />
               <Route path="/contact/" element={<ContactPage/>} />
               <Route path="/complain/" element={<ComplianPage/>} />
               {/*legals end*/}
               {/*user login & otp */}
               <Route path="/profile" element={<ProfilePage/>} />
               <Route path="/login" element={<LoginPage/>} />
               <Route path="/otp" element={<OTPPage/>} />
               {/*profile part */}
               {/*wish and cart */}
               <Route path="/wish" element={<WishPage/>} />
               <Route path="/cart" element={<CartPage/>} />
               {/*invoice list */}
               <Route path="/orders" element={<OrderPage/>} />
               <Route path="/invoice/:id" element={<InvoiceDetailspage/>} />
               <Route path="*" element={<Error404/>}/>
           </Routes>

        </BrowserRouter>
    );
};

export default App;