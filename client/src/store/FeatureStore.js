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
}));

export default FeatureStore;
