import { useState } from "react";
import DetailsSkeleton from "../../skeleton/details-skeleton";
import ProductStore from "../../store/ProductStore";
import ProductImages from "./productImages";
import parce from "html-react-parser";
import Reviews from "./reviews";
import CartStore from "../../store/CartStore";
import CartSubmitButton from "./../cart/CartSubmitButton";
import toast from "react-hot-toast";
import WishStore from "../../store/WishStore";
import WishSubmitButton from "../wish/WishSubmitButton";

function Details() {
  const { Details } = ProductStore();
  let [quantity, SetQuantity] = useState(1);
  const { CartSaveRequest, CartForm, CartListRequest, CartFormChange } =
    CartStore();
  const { WishSaveRequest, WishListRequest } = WishStore();

  const IncreaseQuatity = () => {
    SetQuantity((quantity) => quantity + 1);
  };
  const DecreaseQuatity = () => {
    if (quantity > 1) SetQuantity((quantity) => quantity - 1);
  };

  const AddCart = async (productID, quantity) => {
    const res = CartSaveRequest(CartForm, productID, quantity);

    if (res) {
      toast.success("Cart Item Added");
      await CartListRequest();
    }
  };
  const AddWish = async (productID) => {
    const res = WishSaveRequest(productID);

    if (res) {
      toast.success("Wish Item Added");
      await WishListRequest();
    }
  };

  if (Details === null) {
    <DetailsSkeleton />;
  } else {
    return (
      <>
        <div>
          <div className="container mt-2">
            <div className="row">
              <div className="col-md-7 p-3">
                <ProductImages />
              </div>
              <div className="col-md-5 p-3">
                <h4>{Details[0]["title"]}</h4>
                <p className="text-muted bodySmal my-1">
                  Category:{Details[0]["category"]["categoryName"]}
                </p>
                <p className="text-muted bodySmal my-1">
                  {Details[0]["brand"]["brandName"]}
                </p>
                <p className="bodySmal mb-2 mt-1">{Details[0]["shortDes"]}</p>

                {Details[0]["discount"] ? (
                  <span className="bodyXLarge">
                    Price:{" "}
                    <strike className="text-secondary">
                      ${Details[0]["price"]}
                    </strike>{" "}
                    ${Details[0]["discountPrice"]}
                  </span>
                ) : (
                  <span>{Details[0]["price"]}</span>
                )}

                <div className="row">
                  <div className="col-4 p-2">
                    <label className="bodySmal">Size</label>
                    <select
                      value={CartForm.size}
                      onChange={(e) => {
                        CartFormChange("size", e.target.value);
                      }}
                      className="form-control my-2 form-select">
                      <option value="">Size</option>
                      {Details[0]["details"]["size"]
                        .split(",")
                        .map((item, i) => {
                          return (
                            <option key={i} value={item}>
                              {item}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="col-4 p-2">
                    <label className="bodySmal">Color</label>
                    <select
                      value={CartForm.color}
                      onChange={(e) => {
                        CartFormChange("color", e.target.value);
                      }}
                      className="form-control my-2 form-select">
                      <option value="">Color</option>
                      {Details[0]["details"]["color"]
                        .split(",")
                        .map((item, i) => {
                          return (
                            <option key={i} value={item}>
                              {item}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="col-4  p-2">
                    <label className="bodySmal">Quantity</label>
                    <div className="input-group my-2">
                      <button
                        onClick={DecreaseQuatity}
                        className="btn btn-outline-secondary">
                        -
                      </button>
                      <input
                        type="text"
                        value={quantity}
                        className="form-control bg-light text-center"
                        readOnly
                      />
                      <button
                        onClick={IncreaseQuatity}
                        className="btn btn-outline-secondary">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-4  p-2">
                    <CartSubmitButton
                      onClick={async () => {
                        await AddCart(Details[0]["_id"], quantity);
                      }}
                      className="btn w-100 btn-success"
                      text="Add to Cart"
                    />
                  </div>
                  <div className="col-4  p-2">
                    <WishSubmitButton
                      onClick={async () => {
                        await AddWish(Details[0]["_id"]);
                      }}
                      className="btn w-100 btn-success"
                      text="Add to Wish"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="Speci-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Speci-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="Speci-tab-pane"
                    aria-selected="true">
                    Specifications
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="Review-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Review-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="Review-tab-pane"
                    aria-selected="false">
                    Review
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="Speci-tab-pane"
                  role="tabpanel"
                  aria-labelledby="Speci-tab"
                  tabIndex="0">
                  {parce(Details[0]["details"]["des"])}
                </div>
                <div
                  className="tab-pane fade"
                  id="Review-tab-pane"
                  role="tabpanel"
                  aria-labelledby="Review-tab"
                  tabIndex="0">
                  <ul className="list-group list-group-flush">
                    <Reviews />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Details;
