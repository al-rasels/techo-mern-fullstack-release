import { create } from "zustand";
import axios from "axios";
import { getEmail, setEmail, unauthorized } from "../utility/utility.js";
import Cookies from "js-cookie";

// Feature List API
const UserStore = create((set) => ({
  isLogin: () => {
    return !!Cookies.get("token");
  },

  LoginFormData: { email: "" },
  LoginFormOnChange: (name, value) => {
    set((state) => ({
      LoginFormData: { ...state.LoginFormData, [name]: value },
    }));
  },
  OTPFormData: { otp: "" },
  OTPFormOnChange: (name, value) => {
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

  ProfileForm: {
    cus_add: "",
    cus_city: "",
    cus_country: "",
    cus_fax: "",
    cus_name: "",
    cus_phone: "",
    cus_postcode: "",
    cus_state: "",
    ship_add: "",
    ship_city: "",
    ship_country: "",
    ship_name: "",
    ship_phone: "",
    ship_postcode: "",
    ship_state: "",
  },
  ProfileFormChange: (name, value) => {
    set((state) => ({
      ProfileForm: {
        ...state.ProfileForm,
        [name]: value,
      },
    }));
  },
  ProfileDetails: null,
  ProfileDetailsRequest: async () => {
    try {
      const res = await axios.get(`/api/v1/ReadProfile`);

      if (res.data["data"]) {
        set({ ProfileDetails: res.data["data"] });
        set({ ProfileForm: res.data["data"] });
      } else {
        set({ ProfileDetails: [] });
      }
    } catch (error) {
      unauthorized(error.response.status);
    }
  },
  ProfileSaveRequest: async (PostBody) => {
    try {
      set({ ProfileDetails: null });
      const res = await axios.post(`/api/v1/UpdateProfile`, PostBody);
      return res.data["status"] === "success";
    } catch (error) {
      unauthorized(error.response.status);
    }
  },
}));

export default UserStore;
