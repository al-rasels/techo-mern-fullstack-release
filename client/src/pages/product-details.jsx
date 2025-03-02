import { useParams } from "react-router-dom";
import Details from "../components/product/details";
import Layout from "../components/layout/layout";
import Brands from "../components/product/brands";
import ProductStore from "../store/ProductStore";
import { useEffect } from "react";

import DetailPageSkeleton from "../skeleton/detail-page-skeleton";

function ProductDetails() {
  const { id } = useParams();

  const {
    BrandList,
    DetailsRequest,
    isDetailLoaded,
    ReviewListRequest,
    BrandListRequest,
  } = ProductStore();

  useEffect(() => {
    (async () => {
      await DetailsRequest(id);
      await ReviewListRequest(id);
      BrandList === null ? await BrandListRequest() : null;
    })();
  }, [id]);

  return (
    <Layout>
      {isDetailLoaded === true ? <Details /> : <DetailPageSkeleton />}
      <Brands />
    </Layout>
  );
}

export default ProductDetails;
