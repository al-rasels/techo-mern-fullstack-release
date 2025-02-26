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
      console.log(res.data["data"]);

      return res.data["status"] === "success";
    } catch (err) {
      unauthorized(err.response.status);
    } finally {
      set({ isCartSubmit: false });
    }
  },
  CartList: null,
  CartCount: 0,
  CartTotal: 0,
  CartVatTotal: 0,
  CartPayableTotal: 0,
  CartListRequest: async () => {
    try {
      const res = await axios.get(`/api/v1/CartList`);
      set({ CartList: res.data["data"] });
      set({ CartCount: res.data["data"].length });
      console.log(res.data["data"]);
      let total = 0;
      let vat = 0;
      let payable = 0;
      res.data["data"].forEach((item) => {
        if (item["product"]["discount"] === true) {
          total =
            total +
            parseInt(item["qty"]) * parseInt(item["product"]["discountPrice"]);
        } else {
          total =
            total + parseInt(item["qty"]) * parseInt(item["product"]["price"]);
        }
      });
      vat = total * 0.05;
      payable = total + vat;
      set({ CartTotal: total });
      set({ CartVatTotal: vat });
      set({ CartPayableTotal: payable });
    } catch (err) {
      unauthorized(err.response.status);
    }
  },
  RemoveCartListRequest: async (cartID) => {
    try {
      set({ CartList: null });
      const res = await axios.post(`/api/v1/RemoveCartList/`, { _id: cartID });
      return res.data["status"] === "success";
    } catch (err) {
      unauthorized(err.response.status);
    }
  },
  CreateInvoiceRequest: async () => {
    try {
      set({ isCartSubmit: true });
      const res = await axios.get(`/api/v1/CreateInvoice`);
      console.log(res.data["data"]);

      window.location.href = res.data["data"]["redirectGatewayURL"];
      return res.data["status"] === "success";
    } catch (err) {
      unauthorized(err.response.status);
    } finally {
      set({ isCartSubmit: false });
    }
  },

  InvoiceDetails: null,
  InvoiceDetailsRequest: async (id) => {
    try {
      const res = await axios.get(`/api/v1/InvoiceProductList/${id}`);
      set({ InvoiceDetails: res.data["data"] });
    } catch (err) {
      unauthorized(err.response.status);
    }
  },
}));

export default CartStore;
