import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";
import { Card, Col, Row } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAbout: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://localhost:5016/api/Empleado")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ dataAbout: data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
        <Header />
        <section id="us">
          <div className="section-title">
            <h2>
              Quienes <span>Somos</span>
            </h2>
          </div>
          <div className="row us-distance" id="imagen">
            <div className="col-md-6 col-sm-12">
              <img
                className="img-fluid shadow-lg sha"
                src="https://firebasestorage.googleapis.com/v0/b/fourthchallengejuventic.appspot.com/o/us-image.jpg?alt=media&token=01ab2526-5101-4b47-a73c-9d6168a1ed6d"
                alt="nosotros"
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="content us-content">
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
          <div className="container">
            <div className="section-title">
              <h2>Nuestro equipo de trabajo</h2>
            </div>

            <Row>
              {this.state.dataAbout.map((chef, i) => {
                return (
                  <Col className="px-4 team" md="4">
                    <Card key={i}>
                      <Card.Img variant="top" src={chef.image} />
                      <Card.Body>
                        <Card.Title>
                          <h3>{chef.name}</h3>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          <h5>{chef.description}</h5>
                        </Card.Subtitle>
                        <Card.Text>
                          <div className="social">
                            <a href="">
                              <i className="bx bxl-twitter"></i>
                            </a>
                            <a href="">
                              <i className="bx bxl-facebook"></i>
                            </a>
                            <a href="">
                              <i className="bx bxl-instagram"></i>
                            </a>
                            <a href="">
                              <i className="bx bxl-linkedin"></i>
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
