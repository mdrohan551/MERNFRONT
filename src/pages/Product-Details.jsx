// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import Details from "../components/product/Details.jsx";
import {useParams} from "react-router-dom";
import Brands from "../components/product/Brands.jsx";
import ProductStore from "../store/ProductStore.js";

const ProductDetails = () => {
    const {ProductDetailRequest,ProductReviewRequest,BrandListRequest,ProductBrandList}=ProductStore()
    const {id}=useParams();

    useEffect(() => {
        (async ()=>{
           await ProductDetailRequest(id);
           await ProductReviewRequest(id);
            ProductBrandList===null ? await BrandListRequest() : null
        })()
    }, [id]);








    return (
     <Layout>
         <Details/>
         <Brands/>
     </Layout>
    );
};

export default ProductDetails;