import { useEffect } from "react";

import Layout from "../components/layout/layout";
import FeatureStore from "../store/FeatureStore";
import LegalContent from "./../components/features/legal-content";

function PrivacyPage() {
  const { LegalDetailsRequest } = FeatureStore();

  useEffect(() => {
    (async () => {
      await LegalDetailsRequest("privacy");
    })();
  }, []);
  return (
    <Layout>
      <LegalContent />
    </Layout>
  );
}

export default PrivacyPage;
