import Layout from "../components/layout/layout";
import Brands from "../components/product/brands";
import WishList from "../components/wish/wish-list";

function WishListPage() {
  return (
    <Layout>
      <WishList />
      <Brands />
    </Layout>
  );
}

export default WishListPage;
