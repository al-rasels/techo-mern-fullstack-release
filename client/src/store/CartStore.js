import { create } from "zustand";
import axios from "axios";
import { unauthorized } from "../utility/utility.js";
import toast from "react-hot-toast";

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

      if (PostBody.color == "" && PostBody.size == "") {
        toast.error("Select Size And Color");
        return false;
      }
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
  CartTotal: 0,
  CartVatTotal: 0,
  CartPayableTotal: 0,
  CartListRequest: async () => {
    try {
      const res = await axios.get(`/api/v1/CartList`);
      set({ CartCount: res.data["data"].length });
      set({ CartList: res.data["data"] });

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
      let res = await axios.get(`/api/v1/CreateInvoice`);
      window.location.href = res.data["data"]["GatewayPageURL"];
    } catch (e) {
      unauthorized(e.response.status);
    } finally {
      set({ isCartSubmit: false });
    }
  },

  InvoiceList: null,
  InvoiceListRequest: async () => {
    try {
      let res = await axios.get(`/api/v1/InvoiceList`);
      set({ InvoiceList: res.data["data"] });
    } catch (e) {
      unauthorized(e.response.status);
    }
  },

  InvoiceDetails: null,
  InvoiceDetailsRequest: async (id) => {
    try {
      let res = await axios.get(`/api/v1/InvoiceProductList/${id}`);
      set({ InvoiceDetails: res.data["data"] });
    } catch (e) {
      unauthorized(e.response.status);
    }
  },
}));

export default CartStore;
