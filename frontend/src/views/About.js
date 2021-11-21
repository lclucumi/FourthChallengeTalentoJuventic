import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";
import dataChefs from "../json/dataChefs.json";
import usImg from "../images/us-image.jpg";
import imgChef1 from "../images/chefs/manager.jpg";
import imgChef2 from "../images/chefs/chefs-1.jpg";
import imgChef3 from "../images/chefs/chefs-2.jpg";
import imgChef4 from "../images/chefs/chefs-3.jpg";
import imgChef5 from "../images/chefs/waiter.jpg";
import imgChef6 from "../images/chefs/waiter-2.jpg";
import imgChef7 from "../images/chefs/waiter-3.jpg";
import imgChef8 from "../images/chefs/cleaning-staff.jpg";
import imgChef9 from "../images/chefs/cleaning-staff-2.jpg";
import { Card, Col, Row } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chefImg: [
        imgChef1,
        imgChef2,
        imgChef3,
        imgChef4,
        imgChef5,
        imgChef6,
        imgChef7,
        imgChef8,
        imgChef9,
      ],
    };
  }
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
              <img class="img-fluid shadow-lg sha" src={usImg} alt="nosotros" />
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
              {dataChefs.objChefs.map((chef, i) => {
                return (
                  <Col className="px-4 team" md="4">
                    <Card>
                      <Card.Img variant="top" src={this.state.chefImg[i]} />
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
