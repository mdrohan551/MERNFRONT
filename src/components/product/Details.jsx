// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import ProductImages from "./ProductImages.jsx";
import DetailsLoader from "../../skeletonLoader/DetailsLoader.jsx";
import ProductStore from "../../store/ProductStore.js";
import parse from 'html-react-parser';
import Review from "./Review.jsx";
// import toast from "react-hot-toast";
import {toast} from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import CartButtonSubmite from "../Cart/CartButtonSubmite.jsx";
import CartStore from "../../store/CartStore.js";
import UserStore from "../../store/UserStore.js";
import {useNavigate} from "react-router-dom";
import WishButtonSubmit from "../wish/WishButtonSubmit.jsx";
import WishStore from "../../store/WishStore.js";
import StarRatings from "react-star-ratings/build/star-ratings.js";


const Details = () => {
// page a asar por upore scroll auto hobe
    let auto = () => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,           // স্ক্রল পজিশন (উপরে)
            });
            

        }, 20); // 3000ms বা 3 সেকেন্ড পরে স্ক্রল হবে
    };


    
    // product condition and loader shower
    const redirect = useNavigate()
    const {ProductDetail, ReviewCount, mostCommonRating} = ProductStore();
    const {isLogin} = UserStore();

    const {CartFormOnChange, CartForm, CartSaveRequest, CartListRequestRead} = CartStore()
    const {WishSaveRequest, wishListRequestRead} = WishStore();

    const [Quantity, setQuantity] = useState(1);
    const increamentQuantity = () => {
        setQuantity(Quantity => Quantity + 1)
    }
    const decreamentQuantity = () => {
        if (Quantity > 1) {
            setQuantity(Quantity => Quantity - 1)
        }
    }

    const AddCart = async (productID) => {

        if (!isLogin()) {
            redirect('/login',)
        } else if (!CartForm.size || !CartForm.color) {
            toast.error("Please select size and color before adding to cart!");
            return;
        }
        let res = await CartSaveRequest(productID, CartForm, Quantity);
        if (res || isLogin()) {
            toast.success("Item added to cart successfully!");
            await CartListRequestRead();
        }

    }
// wish list request
    const AddWish = async (productID) => {
        let res = await WishSaveRequest(productID)
        if (res) {
            toast.success("Item added to wish successfully!");
            await wishListRequestRead();
        }
    }


    if (ProductDetail === null) {
        return (
            <DetailsLoader/>
        )
    } else {

        return (

            <div>
                <div>
                    <div className="container-md mt-2" onChange={auto()}>
                        <div className="row">
                            <div className="col-md-7 p-3">
                                <ProductImages/>
                            </div>
                            <div className="col-md-5 p-3">
                                <h4>{ProductDetail[0]['title']}</h4>
                                <p className="text-muted bodySmal my-1">Category:{ProductDetail[0]['category']['categoryName']}</p>
                                <p className="text-muted bodySmal my-1">Brand: {ProductDetail[0]['brand']['brandName']}</p>
                                <p className="bodySmal mb-2 mt-1"
                                   style={{fontSize: "16px"}}>shortDes:<b>{ProductDetail[0]['shortDes']}</b></p>
                                <p className="bodySmal mb-2 mt-1" style={{fontSize: "16px"}}>
                                 <span className="pt-5">
                                    <StarRatings
                                        rating={mostCommonRating} // সবচেয়ে বেশি দেখা রেটিং দেখান
                                        starRatedColor="red"
                                        starDimension="14px"
                                        starSpacing="3px"
                                    />
                                 </span>
                                    <span className="fs-6 p-2">({ReviewCount} Reviews)</span>
                                </p>


                                {
                                    ProductDetail[0]['discount'] === true ? (

                                        <span className="bodyMedium">Price:  <strike
                                            className="text-secondary">{ProductDetail[0]['price']}</strike> {ProductDetail[0]['discountPrice']} </span>
                                    ) : (
                                        <span className="bodyMedium">Price: {ProductDetail[0]['price']}</span>
                                    )
                                }

                                <div className="row">
                                    <div className="col-4 p-2">
                                        <label className="bodySmal">Size</label>
                                        <select value={CartForm.size} onChange={(e) => {
                                            CartFormOnChange('size', e.target.value)
                                        }} className="form-control my-2 form-select">
                                            <option value="">Size</option>
                                            {
                                                ProductDetail[0]['Details']['size'].split(",").map((item, i) => {
                                                    return <option value={item}>{item}</option>
                                                })
                                            }

                                        </select>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label className="bodySmal">Color</label>
                                        <select value={CartForm.color}
                                                onChange={(e) => CartFormOnChange('color', e.target.value)}
                                                className="form-control my-2 form-select">
                                            <option value=''>Color</option>
                                            {
                                                ProductDetail['0']['Details']['color'].split(",").map((item, i) => {
                                                    return (<option key={i} value={item}>{item}</option>)
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label className="bodySmal">Quantity</label>
                                        <div className="input-group my-2">
                                            <button onClick={decreamentQuantity}
                                                    className="btn btn-outline-secondary">-
                                            </button>
                                            <input value={Quantity} type="text"
                                                   className="form-control bg-light text-center" readOnly/>
                                            <button onClick={increamentQuantity}
                                                    className="btn btn-outline-secondary">+
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-4 p-2">
                                        <CartButtonSubmite onClick={async () => {
                                            AddCart(ProductDetail[0]['_id'])
                                        }} className="btn py-2 px-4 btn-success " text="Add to Cart"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <WishButtonSubmit onClick={async () => {
                                            AddWish(ProductDetail[0]['_id'])
                                        }} className="btn py-2 px-4 btn-success " text="Add to Wish"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="Speci-tab" data-bs-toggle="tab"
                                            data-bs-target="#Speci-tab-pane" type="button" role="tab"
                                            aria-controls="Speci-tab-pane" aria-selected="true">Specifications
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="Review-tab" data-bs-toggle="tab"
                                            data-bs-target="#Review-tab-pane"
                                            type="button" role="tab" aria-controls="Review-tab-pane"
                                            aria-selected="false">Review
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="Speci-tab-pane" role="tabpanel"
                                     aria-labelledby="Speci-tab" tabIndex="0">
                                    {
                                        parse(ProductDetail[0]['Details']['des'])

                                    }

                                </div>
                                <div className="tab-pane fade" id="Review-tab-pane" role="tabpanel"
                                     aria-labelledby="Review-tab" tabIndex="0">
                                    {/*<ul className="list-group list-group-flush"></ul>*/}
                                     <Review/>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
        
    }


};

export default Details;