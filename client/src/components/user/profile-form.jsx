import { useEffect } from "react";
import UserStore from "../../store/UserStore";
import toast from "react-hot-toast";
import ProfileSkeleton from "../../skeleton/profile-skeleton";

function ProfileForm() {
  const {
    ProfileForm,
    ProfileFormChange,
    ProfileDetails,
    ProfileDetailsRequest,
    ProfileSaveRequest,
  } = UserStore();

  useEffect(() => {
    (async () => {
      await ProfileDetailsRequest();
    })();
  }, []);

  const onSave = async () => {
    const res = await ProfileSaveRequest(ProfileForm);
    if (res) {
      toast.success("Profile Updated");
      await ProfileDetailsRequest();
    }
  };

  if (ProfileDetails === null) {
    return <ProfileSkeleton />;
  } else {
    return (
      <>
        <div className="container mt-5">
          <div className="card p-5 rounded-3">
            <h6>Customer Details</h6>
            <hr />
            <div className="row mb-4">
              <div className="col-md-3 p-2">
                <label className="form-label">Customer Name </label>
                <input
                  type="text"
                  className="form-control"
                  value={ProfileForm.cus_name}
                  onChange={(e) => {
                    ProfileFormChange("cus_name", e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Customer Phone </label>
                <input
                  type="text"
                  className="form-control "
                  value={ProfileForm.cus_phone}
                  onChange={(e) => {
                    ProfileFormChange("cus_phone", e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Customer Fax </label>
                <input
                  type="text"
                  className="form-control "
                  value={ProfileForm.cus_fax}
                  onChange={(e) => {
                    ProfileFormChange("cus_fax", e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Customer Country </label>
                <input
                  type="text"
                  className="form-control "
                  value={ProfileForm.cus_country}
                  onChange={(e) => {
                    ProfileFormChange("cus_country", e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Customer City </label>
                <input
                  type="text"
                  className="form-control "
                  value={ProfileForm.cus_city}
                  onChange={(e) => {
                    ProfileFormChange("cus_city", e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Customer State </label>
                <input
                  type="text"
                  className="form-control "
                  value={ProfileForm.cus_state}
                  onChange={(e) => {
                    ProfileFormChange("cus_state", e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Customer Post Code </label>
                <input
                  type="text"
                  className="form-control "
                  value={ProfileForm.cus_postcode}
                  onChange={(e) => {
                    ProfileFormChange("cus_postcode", e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Customer Address</label>
                <input
                  type="text"
                  className="form-control "
                  value={ProfileForm.cus_add}
                  onChange={(e) => {
                    ProfileFormChange("cus_add", e.target.value);
                  }}
                />
              </div>
            </div>
            <h6>Shipping Details</h6>
            <hr />
            <div className="row">
              <div className="col-md-3 p-2">
                <label className="form-label">Shipping Name </label>
                <input
                  type="text"
                  className="form-control "
                  value={ProfileForm.ship_name}
                  onChange={(e) => {
                    ProfileFormChange("ship_name", e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Shipping Phone </label>
                <input
                  type="text"
                  className="form-control "
                  value={ProfileForm.ship_phone}
                  onChange={(e) => {
                    ProfileFormChange("ship_phone", e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Shipping Country </label>
                <input
                  type="text"
                  className="form-control "
                  value={ProfileForm.ship_country}
                  onChange={(e) => {
                    ProfileFormChange("ship_country", e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Shipping City </label>
                <input
                  type="text"
                  className="form-control "
                  value={ProfileForm.ship_city}
                  onChange={(e) => {
                    ProfileFormChange("ship_city", e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Shipping State </label>
                <input
                  type="text"
                  className="form-control "
                  value={ProfileForm.ship_state}
                  onChange={(e) => {
                    ProfileFormChange("ship_state", e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Shipping Post Code </label>
                <input
                  type="text"
                  className="form-control "
                  value={ProfileForm.ship_postcode}
                  onChange={(e) => {
                    ProfileFormChange("ship_postcode", e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3 p-2">
                <label className="form-label">Shipping Address</label>
                <input
                  type="text"
                  className="form-control "
                  value={ProfileForm.ship_add}
                  onChange={(e) => {
                    ProfileFormChange("ship_add", e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-3 p-2">
                <button className="btn btn-success" onClick={onSave}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProfileForm;
