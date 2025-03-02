import { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import Brands from "../components/product/brands";
import FeatureStore from "../store/FeatureStore";
import ProductStore from "../store/ProductStore";
import Slider from "../components/product/slider";
import Features from "../components/features/features";
import Categories from "../components/product/categories";
import Products from "../components/product/products";
import FirstVisitModal from "../components/layout/firstVisitModal";

function HomePage() {
  const {
    BrandListRequest,
    CategoryListRequest,
    SliderListRequest,
    ListByRemarkRequest,
  } = ProductStore();
  const { FeatureListRequest } = FeatureStore();
  const [modalShow, setModalShow] = useState(false);
  let hasRunBefore = sessionStorage.getItem("useEffectRan");
  useEffect(() => {
    (async () => {
      await SliderListRequest();
      await FeatureListRequest();
      await ListByRemarkRequest("new");
      await CategoryListRequest();
      await BrandListRequest();

      setTimeout(() => {
        if (!hasRunBefore) {
          setModalShow(true);
          sessionStorage.setItem("useEffectRan", "true");
        }
      }, 2000);
    })();
  }, []);

  return (
    <Layout>
      <Slider />
      <Features />
      <Categories />
      <Products />
      <Brands />
      <FirstVisitModal
        onLoad={() => {}}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Layout>
  );
}

export default HomePage;
