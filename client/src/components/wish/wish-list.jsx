import { useEffect } from "react";
import WishStore from "../../store/WishStore";
import ProductSkeleton from "../../skeleton/products-skeleton";
import NoData from "../layout/no-data";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function WishList() {
  const { WishListRequest, WishList, RemoveWishListRequest } = WishStore();

  useEffect(() => {
    (async () => {
      await WishListRequest();
    })();
  }, []);

  const remove = async (productID) => {
    const res = await RemoveWishListRequest(productID);
    if (res) {
      toast.success("Product removed successfully");
    } else {
      toast.error("Failed to remove product");
    }

    await WishListRequest();
  };

  if (WishList === null) {
    return (
      <div className="container">
        <div className="row">
          <ProductSkeleton />
        </div>
      </div>
    );
  } else if (WishList.length === 0) {
    return <NoData />;
  } else {
    return (
      <div className="container mt-3">
        <div className="row">
          {WishList.map((item, i) => {
            let price = (
              <p className="bodyMedium  text-dark my-1">
                Price: ${item["product"]["price"]}{" "}
              </p>
            );
            if (item["product"]["discount"] === true) {
              price = (
                <p className="bodyMedium  text-dark my-1">
                  Price:<strike> ${item["product"]["price"]} </strike> $
                  {item["product"]["discountPrice"]}{" "}
                </p>
              );
            }
            return (
              <div key={i} className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                <div className="card shadow-sm h-100 rounded-3 bg-white">
                  <img
                    alt="product-images"
                    className="w-100 rounded-top-2"
                    src={item["product"]["image"]}
                  />
                  <div className="card-body">
                    <p className="bodySmal text-secondary my-1">
                      {item["product"]["title"]}
                    </p>
                    {price}
                    <StarRatings
                      rating={parseFloat(item["product"]["star"])}
                      starRatedColor="red"
                      starDimension="15px"
                      starSpacing="2px"
                    />

                    <p className="mt-3">
                      <button
                        onClick={async () => {
                          await remove(item["productID"]);
                        }}
                        className="btn  btn-outline-danger btn-sm">
                        Remove
                      </button>
                      <Link
                        className="btn mx-2 btn-outline-success btn-sm"
                        to={`/details/${item["productID"]}`}>
                        Details
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default WishList;
