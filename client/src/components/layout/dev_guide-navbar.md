```javascriptreact
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
                <Link
                  type="button"
                  className="btn ms-3 btn-light"
                  to="/login">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
```

The main changes made to achieve the desired layout are:

1. Changed the `navbar-nav` class to include `me-auto` which pushes the following content to the right.
2. Moved the search input and buttons into a separate `div` with `d-flex align-items-center` to align them properly.
3. Adjusted the structure of the navigation items to use `li` elements for better semantics.
4. Removed unnecessary classes and adjusted spacing for a cleaner look.
