import { Link } from "react-router-dom";
import ProductStore from "../../store/ProductStore";
import CategoriesSkeleton from "./../../skeleton/categories-skeleton";

function Categories() {
  const { CategoryList } = ProductStore();
  if (CategoryList === null) return <CategoriesSkeleton />;

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <h1 className="headline-4 text-center my-2 p-0">Top Categories</h1>
            <span className="bodySmal mb-5 text-center">
              Explore a World of Choices Across Our Most Popular <br />
              Shopping Categories
            </span>
            {CategoryList?.map((item, i) => {
              return (
                <div
                  key={i}
                  className="col-6 col-lg-8r text-center col-md-8r p-2">
                  <Link
                    to={`/by-category/${item["_id"]}`}
                    className="card h-100 rounded-3 bg-light border border-success-subtle">
                    <div className="card-body d-flex flex-column align-items-center justify-content-center">
                      <img
                        alt="category-img"
                        className="w-75"
                        src={item["categoryImg"]}
                      />
                      <p className="bodySmal mt-3 text-center">
                        {item["categoryName"]}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
