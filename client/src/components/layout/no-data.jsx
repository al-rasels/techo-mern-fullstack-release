import notfound from "../../assets/images/no-results.png";
function NoData() {
  return (
    <>
      <div className="container p-5">
        <div className="row d-flex justify-content-center m-md-5">
          <div className="col-md-4 text-center m-md-4">
            <img alt="no-data" className="w-75" src={notfound} />
          </div>
        </div>
      </div>
    </>
  );
}

export default NoData;
