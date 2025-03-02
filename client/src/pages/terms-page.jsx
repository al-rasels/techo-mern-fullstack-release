import { useEffect } from "react";

import Layout from "../components/layout/layout";
import FeatureStore from "../store/FeatureStore";
import LegalContent from "./../components/features/legal-content";

function TermsPage() {
  const { LegalDetailsRequest } = FeatureStore();

  useEffect(() => {
    (async () => {
      await LegalDetailsRequest("terms");
    })();
  }, []);
  return (
    <Layout>
      <LegalContent />
    </Layout>
  );
}

export default TermsPage;
