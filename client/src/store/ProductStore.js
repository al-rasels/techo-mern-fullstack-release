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

  ListProduct: null,
  ListByBrandRequest: async (BrandID) => {
    try {
      set({ ListProduct: null });
      const res = await axios.get(`/api/v1/ProductListByBrand/${BrandID}`);
      if (res.data["status"] === "success") {
        set({ ListProduct: res.data["data"] });
      }
    } catch (error) {
      console.error(error);
    }
  },
  ListByCategoryRequest: async (CategoryID) => {
    try {
      set({ ListProduct: null });
      const res = await axios.get(
        `/api/v1/ProductListByCategory/${CategoryID}`
      );
      if (res.data["status"] === "success") {
        set({ ListProduct: res.data["data"] });
      }
    } catch (error) {
      console.error(error);
    }
  },
  ListByKeywordRequest: async (Keyword) => {
    try {
      set({ ListProduct: null });
      const res = await axios.get(`/api/v1/ProductListByKeyword/${Keyword}`);
      if (res.data["status"] === "success") {
        set({ ListProduct: res.data["data"] });
      }
    } catch (error) {
      console.error(error);
    }
  },
  ListByFilterRequest: async (postBody) => {
    try {
      set({ ListProduct: null });
      const res = await axios.post(`/api/v1/ProductListByFilter`, postBody);
      if (res.data["status"] === "success") {
        set({ ListProduct: res.data["data"] });
      }
    } catch (error) {
      console.error(error);
    }
  },

  SearchKeyword: "",
  SetSearchKeyword: async (keyword) => set({ SearchKeyword: keyword }),

  Details: null,
  DetailsRequest: async (productID) => {
    try {
      set({ Details: null });
      const res = await axios.get(`/api/v1/ProductDetails/${productID}`);
      if (res.data["status"] === "success") {
        set({ Details: res.data["data"] });
      }
    } catch (error) {
      console.error(error);
    }
  },
  ReviewList: null,
  ReviewListRequest: async (reviewID) => {
    try {
      set({ ReviewList: null });
      const res = await axios.get(`/api/v1/ProductReviewList/${reviewID}`);
      if (res.data["status"] === "success") {
        set({ ReviewList: res.data["data"] });
      }
    } catch (error) {
      console.error(error);
    }
  },
}));

export default ProductStore;
