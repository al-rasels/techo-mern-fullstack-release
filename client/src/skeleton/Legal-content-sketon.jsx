import Skeleton from "react-loading-skeleton";
function LegalContentSkeleton() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card p-4">
              {Array.from({ length: 8 }).map((_, i) => {
                return <Skeleton key={i} count={3} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LegalContentSkeleton;
