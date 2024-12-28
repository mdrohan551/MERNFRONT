import create from "zustand";
import axios from "axios";

const ProductStore = create((set) => ({
    // Brand list all item
    ProductBrandList: null,
    BrandListRequest: async () => {
        let res = await axios.get(`/api/v1/productBrandList`);
        if (res.data['status'] === 'success') {
            set({ ProductBrandList: res.data['data'] });
        }
    },

    CategoryList: null,
    CategoryListRequest: async () => {
        let res = await axios.get(`/api/v1/productcategoriList`);
        if (res.data['status'] === 'success') {
            set({ CategoryList: res.data['data'] });
        }
    },

    SliderList: null,
    SliderListRequest: async () => {
        let res = await axios.get(`/api/v1/productsliderList`);
        if (res.data['status'] === 'success') {
            set({ SliderList: res.data['data'] });
        }
    },

    ProductListByRemark: null,
    ProductListByRemarkRequest: async (remark) => {
        set({ ProductListByRemark: null });
        let res = await axios.get(`/api/v1/productremark/${remark}`);
        if (res.data['status'] === 'success') {
            set({ ProductListByRemark: res.data['data'] });
        }
    },

    // Product brand all product
    listProduct: null,
    ProductBYBrandsRequest: async (BrandID) => {
        set({ listProduct: null });
        let res = await axios.get(`/api/v1/productlistByBrand/${BrandID}`);
        if (res.data['status'] === "success") {
            set({ listProduct: res.data['data'] });
        }
    },

    allProduct: async () => {
        let res = await axios.get(`/api/v1/productAll`);
        if (res.data['status'] === 'success') {
            set({ listProduct: res.data['data'] });
        }
    },

    ProductBYCategoryRequest: async (categoryID) => {
        set({ listProduct: null });
        let res = await axios.get(`/api/v1/productlistBycategori/${categoryID}`);
        if (res.data['status'] === "success") {
            set({ listProduct: res.data['data'] });
        }
    },

    // Filter store
    ProductFilterRequest: async (postbody) => {
        set({ listProduct: null });
        let res = await axios.post(`/api/v1/ProductListByFilter`, postbody);
        if (res.data['status'] === "success") {
            set({ listProduct: res.data['data'] });
        }
    },

    // Search product
    listByKeywordRequest: async (keyword) => {
        set({ listProduct: null });
        let res = await axios.get(`/api/v1/productlistBykeyword/${keyword}`);
        if (res.data['status'] === "success") {
            set({ listProduct: res.data['data'] });
        }
    },

    SearchKeyword: "",
    SetSearchKeyword: async (keyword) => {
        set({ SearchKeyword: keyword });
    },

    // Product detail
    ProductDetail: null,
    ProductDetailRequest: async (ProductID) => {
        set({ ProductDetail: null });
        let res = await axios.get(`/api/v1/producDetails/${ProductID}`);
        if (res.data['status'] === "success") {
            set({ ProductDetail: res.data['data'] });
        }
    },

    // Product reviews
    ReviewList: null,
    ReviewCount: null,
    mostCommonRating: 0,
    ProductReviewRequest: async (id) => {
        set({
            ReviewList: null,
            ReviewCount: 0,
            mostCommonRating: 0,
        });

        let res = await axios.get(`/api/v1/productReviewList/${id}`);
        if (res.data['status'] === "success") {
            const reviews = res.data['data'];
            const totalReviews = reviews.length;

            // Count the frequency of each rating
            const ratingCount = {};
            reviews.forEach((AllReview) => {
                const rating = parseFloat(AllReview.rating);
                ratingCount[rating] = (ratingCount[rating] || 0) + 1;
            });

            // Find the most common rating
            const objTOarrayAllKeys = Object.keys(ratingCount);
            let mostCommonRating = objTOarrayAllKeys.reduce((a, b) =>
                ratingCount[a] > ratingCount[b] ? a : b
            );

            // Update the review and rating
            set({
                ReviewList: reviews,
                ReviewCount: totalReviews,
                mostCommonRating: parseFloat(mostCommonRating),
            });
        }
    },
}));

export default ProductStore;
