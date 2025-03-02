import { Link } from "react-router-dom";
import logo from "../../assets/images/plainb-logo.svg";
import ProductStore from "../../store/ProductStore.js";
import UserStore from "../../store/UserStore.js";
// import UserSubmitButton from "../user/UserSubmitButton.jsx";
import CartStore from "../../store/CartStore.js";
import WishStore from "../../store/WishStore.js";
import { useEffect } from "react";
import { Dropdown } from "react-bootstrap";

const AppNavBar = () => {
  const { SetSearchKeyword, SearchKeyword } = ProductStore();
  const { isLogin, UserLogoutRequest } = UserStore();
  const { CartCount, CartListRequest } = CartStore();
  const { WishCount, WishListRequest } = WishStore();
  const onLogout = async () => {
    await UserLogoutRequest();
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = "/";
  };
  useEffect(() => {
    (async () => {
      if (isLogin()) {
        await CartListRequest();
        await WishListRequest();
      }
    })();
  }, [CartCount, WishCount]);
  return (
    <>
      <div className="container-fluid text-white p-2 bg-success">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-6">
              <span>
                <span className="f-12">
                  <i className="bi bi-envelope"></i> rm.shanto786@gmail.com
                </span>
                <span className="f-12 mx-2">
                  <i className="bi bi-envelope"></i> 01763788733
                </span>
              </span>
            </div>
            <div className="col-md-6">
              <span className="float-end">
                <span>
                  <a
                    href="https://www.facebook.com/humaunalrassel.shanto"
                    target="_blank"
                    className="me-2 link-light">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/al-rasel"
                    target="_blank"
                    className="me-2 link-light">
                    <i className="bi bi-linkedin "></i>
                  </a>
                  <a
                    href="https://github.com/al-rasels"
                    target="_blank"
                    className="me-2 link-light">
                    <i className="bi bi-github"></i>
                  </a>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar sticky-top shadow-sm bg-white navbar-expand-lg navbar-light m-0 py-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="img-fluid" src={logo} alt="logo" width="96px" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav06"
            aria-controls="nav06"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav06">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="btn ms-2 btn-light position-relative" to="/">
                  <i className="bi bi-house"></i> Home
                </Link>
              </li>
              {isLogin() && (
                <>
                  <li className="nav-item">
                    <Link
                      to="/cart"
                      type="button"
                      className="btn ms-2 btn-light position-relative">
                      <i className="bi text-dark bi-bag"></i> Cart
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                        {CartCount}
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/wish"
                      type="button"
                      className="btn ms-2 btn-light position-relative">
                      <i className="bi text-dark bi-heart"></i> Wish
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                        {WishCount}
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/orders"
                      type="button"
                      className="btn ms-2 btn-light position-relative">
                      <i className="bi text-dark  bi-truck"></i> Order
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <div className="d-flex align-items-center">
              <div className="input-group">
                <input
                  onChange={(e) => SetSearchKeyword(e.target.value)}
                  className="form-control"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <Link
                  to={
                    SearchKeyword.length > 0
                      ? `/by-keyword/${SearchKeyword}`
                      : `/`
                  }
                  className="btn btn-outline-dark"
                  type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ width: 24, height: 24 }}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </Link>
              </div>

              {isLogin() ? (
                <div className="ms-3">
                  <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                      <i className="bi bi-person"></i>
                      <span className="ms-1">User Menu</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item as={Link} to="/profile">
                        <i className="bi bi-person-fill-gear"></i>
                        <span className="ms-1">Edit Profile</span>
                      </Dropdown.Item>
                      <Dropdown.Item onClick={onLogout}>
                        <i className="bi bi-person-x"></i>
                        <span className="ms-1">Logout</span>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              ) : (
                <Link type="button" className="btn ms-3 btn-light" to="/login">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AppNavBar;
