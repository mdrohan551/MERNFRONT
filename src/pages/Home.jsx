// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout.jsx";
import Brands from "../components/product/Brands.jsx";
import ProductStore from "../store/ProductStore.js";
import FeatureStore from "../store/FeatureStore.js";
import Slider from "../components/product/Slider.jsx";
import Features from "../components/features/Features.jsx";
import Categories from "../components/product/Categories.jsx";
import ProductsRemarks from "../components/product/ProductsRemarks.jsx";


const Home = () => {
    const {BrandListRequest,CategoryListRequest,SliderListRequest,ProductListByRemarkRequest}=ProductStore();
    const {FeaturelistRequest}=FeatureStore();


    useEffect(() => {
        (async ()=>{
              await SliderListRequest();
              await FeaturelistRequest();
              await CategoryListRequest();
              await ProductListByRemarkRequest('new');
              await BrandListRequest();
        })()
    }, []);









    return (
        <Layout>
            <Slider/>
            <Features/>
            <Categories/>
            <ProductsRemarks/>
            <Brands/>
        </Layout>
    );
};

export default Home;