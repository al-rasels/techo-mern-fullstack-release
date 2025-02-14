import LegalContentSkeleton from "../../skeleton/Legal-content-sketon";
import FeatureStore from "../../store/FeatureStore";
import parce from "html-react-parser";

function LegalContent() {
  const { LegalDetails } = FeatureStore();

  if (LegalDetails === null) {
    return <LegalContentSkeleton />;
  } else {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card p-4">
              {parce(LegalDetails[0]["description"])}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LegalContent;
