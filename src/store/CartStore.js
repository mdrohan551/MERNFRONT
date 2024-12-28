import create from 'zustand';

import { unauthorized } from "../utility/Utility.js";
import axios from "axios";

const CartStore = create((set) => ({
    isCartSubmit: false,
    CartForm: { productID: "", color: "", size: "" },
    CartFormOnChange: (name, value) => {
        set((state) => ({
            CartForm: {
                ...state.CartForm,
                [name]: value,
            },
        }));
    },
    CartSaveRequest: async (productID, PostBody, Quantity) => {
        try {
            set({ isCartSubmit: true });
            PostBody.productID = productID;
            PostBody.qty = Quantity;
            let res = await axios.post(`/api/v1/addToCartList`, PostBody); // axios instance দিয়ে API কল
            return res.data["status"] === "success";
        } catch (e) {
            unauthorized(e.response.status);
        } finally {
            set({ isCartSubmit: false });
        }
    },

    cartList: null,
    cartCount: 0,
    cartTotal: 0,
    cartVatTotal: 0,
    cartPayabletotal: 0,
    CartListRequestRead: async () => {
        try {
            let res = await axios.get(`/api/v1/cartList`); // axios instance দিয়ে API কল
            set({ cartList: res.data["data"] });
            set({ cartCount: res.data["data"].length });

            let total = 0;
            let vat = 0;
            let payable = 0;
            res.data["data"].forEach((item) => {
                if (item["product"]["discount"] === true) {
                    total += parseFloat(item["qty"]) * parseInt(item["product"]["discountPrice"]);
                } else {
                    total += parseFloat(item["qty"]) * parseInt(item["product"]["price"]);
                }
                vat = total * 0.05;
                payable = vat + total;
                set({ cartTotal: total });
                set({ cartVatTotal: vat });
                set({ cartPayabletotal: payable });
            });
        } catch (e) {
            unauthorized(e.response.status);
        } finally {
            set({ isCartSubmit: false });
        }
    },
    RemoveCartListRequest: async (cartId) => {
        try {
            set({ cartList: null });
            await axios.post(`/api/v1/removedCartList`, { "_id": cartId }); // axios instance দিয়ে API কল
        } catch (e) {
            unauthorized(e.response.status);
        }
    },
    createInvoiceRequest: async () => {
        try {
            set({ isCartSubmit: true });
            let res = await axios.get(`/api/v1/CreateInvoice`); // axios instance দিয়ে API কল
            window.location.href = res.data["data"]["GatewayPageURL"];
        } catch (e) {
            unauthorized(e.response.status);
        } finally {
            set({ isCartSubmit: false });
        }
    },
    InvoiceList: null,
    InvoiceListRequestRead: async () => {
        try {
            let res = await axios.get(`/api/v1/InvoiceList`); // axios instance দিয়ে API কল
            set({ InvoiceList: res.data["data"] });
        } catch (e) {
            unauthorized(e.response.status);
        }
    },
    InvoiceDetails: null,
    InvoiceProductDetails: async (id) => {
        try {
            let res = await axios.get(`/api/v1/InvoiceProductList/${id}`); // axios instance দিয়ে API কল
            set({ InvoiceDetails: res.data["data"] });
        } catch (e) {
            unauthorized(e.response.status);
        }
    },
}));

export default CartStore;
