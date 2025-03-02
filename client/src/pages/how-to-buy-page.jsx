import { useEffect } from "react";

import Layout from "../components/layout/layout";
import FeatureStore from "../store/FeatureStore";
import LegalContent from "./../components/features/legal-content";

function HowToBuyPage() {
  const { LegalDetailsRequest } = FeatureStore();

  useEffect(() => {
    (async () => {
      await LegalDetailsRequest("howtobuy");
    })();
  }, []);
  return (
    <Layout>
      <LegalContent />
    </Layout>
  );
}

export default HowToBuyPage;
