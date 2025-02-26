import { create } from "zustand";
import axios from "axios";
import { unauthorized } from "../utility/utility.js";

// Feature List API
const WishStore = create((set) => ({
  isWishSubmit: false,

  WishSaveRequest: async (productID) => {
    try {
      set({ isWishSubmit: true });

      const res = await axios.post(`/api/v1/SaveWishList`, {
        productID: productID,
      });

      return res.data["status"] === "success";
    } catch (err) {
      unauthorized(err.response.status);
    } finally {
      set({ isWishSubmit: false });
    }
  },

  WishList: null,
  WishCount: 0,
  WishListRequest: async () => {
    try {
      const res = await axios.get(`/api/v1/WishList`);

      set({ WishList: res.data["data"] });
      set({ WishCount: res.data["data"].length });
    } catch (err) {
      unauthorized(err.response.status);
    }
  },
  RemoveWishListRequest: async (productID) => {
    try {
      const res = await axios.post(`/api/v1/RemoveWishList`, {
        productID: productID,
      });
      return res.data["status"] === "success";
    } catch (err) {
      unauthorized(err.response.status);
    }
  },
}));

export default WishStore;
