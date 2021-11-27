import React from "react";
class ManagerHeader extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img src="./logo.png" alt="" width="50" height="44" />
                Dunkers
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="/manager">
                      Manager
                    </a>
                  </li>
                </ul>

                <form className="d-flex userProfile">
                  <a href="/login" className="user">
                    <i className="bx bx-user-circle"></i>
                  </a>
                </form>

                <form className="d-flex media">
                  <a href="#" className="facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bx bxl-youtube"></i>
                  </a>
                  <a href="#" className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </form>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default ManagerHeader;
