import { useParams } from "react-router-dom";
import Details from "../components/product/details";
import Layout from "../components/layout/layout";
import Brands from "../components/product/brands";
import ProductStore from "../store/ProductStore";
import { useEffect } from "react";

function ProductDetails() {
  const { id } = useParams();

  const { BrandList, DetailsRequest, ReviewListRequest, BrandListRequest } =
    ProductStore();

  useEffect(() => {
    (async () => {
      await DetailsRequest(id);
      await ReviewListRequest(id);
      BrandList === null ? await BrandListRequest() : null;
    })();
  }, [id]);

  return (
    <Layout>
      <Details />
      <Brands />
    </Layout>
  );
}

export default ProductDetails;
