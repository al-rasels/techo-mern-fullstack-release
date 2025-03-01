import { useNavigate } from "react-router-dom";

import UserStore from "../../store/UserStore";
import ValidationHelper from "../../utility/ValidationHelper";
import UserSubmitButton from "./UserSubmitButton";
import toast from "react-hot-toast";

function OTPForm() {
  const { OTPFormData, OTPFormOnChange, VarifyLoginRequest } = UserStore();
  const navigate = useNavigate();
  const onFormSubmit = async () => {
    if (ValidationHelper.IsEmpty(OTPFormData.otp)) {
      toast.error("Valid PIN Required");
    } else {
      const res = await VarifyLoginRequest(OTPFormData.otp);

      res ? navigate("/") : toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div className="container section">
        <div className="row d-flex justify-content-center pb-md-2">
          <div className="col-md-5 mb-md-5">
            <div className="card p-5">
              <h4>Enter Verification Code</h4>
              <p>
                A verification code has been sent to the email address you
                provide
              </p>
              <input
                placeholder="Verification"
                type="text"
                className="form-control"
                value={OTPFormData.otp}
                onChange={(e) => OTPFormOnChange("otp", e.target.value)}
              />
              <UserSubmitButton
                submit={false}
                onClick={onFormSubmit}
                className="btn mt-3 btn-success"
                text="Submit"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OTPForm;
