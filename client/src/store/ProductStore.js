import { create } from "zustand";
import axios from "axios";

const ProductStore = create((set) => ({
  // Brand List API
  BrandList: null,
  BrandListRequest: async () => {
    try {
      const res = await axios.get(`/api/v1/ProductBrandList`);

      if (res.data["status"] === "success") {
        set({ BrandList: res.data["data"] });
      }
    } catch (error) {
      console.error(error);
    }
  },

  // Category List API
  CategoryList: null,
  CategoryListRequest: async () => {
    try {
      const res = await axios.get(`/api/v1/ProductCategoryList`);
      if (res.data["status"] === "success") {
        set({ CategoryList: res.data["data"] });
      }
    } catch (error) {
      console.error(error);
    }
  },

  // Slider List API
  SliderList: null,
  SliderListRequest: async () => {
    try {
      const res = await axios.get(`/api/v1/ProductSliderList`);
      if (res.data["status"] === "success") {
        set({ SliderList: res.data["data"] });
      }
    } catch (error) {
      console.error(error);
    }
  },
  // List By Remark API
  ListByRemark: null,
  ListByRemarkRequest: async (Remark) => {
    console.log(Remark);
    try {
      set({ ListByRemark: null });
      const res = await axios.get(`/api/v1/ProductListByRemark/${Remark}`);
      if (res.data["status"] === "success") {
        set({ ListByRemark: res.data["data"] });
      }
    } catch (error) {
      console.error(error);
    }
  },
}));

export default ProductStore;
