import { useParams } from "react-router-dom";
import ProductStore from "../store/ProductStore";
import { useEffect } from "react";
import Layout from "../components/layout/layout";
import ProductList from "../components/product/product-list";
function ProductByKeyword() {
  const { ListByKeywordRequest } = ProductStore();
  const { keyword } = useParams();

  useEffect(() => {
    (async () => {
      await ListByKeywordRequest(keyword);
    })();
  }, [keyword]);
  return (
    <Layout>
      <ProductList />
    </Layout>
  );
}

export default ProductByKeyword;
