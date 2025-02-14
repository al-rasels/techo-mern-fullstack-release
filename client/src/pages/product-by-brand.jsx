import { useParams } from "react-router-dom";
import ProductStore from "../store/ProductStore";
import { useEffect } from "react";
import Layout from "../components/layout/layout";
import ProductList from "../components/product/product-list";

function ProductByBrand() {
  const { ListByBrandRequest } = ProductStore();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await ListByBrandRequest(id);
    })();
  }, [id]);
  return (
    <Layout>
      <ProductList />
    </Layout>
  );
}

export default ProductByBrand;
