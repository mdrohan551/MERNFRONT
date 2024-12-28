import create from 'zustand';
import axios from "axios";
import { unauthorized } from '../utility/Utility';

const ReviewStore = create((set) => ({




    isReviewSubmit: false,
    ReviewFormData: { productID: "", des: "", rating: "1" }, // স্টেট সংজ্ঞায়িত

    // ইনপুট পরিবর্তনের জন্য ফাংশন
    ReviewFormOnchange: (name,value) => {
        set((state) => ({
            ReviewFormData: {
                ...state.ReviewFormData,
                [name]: value
            }
        }));
    },

    // রিভিউ সংরক্ষণের জন্য ফাংশন
    ReviewsaveRequest: async (postBody) => {
        try {
            set({ isReviewSubmit: true }); // সাবমিট স্টেট সেট করা
            let res = await axios.post(`/api/v1/CreateReview`,postBody);
            return res.data['status'] === 'success';
        } catch (err) {
            unauthorized(err.response.status); // এ্যারর হ্যান্ডলিং
        } finally {
            set({ isReviewSubmit: false, }); // সাবমিট শেষ হওয়ার পর স্টেট রিসেট
        }
    }
}));


export default ReviewStore;