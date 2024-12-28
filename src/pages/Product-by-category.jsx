// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react';
import ProductStore from "../store/ProductStore.js";
import {useParams} from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import ProductList from "../components/product/Product-list.jsx";


const ProductByCategory = () => {
    const {ProductBYCategoryRequest}=ProductStore();
    const {id}=useParams();
    useEffect(() => {
        (async ()=>{
            await ProductBYCategoryRequest(id)
        })()
    }, []);
    return (
        <Layout>
          <ProductList/>
        </Layout>
    );

};

export default ProductByCategory;