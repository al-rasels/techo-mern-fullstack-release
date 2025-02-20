import { create } from "zustand";
import axios from "axios";
import { unauthorized } from "../utility/utility.js";

// Feature List API
const CartStore = create((set) => ({
  isCartSubmit: false,
  CartForm: { productID: "", color: "", size: "" },
  CartFormChange(name, value) {
    set((state) => ({
      CartForm: { ...state.CartForm, [name]: value },
    }));
  },

  CartSaveRequest: async (PostBody, productID, quantity) => {
    try {
      set({ isCartSubmit: true });
      PostBody.productID = productID;
      PostBody.qty = quantity;

      const res = await axios.post(`/api/v1/SaveCartList`, PostBody);

      return res.data["status"] === "success";
    } catch (err) {
      unauthorized(err.response.status);
    } finally {
      set({ isCartSubmit: false });
    }
  },
  CartList: null,
  CartCount: 0,
  CartListRequest: async () => {
    try {
      const res = await axios.get(`/api/v1/CartList`);
      set({ CartList: res.data["data"] });
      set({ CartCount: res.data["data"].length });
    } catch (err) {
      unauthorized(err.response.status);
    }
  },
}));

export default CartStore;
