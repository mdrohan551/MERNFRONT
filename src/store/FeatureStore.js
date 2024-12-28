import create from "zustand";
import axios from "axios";

const FeatureStore = create((set) => ({
    FeatureList: null,
    FeaturelistRequest: async () => {
        try {
            let res = await axios.get(`/api/v1/featureslist`);
            if (res.data['status'] === 'success') {
                set({ FeatureList: res.data['data'] });
            }
        } catch (error) {
            console.error("Error fetching feature list:", error);
        }
    },

    LegalsDetails: null,
    LegalsDetailsRequest: async (type) => {
        try {
            set({ LegalsDetails: null });
            let res = await axios.get(`/api/v1/legalsDetails/${type}`);
            if (res.data['status'] === 'success') {
                set({ LegalsDetails: res.data['data'] });
            }
        } catch (error) {
            console.error("Error fetching legal details:", error);
        }
    },
}));

export default FeatureStore;
