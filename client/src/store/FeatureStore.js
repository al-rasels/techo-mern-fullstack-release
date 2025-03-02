import { create } from "zustand";
import axios from "axios";

// Feature List API
const FeatureStore = create((set) => ({
  FeatureList: null,
  FeatureListRequest: async () => {
    try {
      const res = await axios.get(`/api/v1/FeaturesList`);
      if (res.data["status"] === "success") {
        set({ FeatureList: res.data["data"] });
      }
    } catch (error) {
      console.error(error);
    }
  },

  LegalDetails: null,
  LegalDetailsRequest: async (type) => {
    try {
      set({ LegalDetails: null });
      const res = await axios.get(`/api/v1/LegalDetails/${type}`);
      if (res.data["status"] === "success") {
        set({ LegalDetails: res.data["data"] });
      }
    } catch (error) {
      console.error(error);
    }
  },
}));

export default FeatureStore;
