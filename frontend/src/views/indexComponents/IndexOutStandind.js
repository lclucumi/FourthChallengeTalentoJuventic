import React from "react";
import { Row } from "reactstrap";
import MenuOutStanding from "./MenuOutStanding";
import MenuServices from "./MenuServices";

class IndexOutStanding extends React.Component {
  render() {
    return (
      <>
        <section id="destacados">
          <div className="container image-bg">
            <div className="section-title">
              <h2>
                Nuestros platos<span> destacados</span>
              </h2>
              <p>
                Nuestro restaurante cuenta con platos que se ajustan a todos los
                gustos. Te invitamos a ver algunos de nuestros destacados.
              </p>
            </div>

            <Row>
              <MenuOutStanding />
            </Row>
            <div className="btn-menu">
              <a
                className="btn btn-outline-warning"
                href="./pages/menu.html"
                role="button"
              >
                Ver menú completo
              </a>
            </div>
          </div>
        </section>

        <section id="events">
          <div className="container image-bg-service">
            <div className="section-title">
              <h2>
                Nuestros <span>Servicios</span>
              </h2>
              <p>
                Somos la mejor opción. Contamos con experiencia probada por
                miles de clientes satisfechos y todo lo que necesitas para
                lograr que tu celebración sea única y divertida.
              </p>
            </div>

            <Row>
              <MenuServices />
            </Row>
            <div className="btn-menu">
              <a
                className="btn btn-outline-warning"
                href="./pages/services.html"
                role="button"
              >
                Conoce nuestros servicios
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default IndexOutStanding;
