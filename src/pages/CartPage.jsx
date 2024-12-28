// eslint-disable-next-line no-unused-vars
import React from 'react';
import Layout from "../components/layout/Layout.jsx";
import CartList from "../components/Cart/CartList.jsx";
import Categories from "../components/product/Categories.jsx";

const CartPage = () => {
    return (
      <Layout>
          <CartList/>
          <Categories/>
      </Layout>
    );
};

export default CartPage;