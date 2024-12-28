import create from "zustand";
import axios from "axios";
import {unauthorized} from "../utility/Utility.js";


const WishStore = create((set)=>({
    isWishSubmit:false,
    WishSaveRequest:async (productID)=>{
        try {
            set({isWishSubmit:true});
            let res = await axios.post(`/api/v1/createWish`,{productID:productID})
            return res.data['status']==='success';
        }catch (e) {
            unauthorized(e.response.status)
        }
        finally {
            set({isWishSubmit:false});
        }
    },
    wishlist:null,
    wishCount:0,
    wishListRequestRead:async ()=>{
        try {
           let res=await axios.get(`/api/v1/wishList`);
           set({wishlist:res.data['data']});
           set({wishCount:(res.data['data']).length})
        }catch (e) {
            unauthorized(e.response.status)
        }

    },
    RemoveWishListRequest:async(productID)=>{
        try {
            set({wishlist:null});
            await axios.post(`/api/v1/RemovedWish`,{"productID":productID});

        }catch (e) {
            unauthorized(e.response.status)
        }
    }

}));
export default WishStore;