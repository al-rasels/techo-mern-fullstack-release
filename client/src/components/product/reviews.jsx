import StarRatings from "react-star-ratings";
import ProductStore from "../../store/ProductStore";

function Reviews() {
  const { ReviewList } = ProductStore();
  return (
    <div>
      <ul className="list-group mt-4 list-group-flush">
        {ReviewList?.map((item, i) => {
          return (
            <li className="list-group-item bg-transparent" key={i}>
              <h6>
                <i className="bi bi-person"> </i>
                {item["profile"]["cus_name"]}
              </h6>
              <StarRatings
                rating={parseFloat(item["rating"])}
                starRatedColor="red"
                starDimension="15px"
                starSpacing="2px"
              />
              <p>{item["des"]}</p>
            </li>
          ); // Assuming NavItem is the actual review text or title
        })}
      </ul>
    </div>
  );
}

export default Reviews;
