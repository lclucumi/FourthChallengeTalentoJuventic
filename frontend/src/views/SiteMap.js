import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class SiteMap extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section id="site-map">
          <div className="container">
            <div className="section-title">
              <h2>Mapa del sitio</h2>
              <p>
                Esta sección le ayudará a localizar los distintos contenidos en
                forma de listado para facilitar la ubicación de la información
                dentro de nuestro sitio Web.
              </p>
            </div>

            <div className="row content-map">
              <div className="col-md-3 site">
                <h2>Inicio</h2>
                <ul className="bx-ul">
                  <li>
                    <i className="bx bx-check-double"></i>
                    <a href="/">Inicio</a>
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i>
                    <a href="/about">Quienes Somos</a>
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i>
                    <a href="/menu">Menú</a>
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i>
                    <a href="/service">Servicios</a>
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i>
                    <a href="/contact">Contáctanos</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 site">
                <h2>Quienes Somos</h2>
                <ul className="bx-ul">
                  <li>
                    <i className="bx bx-check-double"></i>
                    <a href="/about">Quienes somos</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 site">
                <h2>Menú</h2>
                <ul className="bx-ul">
                  <li>
                    <i className="bx bx-check-double"></i>
                    <a href="/menu">Menú</a>
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i>
                    <a href="/contact">Contáctanos</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 site">
                <h2>Servicios</h2>
                <ul className="bx-ul">
                  <li>
                    <i className="bx bx-check-double"></i>
                    <a href="/service">Servicios</a>
                  </li>
                  <li>
                    <i className="bx bx-check-double"></i>
                    <a href="/contact">Contáctanos</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 site"></div>

              <div className="col-md-3 site">
                <h2>Contáctanos</h2>
                <ul className="bx-ul">
                  <li>
                    <i className="bx bx-check-double"></i>
                    <a href="/contact">Contáctanos</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 site">
                <h2>Mapa del sitio</h2>
                <ul className="bx-ul">
                  <li>
                    <i className="bx bx-check-double"></i>
                    <a href="/map">Mapa del sitio</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default SiteMap;
