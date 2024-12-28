// eslint-disable-next-line no-unused-vars
import React from 'react';
import ImageGallery from "react-image-gallery"
import 'react-image-gallery/styles/css/image-gallery.css'
import ProductStore from "../../store/ProductStore.js";
const ProductImages = () => {
    const {ProductDetail}=ProductStore();
    let images=[
        {original:ProductDetail[0]['Details']['img1'], thumbnail: ProductDetail[0]['Details']['img1']},
        {original:ProductDetail[0]['Details']['img2'], thumbnail: ProductDetail[0]['Details']['img2']},
        {original:ProductDetail[0]['Details']['img3'], thumbnail: ProductDetail[0]['Details']['img3']},
        {original:ProductDetail[0]['Details']['img4'], thumbnail: ProductDetail[0]['Details']['img4']},
        {original:ProductDetail[0]['Details']['img5'], thumbnail: ProductDetail[0]['Details']['img5']},
        {original:ProductDetail[0]['Details']['img6'], thumbnail: ProductDetail[0]['Details']['img6']},
        {original:ProductDetail[0]['Details']['img7'], thumbnail: ProductDetail[0]['Details']['img7']},
        {original:ProductDetail[0]['Details']['img8'], thumbnail: ProductDetail[0]['Details']['img8']},
    ]
    return (
        <div>
            <ImageGallery  autoPlay={true} items={images} showBullets={true} />  {/*thumbnailPosition={"left"} disableSwipe={true*/}
        </div>
    );
};

export default ProductImages;