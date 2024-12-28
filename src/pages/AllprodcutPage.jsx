// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import Allproduct from "../components/product/Allproduct.jsx";
import productStore from "../store/ProductStore.js";

const AllprodcutPage = () => {
    const {allProduct}=productStore();
    useEffect(() => {
        (async ()=>{
            await allProduct();
        })()
    }, [allProduct]);
    return (
        <Layout>
            <Allproduct/>
        </Layout>
    );
};

export default AllprodcutPage;