import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";
import dataChefs from "../json/dataChefs.json";
import { Card, Col, Row } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

class About extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section id="us">
          <div class="section-title">
            <h2>
              Quienes <span>Somos</span>
            </h2>
          </div>
          <div class="row us-distance" id="imagen">
            <div class="col-md-6 col-sm-12">
              <img
                class="img-fluid shadow-lg sha"
                src="https://firebasestorage.googleapis.com/v0/b/fourthchallengejuventic.appspot.com/o/us-image.jpg?alt=media&token=01ab2526-5101-4b47-a73c-9d6168a1ed6d"
                alt="nosotros"
              />
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="content us-content">
                <h3>
                  Nuestra <strong> Historia </strong>
                </h3>
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
                <p>
                  Nuestros clientes son la razón de ser, pero la gente es la
                  fuente de nuestra fortaleza. El capital humano, su compromiso,
                  su profesionalismo y dedicación son factores que nos ayudan a
                  tener éxito y poder crecer como empresa, Dunkers posee una
                  variedad de menú extensa como su clientela, la cual busca
                  satisface diversos gustos, esperamos que el menú crezca con el
                  pasar de los años.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="chefs">
          <div class="container">
            <div class="section-title">
              <h2>Nuestro equipo de trabajo</h2>
            </div>

            <Row>
              {dataChefs.objChefs.map((chef) => {
                return (
                  <Col className="px-4 team" md="4">
                    <Card>
                      <Card.Img variant="top" src={chef.img} />
                      <Card.Body>
                        <Card.Title>
                          <h3>{chef.nombre}</h3>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          <h5>{chef.puesto}</h5>
                        </Card.Subtitle>
                        <Card.Text>
                          <div class="social">
                            <a href="">
                              <i class="bx bxl-twitter"></i>
                            </a>
                            <a href="">
                              <i class="bx bxl-facebook"></i>
                            </a>
                            <a href="">
                              <i class="bx bxl-instagram"></i>
                            </a>
                            <a href="">
                              <i class="bx bxl-linkedin"></i>
                            </a>
                          </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        </section>
        <TestimonialCarousel />
        <Footer />
      </>
    );
  }
}

export default About;
