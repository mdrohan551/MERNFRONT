// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import ProductStore from "../../store/ProductStore.js";
import ProductLoader from "../../skeletonLoader/ProductLoader.jsx";
import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings.js";

const ProductList = () => {
    const {listProduct,BrandListRequest,ProductBrandList,CategoryList,CategoryListRequest,ProductFilterRequest}=ProductStore();
    let [filter,setFilter]=useState({
        brandID:"",
        categoryID:"",
        priceMax:"",
        priceMin:""
    });
const inputOneChange=async (name,value)=>{
    setFilter((datas)=>({
        ...datas,
        [name]:value

    }))
}




    let auto = () => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,           // স্ক্রল পজিশন (উপরে)
            });

        }, 20); // 3000ms বা 3 সেকেন্ড পরে স্ক্রল হবে
    };

    useEffect(() => {

        (async ()=>{

            ProductBrandList===null ? BrandListRequest() : null;
            CategoryList===null ? CategoryListRequest() : null;
            let isEveryfilterProperyEmty=Object.values(filter).every(value => value==='' );
            !isEveryfilterProperyEmty ? await ProductFilterRequest(filter) : null

        })()




    }, [filter]);







    return (
        <div className="container mt-2" onChange={auto()}>
            <div className="row">
                <div className="col-md-3 p-2">
                    <div className="card vh-100 p-3 shadow-sm">
                        <label className="form-label mt-3">Brands</label>
                        <select value={filter.brandID} onChange={async (e)=>{inputOneChange("brandID",e.target.value)}} className="form-control form-select">
                            <option value="">choose Brand</option>
                            {
                                ProductBrandList!==null ? (
                                   ProductBrandList.map((item,index)=>{
                                       return (
                                           <option key={index} value={item['_id']}>{item['brandName']}</option>
                                       )
                                   })
                                ):<option>no list item</option>
                            }
                        </select>
                        <label className="form-label mt-3">Categories</label>
                        <select value={filter.categoryID} onChange={async (e)=>{inputOneChange("categoryID",e.target.value)}} className="form-control form-select">
                            <option value="">choose category</option>
                            {
                                CategoryList!==null ? (
                                    CategoryList.map((item,index)=>{
                                        return (
                                            <option key={index} value={item['_id']}>{item['categoryName']}</option>
                                        )
                                    })
                                ):<option>not found category</option>
                            }
                        </select>
                        <label className="form-label mt-3"> Maximum Price ${filter.priceMax}</label>
                        <input value={filter.priceMax} onChange={async (e)=>{inputOneChange("priceMax",e.target.value)}}  type="range" min={70} max={1000000} step={1000} className="form-range"/>
                        <label className="form-label mt-3"> Minimun Price ${filter.priceMin}</label>
                        <input value={filter.priceMin} onChange={async (e)=>{inputOneChange("priceMin",e.target.value)}} type="range" min={70} max={1000000} step={1000} className="form-range"/>
                    </div>
                </div>
                <div className="col-md-9 p-2">
                    <div className="container">
                        <div className="row">

                            {
                                listProduct===null?<ProductLoader/>: (
                                    <div className="container">
                                        <div className="row">
                                            {
                                                listProduct.map((item,index)=> {

                                                    let price = <p className="bodyMedium text-dark my-1">Price: ${item['price']}</p>;
                                                    if (item['discount']===true){
                                                        price =<p className="bodyMedium text-dark my-1">Price:<strike>${item['price']}</strike> ${item['discountPrice']} </p>
                                                    }


                                                    return (

                                                        <div key={index}
                                                             className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                                            <Link to={`/producDetails/${item['_id']}`}
                                                                  className="card shadow-sm h-100 rounded-3 bg-white">
                                                                <img className="w-100 rounded-top-2"
                                                                     src={item['image']} alt="img"/>
                                                                <div className="card-body">
                                                                    <p className="bodySmal text-secondary my-1">{item['title']}</p>
                                                                    {price}
                                                                    <StarRatings rating={parseFloat(item['star'])}
                                                                                 starRatedColor="red"
                                                                                 starDimension="15px"
                                                                                 starSpacing="2px"/>
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
    );
};
window.scrollTo(0, 0); // এটি সরাসরি পেজের টপে নিয়ে যাবে
export default ProductList;