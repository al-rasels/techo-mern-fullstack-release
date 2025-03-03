import cartStore from "../../store/CartStore.js";
import NoData from "../layout/no-data.jsx";
import { Link } from "react-router-dom";
import CartSkeleton from "../../skeleton/cart-skeleton.jsx";
import { useEffect } from "react";

const InvoiceList = () => {
  const { InvoiceList, InvoiceListRequest } = cartStore();

  useEffect(() => {
    (async () => {
      await InvoiceListRequest();
    })();
  }, []);

  if (InvoiceList == null) {
    return <CartSkeleton />;
  } else if (InvoiceList.length === 0) {
    return <NoData />;
  } else {
    return (
      <div className="container py-md-5 mt-3">
        <div className="row my-md-5">
          <div className="col-md-12 my-3">
            <div className="card p-4">
              <ul className="list-group list-group-flush">
                {InvoiceList.map((item, i) => {
                  return (
                    <li
                      key={i}
                      className="list-group-item d-flex flex-column flex-sm-row gap-3 justify-content-between align-items-start">
                      <div className="d-flex flex-column flex-grow-1">
                        <p className="m-1">
                          <b>Invoice No:</b> {item["tran_id"]}
                        </p>
                        <p className="m-1">
                          <b>Customer:</b>{" "}
                          <span className="text-break">
                            {item["cus_details"]}
                          </span>
                        </p>
                        <p className="m-1">
                          <b>Shipping: </b>
                          <span className="text-break">
                            {item["ship_details"]}
                          </span>
                        </p>
                        <p className="m-1">
                          <b>Payment: </b>
                          {item["payment_status"]}
                        </p>
                        <p className="m-1">
                          <b>Delivery: </b> {item["delivery_status"]}
                        </p>
                      </div>
                      <div className="mt-2 mt-sm-0">
                        <Link
                          className="btn btn-success"
                          to={`/invoice/${item["_id"]}`}>
                          Details
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default InvoiceList;
