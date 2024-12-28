// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react';
import WishStore from "../../store/WishStore.js";
import NoData from "../layout/No-Data.jsx";
import StarRatings from "react-star-ratings/build/star-ratings.js";
import {Link} from "react-router-dom";
import ProductLoader from "../../skeletonLoader/ProductLoader.jsx";

const WishList = () => {
    // get api
    const {wishListRequestRead, wishlist, RemoveWishListRequest} = WishStore();

    useEffect(() => {
        (async () => {
            await wishListRequestRead();
        })();
    }, []);

    const removeWish = async (productID) => {
        await RemoveWishListRequest(productID);
        await wishListRequestRead();
    };

    if (wishlist === null) {
        return <ProductLoader/>;
    } else if (wishlist.length === 0) {
        return <NoData text='WISH'/>;
    } else {
        return (
            <div className='container-md mt-3'>
                <div className="row">
                    {wishlist.map((item, i) => {
                        let price = (
                            <p className="bodyMedium text-dark my-1">Price: ${item['product']['price']}</p>
                        );
                        if (item['product']['discount'] === true) {
                            price = (
                                <p className="bodyMedium text-dark my-1">
                                    Price: <strike>${item['product']['price']}</strike> ${item['product']['discountPrice']}
                                </p>
                            );
                        }

                        return (
                            <div key={i} className="col-md-6 col-lg-4 col-xl-3 p-2">
                                <div className="card shadow-sm h-100">
                                    <img className="w-100 rounded-top-2" src={item['product']['image']} alt="wishImg"/>
                                    <div className="card-body">
                                        <p className="bodySmall text-secondary my-1">{item['product']['title']}</p>
                                        {price}
                                        <StarRatings
                                            rating={parseFloat(item['product']['star'])}
                                            starRatedColor="red"
                                            starDimension="15px"
                                            starSpacing="2px"
                                        />
                                        <p className='mt-3'>
                                            <button onClick={async () => { await removeWish(item['productID']) }}
                                                    className='btn btn-outline-danger btn-sm'>
                                                Remove
                                            </button>
                                            <Link className='btn mx-2 btn-outline-success btn-sm'
                                                  to={`/producDetails/${item['productID']}`}>
                                                Details
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
};

export default WishList;
