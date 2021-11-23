import React from "react";
import { Col, Row } from "react-bootstrap";

class IndexAbout extends React.Component {
  render() {
    return (
      <>
        <section id="us">
          <Row id="imagen">
            <Col className="px-6 imagen-about" md="6">
              <img
                className="img-fluid shadow-lg sha"
                src="https://firebasestorage.googleapis.com/v0/b/fourthchallengejuventic.appspot.com/o/about.jpg?alt=media&token=42405577-9d2b-469d-80f4-f9e9520319e4"
                alt="us"
              />
            </Col>
            <Col className="px-6 us-info" md="6">
              <div className="content">
                <h3>Información del restaurante</h3>
                <p>
                  Dunkers inicio operaciones en 2021, con la inauguración de su
                  primer restaurante de comida tradicional colombiana. El estilo
                  original de su decoración, que combina elementos tradicionales
                  y europeos, nació en ese local.
                </p>
                <p>
                  Desde que se inauguró el primer restaurante se ha puesto un
                  compromiso que ha sido satisfacer los gustos y necesidades con
                  un buen servicio y calidad del producto. Por ello se usan
                  materias primas seleccionadas para la preparación de nuestros
                  platos, además de investigar e innovar con platos nuevos.
                </p>
                <div className="btn-menu">
                  <a
                    className="btn btn-outline-warning"
                    href="/about"
                    role="button"
                  >
                    Conócenos
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </>
    );
  }
}

export default IndexAbout;
