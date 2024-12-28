// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import logo from "../../assets/images/plainb-logo.svg";
import ProductStore from "../../store/ProductStore.js";
import UserStore from "../../store/UserStore.js";
import SubmitButton from "../user/SubmitButton.jsx";
import CartStore from "../../store/CartStore.js";
import WishStore from "../../store/WishStore.js";



// ScrollTrigger প্লাগিনকে gsap এর সাথে রেজিস্টার করা

const AppNavbar = () => {
    const navigate=useNavigate();
    const {SetSearchKeyword,SearchKeyword}=ProductStore();
    const {isLogin,UserLogoutRequest}=UserStore();
    const {CartListRequestRead,cartCount}=CartStore()
    const {wishListRequestRead,wishCount}=WishStore()
    const onLogout=async ()=>{
        await UserLogoutRequest();

        sessionStorage.clear();
        localStorage.clear();
        navigate("/")
        await wishListRequestRead();
        await CartListRequestRead();
    }
    useEffect(() => {
        (async ()=>{
            if(isLogin()){
                await wishListRequestRead();
                await CartListRequestRead();
            }

        })()
    }, [isLogin()]);
// enter click search
    const handleKeyPress=(event)=>{
        event.key==='Enter' ? navigate(SearchKeyword.length>0?`/productlistBykeyword/${SearchKeyword}`:'/'):null
    }
    return (

        <>
            <div className="container-fluid text-white p-2 bg-success">
                <div className="container-md">
                    <div className="row justify-content-around">
                        <div className="col-md-6">
                            <span>
                                <span className="f-12">
                                    <i className="bi bi-envelope"></i> Support@PlanB.com </span>
                                <span className="f-12 mx-2">
                                    <i className="bi bi-telephone"></i> 01774688159 </span>
                            </span>
                        </div>
                        <div className="col-md-6">
                            <span className="float-end">
                                <span className="bodySmal mx-2">
                                    <i className="bi bi-whatsapp"></i>
                                </span>
                                <span className="bodySmal mx-2">
                                    <i className="bi bi-youtube"></i>
                                </span>
                                <span className="bodySmal">
                                    <i className="bi bi-facebook"></i>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar sticky-top bg-white navbar-expand-lg navbar-light py-3">
                <div className="container-md">
                    <Link className="navbar-brand" to="/">
                        <img className="img-fluid" src={logo} alt="" width="96px" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav06" aria-controls="nav06" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="nav06">
                        <ul className="navbar-nav mt-3 mt-lg-0 mb-3 mb-lg-0 ms-lg-3">
                            <span className="nav-item me-4">
                                <Link className="nav-link" to="/"><i className="bi bi-house"></i> Home</Link>
                            </span>
                            <span className="nav-item me-4">
                                <Link className="nav-link" to={'/allProduct'}><i className="bi bi-layout-text-sidebar-reverse"></i> All Product</Link>
                            </span>
                        </ul>
                    </div>
                    <Link to="/cart" type="button" className="btn ms-2 btn-light position-relative mx-4 d-flex">
                        <i className="bi text-dark bi-bag"></i><span className="py-0 ps-2">Cart</span> <span
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">{cartCount}</span>

                    </Link>
                    <Link to="/wish" type="button" className="btn ms-2 btn-light d-flex position-relative mx-3">
                        <i className="bi text-dark bi-heart"></i><span className="py-0 ps-2">Wish</span>
                        <span
                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{wishCount}</span>
                    </Link>
                    <Link to="/orders" type="button" className="btn ms-4 btn-light position-relative">
                        <i className="bi text-dark  bi-truck"></i><span className="py-0 ps-2">Order</span>
                    </Link>
                    <div className=" d-flex justify-content-center align-items-center">
                        <div className="input-group px-4">
                            <input onKeyPress={handleKeyPress} onChange={(e)=>SetSearchKeyword(e.target.value)} className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <Link to={SearchKeyword.length>0?`/productlistBykeyword/${SearchKeyword}`:'/'} className="btn btn-outline-dark" type="submit" onKeyPress={true}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style=
                                    {{ width: 24, height: 24 }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </Link>
                        </div>

                        {
                            isLogin()?(
                                  <>
                                      <SubmitButton onClick={onLogout}  className="btn ms-3 btn-danger d-flex" text="logout"/>
                                      <Link type="button" className="btn ms-3 btn-success d-flex" to="/profile">Profile</Link>
                                  </>

                            ):(
                            <>
                                <Link type="button"  className="btn ms-3 btn-success d-flex" to="/login">Login</Link>
                            </>

                            )
                        }


                    </div>
                </div>
            </nav>
        </>
    );
};

export default AppNavbar;