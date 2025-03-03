```javascriptreact
                    <li
                      key={i}
                      className="list-group-item d-flex flex-column flex-sm-row gap-3 justify-content-between align-items-start">
                      <div className="d-flex flex-column flex-grow-1">
                        <p className="m-1">
                          <b>Invoice No:</b> {item["tran_id"]}
                        </p>
                        <p className="m-1">
                          <b>Customer:</b> <span className="text-break">{item["cus_details"]}</span>
                        </p>
                        <p className="m-1">
                          <b>Shipping: </b>
                          <span className="text-break">{item["ship_details"]}</span>
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
```

Here are the changes made and their explanations:

1. Updated the main `<li>` element's class:

   - Added `flex-column flex-sm-row` to stack content vertically on small screens and horizontally on larger screens.
   - Removed `flex-wrap` as it's no longer needed with the new structure.

2. Wrapped the invoice details in a new `<div>` with `d-flex flex-column flex-grow-1`:

   - This ensures that the details take up available space and stack vertically.

3. Added `text-break` class to `cus_details` and `ship_details`:

   - This class allows long text to wrap within its container, preventing overflow.

4. Wrapped the "Details" button in a separate `<div>`:
   - Added classes `mt-2 mt-sm-0` to provide proper spacing when stacked vertically on small screens.

These changes will make the invoice list item responsive across different screen sizes:

- On small screens, the content will stack vertically with the "Details" button at the bottom.
- On larger screens, the content will be displayed in a row with the "Details" button aligned to the right.
- Long text in `cus_details` and `ship_details` will now wrap properly within their containers.

This structure provides a more flexible and responsive layout that adapts well to various screen sizes while ensuring that long text content is properly handled.
