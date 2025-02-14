import { create } from "zustand";
import axios from "axios";
import { getEmail, setEmail } from "../utility/utility.js";
import Cookies from "js-cookie";

// Feature List API
const UserStore = create((set) => ({
  isLogin: () => {
    return !!Cookies.get("token");
  },

  LoginFormData: { email: "" },
  LoginFormOnChange: (name, value) => {
    // set((LoginFormData) => ({ ...LoginFormData, [name]: value }));
    set((state) => ({
      LoginFormData: { ...state.LoginFormData, [name]: value },
    }));
  },
  OTPFormData: { otp: "" },
  OTPFormOnChange: (name, value) => {
    // set((LoginFormData) => ({ ...LoginFormData, [name]: value }));
    set((state) => ({
      OTPFormData: { ...state.OTPFormData, [name]: value },
    }));
  },

  isFormSubmit: false,
  UserOTPRequest: async (email) => {
    try {
      set({ isFormSubmit: true });
      const res = await axios.get(`/api/v1/UserOTP/${email}`);
      setEmail(email);
      set({ isFormSubmit: false });
      return res.data["status"] === "success";
    } catch (error) {
      console.error(error);
    }
  },
  UserLogoutRequest: async () => {
    try {
      set({ isFormSubmit: true });
      const res = await axios.get(`/api/v1/UserLogout`);

      set({ isFormSubmit: false });
      return res.data["status"] === "success";
    } catch (error) {
      console.error(error);
    }
  },
  VarifyLoginRequest: async (otp) => {
    try {
      set({ isFormSubmit: true });
      const email = getEmail(otp);
      const res = await axios.get(`/api/v1/VerifyLogin/${email}/${otp}`, {
        withCredentials: true,
      });

      setEmail(email);
      set({ isFormSubmit: false });
      return res.data["status"] === "success";
    } catch (error) {
      console.error(error);
    }
  },
}));

export default UserStore;
