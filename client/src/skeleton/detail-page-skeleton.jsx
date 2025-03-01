import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import default styles

const DetailPageSkeleton = () => {
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-12 align-content-center p-1">
            <div className="container">
              <div className="row">
                <div className="col-7">
                  <Skeleton height={450} width={600} />
                  <Skeleton height={10} width={600} />
                  <Skeleton height={100} width={600} />
                </div>
                <div className="col-5">
                  <Skeleton height={50} width={400} />
                  <Skeleton height={10} width={400} />
                  <Skeleton height={10} width={400} />
                  <Skeleton height={100} width={400} />
                  <Skeleton height={100} width={400} />
                </div>

                <div className="col-12 mt-5">
                  <Skeleton height={10} width={1200} />
                  <Skeleton height={10} width={1200} />
                  <Skeleton height={10} width={1200} />
                  <Skeleton height={10} width={1200} />
                  <Skeleton height={10} width={1200} />
                  <Skeleton height={10} width={1200} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPageSkeleton;
