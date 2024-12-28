// eslint-disable-next-line no-unused-vars
import React from 'react';
import Layout from "../components/layout/Layout.jsx";
import Brands from "../components/product/Brands.jsx";
import WishList from "../components/wish/WishList.jsx";

const WishPage = () => {
    return (
      <Layout>
          <WishList />
          <Brands/>
      </Layout>
    );
};

export default WishPage;