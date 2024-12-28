// eslint-disable-next-line no-unused-vars
import React from 'react';
import ProductStore from "../../store/ProductStore.js";
import BrandLoader from "../../skeletonLoader/BrandLoader.jsx";
import {Link} from "react-router-dom";

const Brands = () => {
    const {ProductBrandList}=ProductStore();
    if(ProductBrandList===null){
        return <BrandLoader/>
    }
    else {

        return (
            <div className="section">
                <div className="container-md">
                    <div className="row">
                        <h1 className="headline-4 text-center my-2 p-0">Top Brands</h1>
                        <span
                            className="bodySmal mb-5 text-center">Explore a World of Choices Across Our Most Popular <br
                        />Shopping Categories </span>
                        {
                            ProductBrandList.map((item,i)=>{
                                return (
                                    <div key={i} className="col-6 col-lg-8r text-center col-md-8r p-2">
                                        <Link to={`/productlistByBrand/${item['_id']}`} className="card h-100 rounded-3 bg-white">
                                            <div className="card-body">
                                                <img className="w-50" src={item['brandImg']} alt="brnadimg"/>
                                                <p className="bodySmal mt-3">{item['brandName']} </p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }


};

export default Brands;