// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import ProductStore from "../../store/ProductStore.js";
import ProductLoader from "../../skeletonLoader/ProductLoader.jsx";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings.js";

const ProductsRemarks = () => {
    const { ProductListByRemark,ProductListByRemarkRequest  } = ProductStore();
    const [ActiveTab,setActiveTab]=useState('new')
    if (ProductListByRemark === null) {
        return <ProductLoader />;
    }
    else {
        const handleClickTab= async (remark)=>{
            setActiveTab(remark);
            await  ProductListByRemarkRequest(remark)
        }

        return (
            <div className="section container-md">
                <div className="container-md py-5 bg-light">
                    <div className="row">
                        <h1 className="headline-4 text-center my-2 p-0">Our Products</h1>
                        <span
                            className="bodySmal mb-3 text-center">Explore a World of Choices Across Our Most Popular</span>
                        <div className="col-12">
                            <div>
                             <ul className="nav nav-pills  p-3  justify-content-center mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation" onClick={()=>{handleClickTab("new")}}>
                                    <button className={`nav-link ${ActiveTab=== "new" ? "active" : ""}`} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-new" type="button" role="tab" aria-controls="pills-home" aria-selected="true">New</button>
                                </li>
                                <li className="nav-item" role="presentation" onClick={()=>{handleClickTab("trending")}}>
                                    <button className={`nav-link ${ActiveTab=== "trending" ? "active" : ""}`} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-trending" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Trending</button>
                                </li>
                                <li className="nav-item" role="presentation" onClick={()=>{handleClickTab("popular")}}>
                                    <button  className={`nav-link ${ActiveTab=== "popular" ? "active" : ""}`} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-popular" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Popular</button>
                                </li>
                                <li className="nav-item" role="presentation" onClick={()=>{handleClickTab("top")}}>
                                    <button className={`nav-link ${ActiveTab=== "top" ? "active" : ""}`} id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-top" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Top</button>
                                </li>
                                <li className="nav-item" role="presentation" onClick={()=>{handleClickTab("special")}}>
                                    <button  className={`nav-link ${ActiveTab=== "special" ? "active" : ""}`} id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-special" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Special</button>
                                </li>
                            </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-new" role="tabpanel"
                                        aria-labelledby="pills-home-tab" tabIndex="0">
                                        {
                                            ProductListByRemark === null ? <ProductLoader /> : (
                                                <div className="container">
                                                    <div className="row">
                                                        {
                                                            ProductListByRemark.map((item, index) => {

                                                                let price = <p className="bodyMedium text-dark my-1">Price: ${item['price']}</p>;
                                                                if (item['discount'] === true) {
                                                                    price = <p className="bodyMedium text-dark my-1">Price:<strike>${item['price']}</strike> ${item['discountPrice']} </p>
                                                                }


                                                                return (

                                                                    <div key={index}
                                                                        className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                                                        <Link to={`/producDetails/${item['_id']}`}
                                                                            className="card shadow-sm h-100 rounded-3 bg-white">
                                                                            <img className="w-100 rounded-top-2"
                                                                                src={item['image']} alt="img" />
                                                                            <div className="card-body">
                                                                                <p className="bodySmal text-secondary my-1">{item['title']}</p>
                                                                                {price}
                                                                                <StarRatings rating={parseFloat(item['star'])}
                                                                                    starRatedColor="red"
                                                                                    starDimension="15px"
                                                                                    starSpacing="2px" />
                                                                            </div>
                                                                        </Link>
                                                                    </div>
                                                                )
                                                            })
                                                        }

                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="tab-pane fade" id="pills-trending" role="tabpanel"
                                        aria-labelledby="pills-profile-tab" tabIndex="0">
                                        {
                                            ProductListByRemark === null ? <ProductLoader /> : (
                                                <div className="container">
                                                    <div className="row">
                                                        {
                                                            ProductListByRemark.map((item, index) => {

                                                                let price = <p className="bodyMedium text-dark my-1">Price: ${item['price']}</p>;
                                                                if (item['discount'] === true) {
                                                                    price = <p className="bodyMedium text-dark my-1">Price:<strike>${item['price']}</strike> ${item['discountPrice']} </p>
                                                                }


                                                                return (

                                                                    <div key={index}
                                                                        className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                                                        <Link to={`/producDetails/${item['_id']}`}
                                                                            className="card shadow-sm h-100 rounded-3 bg-white">
                                                                            <img className="w-100 rounded-top-2"
                                                                                src={item['image']} alt="img" />
                                                                            <div className="card-body">
                                                                                <p className="bodySmal text-secondary my-1">{item['title']}</p>
                                                                                {price}
                                                                                <StarRatings rating={parseFloat(item['star'])}
                                                                                    starRatedColor="red"
                                                                                    starDimension="15px"
                                                                                    starSpacing="2px" />
                                                                            </div>
                                                                        </Link>
                                                                    </div>
                                                                )
                                                            })
                                                        }

                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="tab-pane fade" id="pills-popular" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                                        {
                                            ProductListByRemark === null ? <ProductLoader /> : (
                                                <div className="container">
                                                    <div className="row">
                                                        {
                                                            ProductListByRemark.map((item, index) => {

                                                                let price = <p className="bodyMedium text-dark my-1">Price: ${item['price']}</p>;
                                                                if (item['discount'] === true) {
                                                                    price = <p className="bodyMedium text-dark my-1">Price:<strike>${item['price']}</strike> ${item['discountPrice']} </p>
                                                                }


                                                                return (

                                                                    <div key={index}
                                                                        className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                                                        <Link to={`/producDetails/${item['_id']}`}
                                                                            className="card shadow-sm h-100 rounded-3 bg-white">
                                                                            <img className="w-100 rounded-top-2"
                                                                                src={item['image']} alt="img" />
                                                                            <div className="card-body">
                                                                                <p className="bodySmal text-secondary my-1">{item['title']}</p>
                                                                                {price}
                                                                                <StarRatings rating={parseFloat(item['star'])}
                                                                                    starRatedColor="red"
                                                                                    starDimension="15px"
                                                                                    starSpacing="2px" />
                                                                            </div>
                                                                        </Link>
                                                                    </div>
                                                                )
                                                            })
                                                        }

                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="tab-pane fade" id="pills-top" role="tabpanel"
                                        aria-labelledby="pills-disabled-tab"
                                        tabIndex="0">
                                        {
                                            ProductListByRemark === null ? <ProductLoader /> : (
                                                <div className="container">
                                                    <div className="row">
                                                        {
                                                            ProductListByRemark.map((item, index) => {

                                                                let price = <p className="bodyMedium text-dark my-1">Price: ${item['price']}</p>;
                                                                if (item['discount'] === true) {
                                                                    price = <p className="bodyMedium text-dark my-1">Price:<strike>${item['price']}</strike> ${item['discountPrice']} </p>
                                                                }


                                                                return (

                                                                    <div key={index}
                                                                        className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                                                        <Link to={`/producDetails/${item['_id']}`}
                                                                            className="card shadow-sm h-100 rounded-3 bg-white">
                                                                            <img className="w-100 rounded-top-2"
                                                                                src={item['image']} alt="img" />
                                                                            <div className="card-body">
                                                                                <p className="bodySmal text-secondary my-1">{item['title']}</p>
                                                                                {price}
                                                                                <StarRatings rating={parseFloat(item['star'])}
                                                                                    starRatedColor="red"
                                                                                    starDimension="15px"
                                                                                    starSpacing="2px" />
                                                                            </div>
                                                                        </Link>
                                                                    </div>
                                                                )
                                                            })
                                                        }

                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="tab-pane fade" id="pills-special" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex="0">
                                        {
                                            ProductListByRemark === null ? <ProductLoader /> : (
                                                <div className="container">
                                                    <div className="row">
                                                        {
                                                            ProductListByRemark.map((item, index) => {

                                                                let price = <p className="bodyMedium text-dark my-1">Price: ${item['price']}</p>;
                                                                if (item['discount'] === true) {
                                                                    price = <p className="bodyMedium text-dark my-1">Price:<strike>${item['price']}</strike> ${item['discountPrice']} </p>
                                                                }


                                                                return (

                                                                    <div key={index}
                                                                        className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                                                        <Link to={`/producDetails/${item['_id']}`}
                                                                            className="card shadow-sm h-100 rounded-3 bg-white">
                                                                            <img className="w-100 rounded-top-2"
                                                                                src={item['image']} alt="img" />
                                                                            <div className="card-body">
                                                                                <p className="bodySmal text-secondary my-1">{item['title']}</p>
                                                                                {price}
                                                                                <StarRatings rating={parseFloat(item['star'])}
                                                                                    starRatedColor="red"
                                                                                    starDimension="15px"
                                                                                    starSpacing="2px" />
                                                                            </div>
                                                                        </Link>
                                                                    </div>
                                                                )
                                                            })
                                                        }

                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


};

export default ProductsRemarks;