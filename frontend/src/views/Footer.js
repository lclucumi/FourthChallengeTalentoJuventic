import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer id="footer">
          <div className="container">
            <h3>Dunkers</h3>
            <p>¡Bienvenido! estás en la página del mejor restaurante.</p>
            <div className="social-links">
              <a href="#" className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bx bxl-youtube"></i>
              </a>
              <a href="#" className="twitter">
                <i className="bx bxl-twitter"></i>
              </a>
            </div>
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Dunkers</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
