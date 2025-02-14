import { useEffect } from "react";

import Layout from "../components/layout/layout";
import FeatureStore from "../store/FeatureStore";
import LegalContent from "./../components/features/legal-content";

function ComplainPage() {
  const { LegalDetailsRequest } = FeatureStore();

  useEffect(() => {
    (async () => {
      await LegalDetailsRequest("complain");
    })();
  }, []);
  return (
    <Layout>
      <LegalContent />
    </Layout>
  );
}

export default ComplainPage;
