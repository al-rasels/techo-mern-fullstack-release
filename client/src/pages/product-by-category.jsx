import { useParams } from "react-router-dom";
import ProductStore from "../store/ProductStore";
import { useEffect } from "react";
import Layout from "../components/layout/layout";
import ProductList from "../components/product/product-list";
function ProductByCategories() {
  const { ListByCategoryRequest } = ProductStore();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await ListByCategoryRequest(id);
    })();
  }, [id]);
  return (
    <Layout>
      <ProductList />
    </Layout>
  );
}

export default ProductByCategories;
