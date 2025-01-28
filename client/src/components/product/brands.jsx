import { Link } from "react-router-dom";
import ProductStore from "../../store/ProductStore";
import BrandSkeleton from "./../../skeleton/brands-skeleton";

function Brands() {
  const { BrandList } = ProductStore();

  if (BrandList === null) return <BrandSkeleton />;

  return (
    <>
      {" "}
      <div className="section">
        <div className="container">
          <div className="row">
            <h1 className="headline-4 text-center my-2 p-0">Top Brands</h1>
            <span className="bodySmal mb-5 text-center">
              Explore a World of Choices Across Our Most Popular <br />
              Shopping Categories{" "}
            </span>
            {BrandList?.map((item, i) => (
              <div
                key={i}
                className="col-6 col-lg-8r text-center col-md-8r p-2">
                <Link
                  to={`/by-brand/${item["_id"]}`}
                  className="card h-100 rounded-3 bg-white">
                  <div className="card-body">
                    <img
                      className="w-75"
                      alt="Brand-Image"
                      src={"https://placehold.co/400"}
                    />
                    <p className="bodySmal mt-3">{item.brandName} </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Brands;
